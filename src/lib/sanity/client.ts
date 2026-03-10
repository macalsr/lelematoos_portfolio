import { sanityConfig } from "./config";

type SanityQueryParams = Record<string, string | number | boolean>;

function getSanityBaseUrl() {
  const apiHost = sanityConfig.useCdn ? "apicdn.sanity.io" : "api.sanity.io";
  return `https://${sanityConfig.projectId}.${apiHost}/v${sanityConfig.apiVersion}/data/query/${sanityConfig.dataset}`;
}

export async function fetchSanity<T>(query: string, params: SanityQueryParams = {}): Promise<T> {
  const token = process.env.SANITY_API_READ_TOKEN?.trim();
  if (!token) {
    throw new Error(
      `Missing SANITY_API_READ_TOKEN for private Sanity dataset access (dataset: ${sanityConfig.dataset})`,
    );
  }

  const searchParams = new URLSearchParams({ query });

  for (const [key, value] of Object.entries(params)) {
    searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(`${getSanityBaseUrl()}?${searchParams.toString()}`, {
    method: "GET",
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `Sanity query failed with status ${response.status} (dataset: ${sanityConfig.dataset}). ${body}`,
    );
  }

  const payload = (await response.json()) as { result: T };
  return payload.result;
}

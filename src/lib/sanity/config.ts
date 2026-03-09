export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "qtnabn6i",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01",
  useCdn: false,
};

export function getSanityFallbackMode() {
  return (process.env.SANITY_FALLBACK_MODE ?? "off")
    .trim()
    .toLowerCase();
}

export function isSanityConfigured() {
  return Boolean(sanityConfig.projectId && sanityConfig.dataset);
}

export function shouldUseLocalFallback() {
  const mode = getSanityFallbackMode();
  return mode === "on" || mode === "local" || mode === "true" || mode === "mock";
}

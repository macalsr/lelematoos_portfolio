import { redirect } from "next/navigation";

function getStudioUrl() {
  return process.env.SANITY_STUDIO_URL?.trim();
}

export default function AdminRedirectPage() {
  const studioUrl = getStudioUrl();

  if (studioUrl) {
    redirect(studioUrl);
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold">Admin indisponivel</h1>
      <p className="mt-3 text-base leading-relaxed">
        Defina a variavel <code>SANITY_STUDIO_URL</code> para redirecionar{" "}
        <code>/admin</code> para o Studio externo.
      </p>
    </main>
  );
}

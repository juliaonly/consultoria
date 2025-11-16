import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Recursos ConsultorIA",
  description: "Artículos y frameworks para lanzar programas de IA enterprise.",
};

export default function RecursosPage() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      <header>
        <p className="text-sm uppercase tracking-[0.5em] text-emerald-300">Recursos</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Playbooks para liderar IA en enterprise</h1>
        <p className="mt-2 text-white/70">
          Actualizamos semanalmente frameworks descargables, listas de chequeo y lanzamientos reales.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{post.category}</p>
            <h2 className="mt-3 text-2xl text-white">{post.title}</h2>
            <p className="mt-2 text-white/70">{post.summary}</p>
            <p className="mt-4 text-sm text-white/60">{post.author} · {new Date(post.publishedAt).toLocaleDateString()}</p>
            <Link
              href={`/recursos/${post.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-emerald-300"
            >
              Leer artículo →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

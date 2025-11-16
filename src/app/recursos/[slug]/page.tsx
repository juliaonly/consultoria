import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Recurso no disponible" };
  return {
    title: `${post.title} | ConsultorIA`,
    description: post.summary,
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-16">
      <Link href="/recursos" className="text-sm text-emerald-300">
        ← Volver a recursos
      </Link>
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">{post.category}</p>
      <h1 className="text-4xl font-semibold text-white">{post.title}</h1>
      <p className="text-sm text-white/60">
        {post.author} · {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <article className="prose prose-invert max-w-none text-white/80">
        {post.content.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </article>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">¿Listo para activar este playbook?</h2>
        <p className="mt-2 text-white/70">Agenda un diagnóstico y conectaremos el formulario inteligente a tu stack.</p>
        <Link
          href="/#contacto"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/90 px-6 py-3 font-semibold text-slate-950"
        >
          Agendar diagnóstico
        </Link>
      </div>
    </main>
  );
}

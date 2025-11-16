import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  category: string;
  publishedAt: string;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

function parseFrontMatter(raw: string) {
  const frontMatterRegex = /^---\n([\s\S]+?)\n---\n([\s\S]*)$/;
  const match = raw.match(frontMatterRegex);
  if (!match) {
    return { data: {}, content: raw.trim() };
  }
  const [, data, content] = match;
  const entries = data
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [key, ...rest] = line.split(":");
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
    });
  return {
    data: Object.fromEntries(entries),
    content: content.trim(),
  };
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = parseFrontMatter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title ?? file,
        summary: data.summary ?? "",
        author: data.author ?? "ConsultorIA",
        category: data.category ?? "General",
        publishedAt: data.publishedAt ?? new Date().toISOString(),
        content,
      } as Post;
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontMatter(raw);
  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? "",
    author: data.author ?? "ConsultorIA",
    category: data.category ?? "General",
    publishedAt: data.publishedAt ?? new Date().toISOString(),
    content,
  } as Post;
}

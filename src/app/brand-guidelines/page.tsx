import fs from "fs";
import path from "path";

export const metadata = {
  title: "Brand guidelines ConsultorIA",
};

export default function BrandGuidelinesPage() {
  const file = path.join(process.cwd(), "src", "content", "brand-guidelines.md");
  const content = fs.readFileSync(file, "utf-8");
  return (
    <main className="mx-auto max-w-3xl space-y-4 px-6 py-16 text-white">
      {content.split("\n\n").map((block) => (
        <p key={block}>{block}</p>
      ))}
    </main>
  );
}

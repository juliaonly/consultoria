import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

export type CaseStudy = {
  company: string;
  headline: string;
  description: string;
  result: string;
  tag: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

type CaseCardProps = {
  caseStudy: CaseStudy;
};

export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <article className="group relative flex flex-col gap-5 overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(10,16,46,0.72)] p-8 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-[1px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(116,247,208,0.16),_rgba(9,14,40,0.9))]" />
      </div>
      <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#040d23]/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(51,241,127,0.16),_transparent_70%)] opacity-70 transition duration-500 group-hover:opacity-100" />
        <Image
          src={caseStudy.image}
          alt={caseStudy.imageAlt}
          width={640}
          height={360}
          loading="lazy"
          className="relative z-10 h-auto w-full object-cover"
          sizes="(min-width: 1024px) 640px, 90vw"
        />
      </figure>
      <div className="relative flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
        <span className="h-2 w-2 rounded-full bg-[#74f7d0]" />
        {caseStudy.tag}
      </div>
      <div className="relative space-y-4">
        <h3 className="font-[var(--font-display)] text-3xl text-white">{caseStudy.headline}</h3>
        <p className="text-sm text-slate-200">{caseStudy.description}</p>
      </div>
      <div className="relative rounded-2xl border border-[#74f7d0]/30 bg-[#0b1e33]/80 p-4 text-sm text-[#74f7d0]">
        {caseStudy.result}
      </div>
      <div className="relative flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>{caseStudy.company}</span>
        <Link href={caseStudy.ctaHref} className="inline-flex items-center gap-2 text-[#74f7d0]">
          {caseStudy.ctaLabel}
          <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

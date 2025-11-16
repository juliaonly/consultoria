import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudy } from "@/types/content";

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <motion.article
      className="min-w-[320px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        <span className="rounded-full border border-white/20 px-3 py-1 text-white/80">{item.tag}</span>
        <span>{item.company}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-white">{item.headline}</h3>
      <p className="mt-3 text-white/70">{item.description}</p>
      <p className="mt-4 text-emerald-200">{item.result}</p>
      <div className="mt-6 border-t border-white/10 pt-6">
        <Image src={item.image} alt={item.imageAlt} width={320} height={160} className="h-32 w-full object-contain" />
      </div>
    </motion.article>
  );
}

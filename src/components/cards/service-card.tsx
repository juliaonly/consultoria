import Image from "next/image";
import { motion } from "framer-motion";
import { Service } from "@/types/content";
import { ArrowIcon } from "../icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-sm shadow-[0_20px_60px_rgba(3,6,24,0.65)]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-emerald-200/80">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 px-3 py-1">
            {service.badge ?? "Core"}
          </span>
          <span>{service.subtitle}</span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
          <p className="mt-2 text-base text-white/70">{service.description}</p>
        </div>
        <ul className="space-y-3 text-white/80">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm">
              <span className="mt-1 size-1.5 rounded-full bg-emerald-300" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 text-white/70">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
          <span>Ver blueprint</span>
          <ArrowIcon className="size-4" />
        </div>
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={160}
          height={120}
          className="h-24 w-auto"
          priority={false}
        />
      </div>
    </motion.article>
  );
}

import { Service } from "@/types/content";
import { ServiceCard } from "./service-card";

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}

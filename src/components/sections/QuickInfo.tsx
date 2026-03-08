import type { QuickInfoItem } from "@/types/site";
import { Card } from "@/components/ui/Card";

type QuickInfoProps = {
  items: QuickInfoItem[];
};

export function QuickInfo({ items }: QuickInfoProps) {
  return (
    <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-3">
      {items.map((item) => (
        <Card key={item.title} variant="quick">
          <strong className="mb-1.5 block text-[22px] font-black uppercase text-green-dark max-md:text-[20px]">
            {item.title}
          </strong>
          <span className="text-xs font-black uppercase tracking-[0.16em] text-muted">
            {item.subtitle}
          </span>
        </Card>
      ))}
    </div>
  );
}

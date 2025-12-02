import { LucideIcon } from "lucide-react";

export default function Badge({
  Icon,
  title,
}: {
  Icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="inline-flex items-center rounded-full border px-2.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1.5 py-1">
      <Icon className="size-4 mr-2" />
      <p>{title}</p>
    </div>
  );
}

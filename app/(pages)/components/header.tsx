import { LucideIcon } from "lucide-react";
import Badge from "./badge";
import Title from "./title";

interface HeaderPageProps {
  Icon: LucideIcon;
  title: string;
  badgeTitle: string;
  description: string;
}

export default function HeaderPage({
  Icon,
  title,
  badgeTitle,
  description,
}: HeaderPageProps) {
  return (
    <>
      <div>
        <Badge Icon={Icon} title={badgeTitle} />
      </div>
      <Title title={title} />
      <p className="text-secondary/80 mt-4 leading-7">{description}</p>
    </>
  );
}

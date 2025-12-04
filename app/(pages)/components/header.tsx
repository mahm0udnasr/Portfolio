import { LucideIcon } from "lucide-react";
import Badge from "./badge";
import Title from "./title";

interface HeaderPageProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function HeaderPage({
  Icon,
  title,
  description,
}: HeaderPageProps) {
  return (
    <>
      <div>
        <Badge Icon={Icon} title="About me" />
      </div>
      <Title title={title} />
      <p className="text-secondary/80 mt-4 leading-7">{description}</p>
    </>
  );
}

import {
  FolderGit2,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkComponentProps {
  href: string;
  children: ReactNode;
}

const LinkComponent = ({ href, children }: LinkComponentProps) => (
  <Link
    className="relative text-white hover:bg-orange-500/10 hover:text-orange-500 rounded-full p-2 transition-all duration-300"
    href={href}
  >
    {children}
    <span className="absolute right-15 top-0 bg-white/30 border border-white p-1 rounded-lg text-sm hidden">
      Home
    </span>
  </Link>
);

const Navbar = () => {
  return (
    <div className="fixed right-0 top-0 bottom-0 w-fit flex justify-center items-center mx-4 max-sm:my-4">
      <div className="rounded-lg bg-white/30 border border-white flex flex-col justify-center items-center gap-y-5 py-3 px-2">
        <LinkComponent href="/">
          <Home />
        </LinkComponent>
        <LinkComponent href="/about">
          <User />
        </LinkComponent>
        <LinkComponent href="/skills">
          <Lightbulb />
        </LinkComponent>
        <LinkComponent href="/education">
          <GraduationCap />
        </LinkComponent>
        <LinkComponent href="/projects">
          <FolderGit2 />
        </LinkComponent>
        <LinkComponent href="/contact-us">
          <Mail />
        </LinkComponent>
      </div>
    </div>
  );
};

export default Navbar;

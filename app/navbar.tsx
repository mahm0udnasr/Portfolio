"use client";
import {
  FolderGit2,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

interface LinkComponentProps {
  href: string;
  children: ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const LinkComponent = ({
  href,
  children,
  label,
  isActive,
  onClick,
}: LinkComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={`relative group text-white/80 hover:text-white rounded-xl p-3 transition-all duration-300 ${
        isActive ? "bg-white/20 text-white shadow-lg" : "hover:bg-white/10"
      }`}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative z-10">{children}</div>

      {/* Tooltip */}
      <span
        className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-800 whitespace-nowrap shadow-xl transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {label}
      </span>

      {/* Active indicator */}
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-8 bg-orange-500 rounded-t-full" />
      )}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname.slice(0, -1) ?? "/");

  const navItems = [
    { href: "/", icon: <Home size={22} />, label: "Home" },
    // { href: "/about", icon: <User size={22} />, label: "About" },
    // { href: "/skills", icon: <Lightbulb size={22} />, label: "Skills" },
    { href: "/projects", icon: <FolderGit2 size={22} />, label: "Projects" },
    // { href: "/contact-us", icon: <Mail size={22} />, label: "Contact" },
  ];

  return (
    <div className="fixed  top-4 right-0 left-0 m-auto w-fit z-50">
      <nav className="relative">
        {/* Glassmorphism container with enhanced effects */}
        <div className="relative rounded-2xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-2">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent" />

          {/* Navigation items */}
          <div className="relative flex gap-2">
            {navItems.map((item) => (
              <LinkComponent
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={activeLink === item.href}
                onClick={() => setActiveLink(item.href)}
              >
                {item.icon}
              </LinkComponent>
            ))}
          </div>
        </div>

        {/* Ambient glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 blur-2xl -z-10 opacity-50" />
      </nav>
    </div>
  );
};

export default Navbar;

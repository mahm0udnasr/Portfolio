import { ReactNode } from "react";

export default function Icons({
  children,
  link,
  title,
}: {
  children: ReactNode;
  link: string;
  title: string;
}) {
  return (
    <a
      href={link}
      className={
        "inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium text-white bg-transparent border border-white " +
        "transition duration-150 ease-in-out active:scale-95 hover:bg-white/5 hover:text-white " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 " +
        "disabled:opacity-50 disabled:pointer-events-none"
      }
      target="_blank"
      rel="noopener noreferrer"
      title={title || ""}
    >
      {children}
    </a>
  );
}

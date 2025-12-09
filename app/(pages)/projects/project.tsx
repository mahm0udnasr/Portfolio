import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  img: string;
  title: string;
  description: string;
  skills: string[];
  demoLink?: string;
  sourceCodeLink?: string;
  priority?: number;
}

export default function Project({
  img,
  title,
  description,
  skills,
  demoLink,
  sourceCodeLink,
}: ProjectProps) {
  // const skills = ["React", "D3.js", "Tailwind CSS"];

  return (
    <div className="group relative w-full bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-4">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-purple-800/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Actions Separator */}
        <div className="h-px w-full bg-gray-100 dark:bg-white/5 my-1" />

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-xl transition-transform active:scale-95 hover:bg-gray-800 dark:hover:bg-gray-100"
            >
              View Demo
              <ArrowRight className="size-4" />
            </a>
          )}
          {sourceCodeLink && (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                demoLink ? "" : "flex-1"
              } inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-transparent border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white text-sm font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors active:scale-95`}
            >
              <Github className="size-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

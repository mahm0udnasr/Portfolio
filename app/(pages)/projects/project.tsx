import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Project() {
  const skills = ["React", "D3.js", "Tailwind CSS"];
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden max-w-sm border border-gray-200 dark:border-neutral-800 hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-full h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20">
        <Image
          src="https://i.ibb.co/M5s2R37d/dashboard.webp"
          alt="Nexus Analytics Dashboard"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-3">
          Nexus Analytics Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
          A comprehensive SaaS analytics platform featuring real-time data
          visualization, dark mode support, and customizable widget layouts for
          enterprise users.
        </p>

        {/* Skills/Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-200 dark:border-purple-800"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href="#"
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            View Project
            <ExternalLink className="size-4" />
          </a>
          <a
            href="#"
            className="px-4 py-2.5 border-2 border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
            title="Source Code"
          >
            <Github className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

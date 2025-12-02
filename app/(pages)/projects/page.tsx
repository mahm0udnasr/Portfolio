import React from "react";
import { Metadata } from "next";
import Badge from "../badge";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects. From MERN stack applications to Next.js websites, see how I build modern, scalable, and performant web solutions.",
  openGraph: {
    title: "Projects by Mahmoud Nasr | Full Stack Developer Portfolio",
    description:
      "Browse through my web development projects showcasing expertise in React, Next.js, Node.js, and modern web technologies.",
    url: "https://mahmoudnasr-portfolio.pages.dev/projects",
  },
};

const ProjectsPage = () => {
  return (
    // <div className="flex relative wrap-break-word min-h-screen h-dvh items-center justify-between pt-14 pb-4 px-40 mx-md:p-4 max-sm:pt-20">
    <div>
      <div>
        <Badge Icon={Layers} title="Projects" />
      </div>
      <h1 className="mt-2.5 font-bold text-3xl text-secondary relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-20 after:h-2 after:bg-orange-500">
        My Projects
      </h1>
      <p className="text-secondary/80 mt-4 leading-7">
        I love to Build Cool Projects. Here, you'll find a curated collection of
        my creative endeavors and technical projects. Each piece represents a
        journey of innovation, problem-solving, and continuous learning. Feel
        free to explore this showcase of my passion and expertise in action.
      </p>
    </div>
  );
};

export default ProjectsPage;

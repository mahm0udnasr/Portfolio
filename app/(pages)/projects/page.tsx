import React from "react";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import HeaderPage from "../components/header";
import Projects from "./projects";

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
    <div>
      <HeaderPage
        Icon={Layers}
        title="My Projects"
        badgeTitle="Projects"
        description="I love to Build Cool Projects. Here, you'll find a curated collection of
        my creative endeavors and technical projects. Each piece represents a
        journey of innovation, problem-solving, and continuous learning. Feel
        free to explore this showcase of my passion and expertise in action."
      />
      <Projects />
    </div>
  );
};

export default ProjectsPage;

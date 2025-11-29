import React from "react";
import { Metadata } from "next";

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
  return <div>ProjectsPage</div>;
};

export default ProjectsPage;

import React from "react";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import HeaderPage from "../components/header";
import Projects from "./projects";
import Project from "./project";

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
  const projectsData = [
    {
      img: "https://i.ibb.co/M5s2R37d/dashboard.webp",
      title: "Nexus Analytics1",
      description:
        "A comprehensive analytics suite featuring real-time data visualization and customizable widget layouts for enterprise applications.",
      skills: ["React", "D3.js", "Tailwind CSS"],
      demoLink: "https://nexus-analytics-demo.com",
      sourceCodeLink: "https://google.com",
      priority: 1,
    },
    {
      img: "https://i.ibb.co/M5s2R37d/dashboard.webp",
      title: "Nexus Analytics2",
      description:
        "A comprehensive analytics suite featuring real-time data visualization and customizable widget layouts for enterprise applications.",
      skills: ["React", "D3.js", "Tailwind CSS"],
      demoLink: "https://nexus-analytics-demo.com",
      sourceCodeLink: "https://google.com",
      priority: 2,
    },
    {
      img: "https://i.ibb.co/M5s2R37d/dashboard.webp",
      title: "Nexus Analytics3",
      description:
        "A comprehensive analytics suite featuring real-time data visualization and customizable widget layouts for enterprise applications.",
      skills: ["React", "D3.js", "Tailwind CSS"],
      demoLink: "https://nexus-analytics-demo.com",
      sourceCodeLink: "https://google.com",
      priority: 1,
    },
  ];
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {projectsData.sort((a, b) => a.priority - b.priority).map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            skills={project.skills}
            demoLink={project.demoLink}
            sourceCodeLink={project.sourceCodeLink}
            priority={project.priority}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

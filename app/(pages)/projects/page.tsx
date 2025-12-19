import { Layers } from "lucide-react";
import HeaderPage from "../components/header";
import Projects from "./projects";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a curated collection of projects by Mahmoud Nasr, showcasing expertise in modern web technologies and innovative solutions.",
  openGraph: {
    title: "Projects | Mahmoud Nasr",
    description:
      "Explore a curated collection of projects by Mahmoud Nasr, showcasing expertise in modern web technologies and innovative solutions.",
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

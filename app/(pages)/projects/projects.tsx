"use client";

import { useEffect, useState } from "react";
import { LoaderIcon } from "lucide-react";
import Project from "./project";
import { supabase } from "@/lib/supabase";
import { Project as ProjectType } from "@/lib/supabase/types";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_visible", true)
        .order("priority", { ascending: true });

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6 lg:px-8 py-8 md:py-12">
      {loading ? (
        <div className="col-span-full text-center py-12">
          <LoaderIcon className="mx-auto h-8 w-8 text-purple-600 animate-spin" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Loading projects...
          </p>
        </div>
      ) : projects.length > 0 ? (
        projects.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            title={project.title}
            description={project.description}
            skills={project.skills}
            demoLink={project.demo_link ?? undefined}
            sourceCodeLink={project.source_code_link ?? undefined}
            priority={project.priority}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No projects available yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;

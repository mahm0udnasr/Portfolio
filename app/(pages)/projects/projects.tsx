import Project from "./project";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <Project />
      <Project />
    </div>
  );
}

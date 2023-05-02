import { projects } from "../utils/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="my-10">
      <div className="w-full text-center">
        <h1 className="text-purple-700 font-caveat text-4xl md:text-5xl font-semibold uppercase py-2">
          My Projects
        </h1>
        <p className="text-purple-500 font-caveat text-xl md:text-2xl font-semibold py-2">
          My Works
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://github.com/nesathanozturk?tab=repositories"
          className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          More projects
          <span className="relative"></span>
        </a>
      </div>
    </section>
  );
};

export default Projects;

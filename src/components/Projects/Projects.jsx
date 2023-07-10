import ProjectCard from "./ProjectCard";
import { projects } from "../../utils/data";

const Projects = ({ dark }) => {
  return (
    <section id="projects" className="my-10">
      <div className="w-full text-center" data-aos="zoom-in">
        <h1 className="text-purple-700 font-caveat text-4xl md:text-5xl font-semibold uppercase py-2 dark:text-[#0891B2]">
          My Projects
        </h1>
        <p className="text-purple-500 font-caveat text-xl md:text-2xl font-semibold py-2 dark:text-[#127491]">
          My Works
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center mt-10" data-aos="zoom-in-up">
        {dark ? (
          <a
            href="https://github.com/nesathanozturk?tab=repositories"
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-800 group-hover:-rotate-180 ease"></span>
              <span className="relative"> More project</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        ) : (
          <a
            href="https://github.com/nesathanozturk?tab=repositories"
            className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            More project
            <span className="relative"></span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Projects;

import DarkButton from "../buttons/DarkButton";
import LightButton from "../buttons/LightButton";
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
        {dark ? <DarkButton /> : <LightButton />}
      </div>
    </section>
  );
};

export default Projects;

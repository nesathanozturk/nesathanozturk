import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="w-full text-center">
        <h1 className="text-purple-700 font-caveat text-4xl md:text-5xl font-semibold uppercase py-2">
          My Projects
        </h1>
        <p className="text-purple-500 font-caveat text-xl md:text-2xl font-semibold py-2">
          My Works
        </p>
      </div>
      <ProjectCard />
    </section>
  );
};

export default Projects;

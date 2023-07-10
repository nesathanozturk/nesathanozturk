import Icons from "./Icons";
import developer from "../assets/images/developer.png";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-4 mt-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-20">
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-up-right"
        >
          <h1 className="text-purple-700 font-caveat text-4xl md:text-5xl font-semibold uppercase py-2 dark:text-[#0891B2]">
            My Skills
          </h1>
          <p className="text-purple-500 font-caveat text-xl md:text-2xl font-semibold py-2 dark:text-[#127491]">
            What am i using?
          </p>
          <div className="flex justify-center md:justify-start flex-wrap items-center gap-4 mt-4 mb-6 dark:text-[#999]">
            <Icons />
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <img
            className="w-72 h-full object-cover m-auto md:m-0 md:max-w-lg cursor-pointer"
            src={developer}
            alt="A man coding"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { AiFillHtml5 } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import {
  SiSass,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import image2 from "../assets/images/image2.png";

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
            <span title="HTML5" className="technologies">
              <AiFillHtml5 size={60} className="text-red-600" />
              <small className="font-semibold">html5</small>
            </span>
            <span title="CSS3" className="technologies">
              <SiCss3 size={50} className="text-blue-600" />
              <small className="font-semibold pt-2">css3</small>
            </span>
            <span title="SASS" className="technologies">
              <SiSass size={50} className="text-pink-600" />
              <small className="font-semibold pt-1">sass</small>
            </span>
            <span title="TailwindCSS" className="technologies">
              <SiTailwindcss size={50} className="text-blue-500" />
              <small className="font-semibold pt-1">tailwindcss</small>
            </span>
            <span title="Styled Components" className="technologies">
              <SiStyledcomponents size={55} className="text-purple-600" />
              <small className="font-semibold">styledcomponents</small>
            </span>
            <span title="JavaScript" className="technologies">
              <SiJavascript size={50} className="text-yellow-500" />
              <small className="font-semibold pt-1">javascript</small>
            </span>
            <span title="React" className="technologies">
              <FaReact size={50} className="text-blue-400" />
              <small className="font-semibold pt-1">react</small>
            </span>
            <span title="Redux" className="technologies">
              <SiRedux size={50} className="text-purple-600" />
              <small className="font-semibold">redux</small>
            </span>
            <span title="Git" className="technologies">
              <BsGit size={50} className="text-red-600" />
              <small className="font-semibold">git</small>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/4" data-aos="fade-up-left">
          <img
            className="w-72 h-full object-cover m-auto md:m-0 md:max-w-lg cursor-pointer"
            src={image2}
            alt="Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

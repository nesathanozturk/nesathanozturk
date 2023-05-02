import { AiFillHtml5 } from "react-icons/ai";
import {
  SiSass,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import image2 from "../assets/images/image2.png";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="w-full md:w-1/4">
          <img
            className="w-72 h-full object-cover m-auto md:m-0 md:max-w-lg"
            src={image2}
            alt="Developer"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-caveat text-5xl font-semibold uppercase py-2">
            My Skills
          </h1>
          <div className="flex justify-center md:justify-start items-center gap-2 mt-4 mb-6">
            <span>
              <AiFillHtml5 size={60} className="text-red-600" />
            </span>
            <span>
              <SiCss3 size={50} className="text-blue-600" />
            </span>
            <span>
              <SiSass size={50} className="text-pink-600" />
            </span>
            <span>
              <SiTailwindcss size={50} className="text-blue-500" />
            </span>
            <span>
              <SiStyledcomponents size={60} className="text-purple-600" />
            </span>
            <span>
              <SiJavascript size={50} className="text-yellow-500" />
            </span>
            <span>
              <FaReact size={50} className="text-blue-400" />
            </span>
            <span>
              <SiRedux size={50} className="text-purple-600" />
            </span>
            <span>
              <BsGit size={50} className="text-red-600" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

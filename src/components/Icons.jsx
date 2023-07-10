import { AiFillHtml5 } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import {
  SiSass,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiVercel,
  SiNetlify,
  SiNpm,
  SiYarn,
} from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";

const Icons = () => {
  return (
    <>
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
      <span title="Material UI" className="technologies">
        <SiMui size={55} className="text-blue-500" />
        <small className="font-semibold">mui</small>
      </span>
      <span title="JavaScript" className="technologies">
        <SiJavascript size={50} className="text-yellow-500" />
        <small className="font-semibold pt-1">javascript</small>
      </span>
      <span title="Typescript" className="technologies">
        <SiTypescript size={50} className="text-blue-600" />
        <small className="font-semibold pt-1">typescript</small>
      </span>
      <span title="React" className="technologies">
        <FaReact size={50} className="text-blue-400" />
        <small className="font-semibold pt-1">react</small>
      </span>
      <span title="Redux" className="technologies">
        <SiRedux size={50} className="text-purple-600" />
        <small className="font-semibold">redux</small>
      </span>
      <span title="Firebase" className="technologies">
        <TbBrandFirebase size={50} className="text-yellow-500" />
        <small className="font-semibold">firebase</small>
      </span>
      <span title="vercel" className="technologies">
        <SiVercel size={50} />
        <small className="font-semibold">vercel</small>
      </span>
      <span title="Netlify" className="technologies">
        <SiNetlify size={50} className="text-cyan-500" />
        <small className="font-semibold">netlify</small>
      </span>
      <span title="npm" className="technologies">
        <SiNpm size={50} />
        <small className="font-semibold">npm</small>
      </span>
      <span title="yarn" className="technologies">
        <SiYarn size={50} className="text-blue-500" />
        <small className="font-semibold">yarn</small>
      </span>
      <span title="Git" className="technologies">
        <BsGit size={50} className="text-red-600" />
        <small className="font-semibold">git</small>
      </span>
    </>
  );
};

export default Icons;

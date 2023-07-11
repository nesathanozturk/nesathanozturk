import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import TypeEffect from "../TypeEffect";
import hero from "../../assets/images/hero.png";

const Hero = ({ dark }) => {
  return (
    <section className="w-full py-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-20">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-4 tracking-widest font-medium dark:text-white">
            Hey There 👋,&nbsp; I'm
          </h1>
          <TypeEffect />
          <p className="text-base md:text-lg text-[#303030] dark:text-white">
            I am a self-taught developer. I love coding and learning new things.
            I am currently working on React.js. I am also interested in other
            Frontend technologies.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-2 mt-4 mb-6">
            <a href="https://www.github.com/nesathanozturk/">
              <AiFillGithub
                size={35}
                className="text-purple-800 hover:text-purple-900 transition-colors cursor-pointer dark:text-white dark:hover:text-purple-800"
              />
            </a>
            <a href="https://www.linkedin.com/in/nesathanozturk">
              <AiFillLinkedin
                size={40}
                className="text-blue-700 hover:text-blue-900 transition-colors cursor-pointer dark:text-white dark:hover:text-blue-700"
              />
            </a>
            <a href="https://www.instagram.com/nesathanozturk/">
              <BsInstagram
                size={35}
                className="text-red-700 hover:text-red-800 transition-colors cursor-pointer dark:text-white dark:hover:text-red-700"
              />
            </a>
          </div>
          <a
            href="mailto:nesathanozturk061@gmail.com"
            className="from-purple-500 via-purple-600 to-purple-700 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-purple-800/80 text-white bg-gradient-to-r hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 darkBtn"
          >
            Contact Me
          </a>
        </div>
        <div className="w-full md:w-1/4">
          <img
            className="w-72 h-full object-cover m-auto md:m-0 md:max-w-lg cursor-pointer"
            src={hero}
            alt="A man with computer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

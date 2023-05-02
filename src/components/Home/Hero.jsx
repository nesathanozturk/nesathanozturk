import { home } from "../../utils/data";
import Typewriter from "typewriter-effect";
import image1 from "../../assets/images/image1.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Hero = ({ dark }) => {
  return (
    <section className="w-full py-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-20">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-4 tracking-widest dark:text-white">
            HEY THERE 👋,&nbsp; I'M
          </h1>
          {home.map((text) => (
            <h1
              key={text.id}
              className="font-caveat text-2xl md:text-3xl mb-4 text-purple-800 font-bold tracking-widest dark:text-[#0891B2]"
            >
              <Typewriter
                options={{
                  strings: [`${text.name}`, `${text.job}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          ))}
          <p className="text-base md:text-lg text-[#303030] dark:text-white">
            I am a self-taught developer. I love coding and learning new things.
            I am currently working on React.js. I am also interested in other
            Frontend technologies.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-2 mt-4 mb-6">
            <span>
              <AiFillGithub
                size={35}
                className="text-purple-800 hover:text-purple-900 transition-colors cursor-pointer dark:text-white dark:hover:text-purple-800"
              />
            </span>
            <span>
              <AiFillLinkedin
                size={40}
                className="text-blue-700 hover:text-blue-900 transition-colors cursor-pointer dark:text-white dark:hover:text-blue-700"
              />
            </span>
            <span>
              <BsInstagram
                size={35}
                className="text-red-700 hover:text-red-800 transition-colors cursor-pointer dark:text-white dark:hover:text-red-700"
              />
            </span>
          </div>
          {dark ? (
            <a
              href="mailto:nesathanozturk061@gmail.com"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Contact Me
            </a>
          ) : (
            <a
              href="mailto:nesathanozturk061@gmail.com"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Contact Me
            </a>
          )}
        </div>
        <div className="w-full md:w-1/4">
          <img
            className="w-72 h-full object-cover m-auto md:m-0 md:max-w-lg cursor-pointer"
            src={image1}
            alt="Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

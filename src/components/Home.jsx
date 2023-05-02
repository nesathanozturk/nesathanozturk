import Navbar from "./Navbar";
import { home } from "../utils/data";
import Typewriter from "typewriter-effect";
import image1 from "../assets/images/image1.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="w-full py-4">
        <div className="container m-auto flex flex-col-reverse md:flex-row justify-center items-center gap-20">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-xl md:text-2xl mb-4 tracking-widest">
              HEY THERE 👋,&nbsp; I'M
            </h1>
            {home.map((text) => (
              <h1 className="font-caveat text-2xl md:text-3xl mb-4 text-purple-800 font-bold tracking-widest">
                <Typewriter
                  options={{
                    strings: [`${text.name}`, `${text.job}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            ))}
            <p className="text-base md:text-lg text-[#303030]">
              I am a self-taught developer. I love coding and learning new
              things. I am currently working on React.js. I am also interested
              in other Frontend technologies.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-2 mt-4 mb-6">
              <span>
                <AiFillGithub
                  size={35}
                  className="text-purple-800 hover:text-purple-900 transition-colors cursor-pointer"
                />
              </span>
              <span>
                <AiFillLinkedin
                  size={40}
                  className="text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
                />
              </span>
              <span>
                <BsInstagram
                  size={35}
                  className="text-red-700 hover:text-red-800 transition-colors cursor-pointer"
                />
              </span>
            </div>
            <a
              href="mailto:nesathanozturk061@gmail.com"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full md:w-1/4">
            <img
              className="w-72 h-full object-cover m-auto md:m-0 md:max-w-lg"
              src={image1}
              alt="Developer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

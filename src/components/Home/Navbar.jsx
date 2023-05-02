import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineSun } from "react-icons/hi";

const Navbar = ({ dark, setDark }) => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav
      className="container mx-auto py-8 px-8 md:px-28 flex justify-between items-center mb-10"
      data-aos="fade-down"
    >
      <h1 className="font-caveat text-3xl text-purple-700 transition-colors cursor-pointer dark:text-[#0891B2]">
        Neşathan Öztürk
      </h1>
      <div
        className={`text-center sm:text-left bg-purple-700 dark:bg-gray-600 md:bg-white md:dark:bg-[#171c28]  w-full px-10 sm:px-0 right-0 z-50 sm:w-72 sm:h-58 absolute top-20 sm:right-4 md:static md:top-0 md:right-0 rounded-none sm:rounded-xl md:block ${
          hamburger ? "block" : "hidden"
        }`}
      >
        <ul className="p-4 md:p-0 flex flex-col md:flex-row justify-start md:justify-center md:items-center gap-5 font-semibold text-white md:text-black dark:text-white">
          <li className="hover:text-orange-500 md:hover:text-purple-700 transition-colors dark:hover:dark:text-[#0891B2]">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-orange-500 md:hover:text-purple-700 transition-colors dark:hover:dark:text-[#0891B2]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-orange-500 md:hover:text-purple-700 transition-colors dark:hover:dark:text-[#0891B2]">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-orange-500 md:hover:text-purple-700 transition-colors dark:hover:dark:text-[#0891B2]">
            <a href="#projects">Projects</a>
          </li>
          <li
            className="hidden md:block cursor-pointer hover:text-gray-800 transition-colors"
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <HiOutlineSun
                size={25}
                className="dark:hover:dark:text-[#0891B2]"
              />
            ) : (
              <MdDarkMode size={25} className="hover:text-purple-700" />
            )}
          </li>
        </ul>
      </div>
      <div className="flex md:hidden gap-2">
        <span
          className="cursor-pointer hover:text-gray-800 transition-colors dark:text-white"
          onClick={() => setDark(!dark)}
        >
          {dark ? <HiOutlineSun size={25} /> : <MdDarkMode size={25} />}
        </span>
        <span
          className="cursor-pointer dark:text-white"
          onClick={() => setHamburger(!hamburger)}
        >
          <GiHamburgerMenu size={25} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

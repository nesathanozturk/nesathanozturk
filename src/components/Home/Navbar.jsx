import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineSun } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";

const Navbar = ({ dark, toggleDark }) => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav
      className="container mx-auto py-8 px-8 md:px-28 flex justify-between items-center mb-10"
      data-aos="fade-down"
    >
      <h1 className="font-caveat text-3xl text-purple-700 transition-colors cursor-pointer dark:text-[#0891B2]">
        Neşathan Öztürk
      </h1>
      <div className={`hamburger sm:h-58 ${hamburger ? "block" : "hidden"}`}>
        <ul className="p-4 md:p-0 flex flex-col md:flex-row justify-start md:justify-center md:items-center gap-5 font-semibold text-white md:text-black dark:text-white">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#projects">Projects</a>
          </li>
          <li
            className="hidden md:block cursor-pointer hover:text-gray-800 transition-colors"
            onClick={toggleDark}
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
          onClick={toggleDark}
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

import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-16 flex justify-between items-center">
      <h1 className="font-caveat text-3xl text-purple-700 transition-colors cursor-pointer">
        Neşathan Öztürk
      </h1>
      <div>
        <ul className="flex justify-center items-center gap-5 font-semibold">
          <li className="hover:text-purple-700 transition-colors">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-purple-700 transition-colors">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-700 transition-colors">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-purple-700 transition-colors">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-gray-800 transition-colors">
            <MdDarkMode size={25} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

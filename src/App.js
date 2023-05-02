import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("dark") === "true" ? true : false
  );

  const toggleDark = () => {
    setDark(!dark);
    localStorage.setItem("dark", !dark);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      document.getElementById("topBtn").classList.add("opacity-100");
    } else {
      document.getElementById("topBtn").classList.remove("opacity-100");
    }
  });

  return (
    <main className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-[#171c28] relative">
        <Home dark={dark} setDark={setDark} toggleDark={toggleDark} />
        <About />
        <Skills />
        <Projects dark={dark} />
        <Footer />
        <button
          id="topBtn"
          className={`bg-purple-700 dark:bg-[#0891B2] opacity-0 text-white fixed bottom-10 right-10 text-3xl rounded-full p-2 transition-all 
         `}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </main>
  );
};

export default App;

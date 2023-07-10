import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import UpButton from "./components/UpButton";

const App = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("dark") === "true" ? true : false
  );

  const toggleDark = () => {
    setDark((prev) => !prev);
    localStorage.setItem("dark", !dark);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-[#171c28] relative">
        <Home dark={dark} setDark={setDark} toggleDark={toggleDark} />
        <About />
        <Skills />
        <Projects dark={dark} />
        <Footer />
        <UpButton />
      </div>
    </main>
  );
};

export default App;

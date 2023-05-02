import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-[#171c28]">
        <Home dark={dark} setDark={setDark} />
        <About />
        <Skills />
        <Projects dark={dark} />
        <Footer />
      </div>
    </main>
  );
};

export default App;

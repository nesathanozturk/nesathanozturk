import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = ({ dark, toggleDark }) => {
  return (
    <section id="home">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <Hero dark={dark} />
    </section>
  );
};

export default Home;

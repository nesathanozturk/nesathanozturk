import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = ({ dark, toggleDark }) => {
  return (
    <section id="home">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <Hero dark={dark} />
    </section>
  );
};

export default Home;

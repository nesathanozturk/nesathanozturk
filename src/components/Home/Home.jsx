import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = ({ dark, setDark }) => {
  return (
    <section id="home">
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
    </section>
  );
};

export default Home;

import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="left">
            <h2>Hey There &#128075;</h2>

            <Typewriter
              options={{
                strings: ["Hello", "World"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

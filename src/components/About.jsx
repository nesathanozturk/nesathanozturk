import image4 from "../assets/images/image4.png";

const About = () => {
  return (
    <section id="about" className="w-full p-4 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        <div className="w-full md:w-1/4" data-aos="fade-right">
          <img
            className="w-72 h-full object-cover m-auto md:m-0 md:max-w-lg cursor-pointer"
            src={image4}
            alt="Developer"
          />
        </div>
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
        >
          <h1 className="text-purple-700 font-caveat text-4xl md:text-5xl font-semibold uppercase py-2 dark:text-[#0891B2]">
            About Me
          </h1>
          <p className="text-purple-500 font-caveat text-xl md:text-2xl font-semibold mb-4 dark:text-[#0891B2]">
            Who am i?
          </p>
          <p className="text-base md:text-lg dark:text-white">
            As a dedicated and hardworking Front-end Developer, I am currently
            studying Computer Programming with a focus on front-end development.
            With almost a year of experience under my belt, I am committed to
            producing high-quality work with a keen attention to detail. I am
            passionate about learning and staying up-to-date with the latest
            industry trends and technologies. As an enthusiastic team player, I
            am excited to work collaboratively and contribute to innovative and
            impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

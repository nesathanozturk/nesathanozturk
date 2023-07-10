import Typewriter from "typewriter-effect";
import { home } from "../utils/data";

const TypeEffect = () => {
  return (
    <>
      {home.map((text) => (
        <h1
          key={text.id}
          className="font-caveat text-2xl md:text-3xl mb-4 text-purple-800 font-bold tracking-widest dark:text-[#0891B2]"
        >
          <Typewriter
            options={{
              strings: [`${text.name}`, `${text.job}`],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      ))}
    </>
  );
};

export default TypeEffect;

const Footer = () => {
  return (
    <footer className="w-full p-4 text-center">
      <p className="text-base md:text-lg py-2 dark:text-white">
        Designed By&nbsp;
        <a
          href="https://www.github.com/nesathanozturk/"
          className="font-caveat text-2xl text-purple-700 dark:text-[#0891B2]"
        >
          Neşathan Öztürk.
        </a>
      </p>
      <p className="text-lg md:text-xl dark:text-white">
        &copy; Copyright 2023. All Rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

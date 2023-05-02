const ProjectCard = ({ project }) => {
  const { title, language, fork, star, link } = project;

  return (
    <a href={link}>
      <div className="bg-[#171c28] hover:bg-[#1e2430] dark:bg-[#1e2430] dark:hover:bg-[#1a1f2b] text-white p-8 rounded-2xl cursor-pointer transition-all shadow-2xl">
        <div className="flex items-center p-4">
          <svg
            aria-hidden="true"
            className="mr-1 min-w-[16px]"
            height="20"
            role="img"
            viewBox="0 0 12 16"
            width="14"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <p className="m-0 h-7 overflow-hidden tracking-tight font-bold text-xl pl-2 mb-1 whitespace-nowrap">
            {title}
          </p>
        </div>
        <p className="pb-4 pl-4"></p>
        <div className="flex justify-between">
          <div
            className="flex flex-1 gap-4
                  "
          >
            <span className="pl-4 flex justify-center items-center gap-1">
              <div
                className="w-3 h-3 rounded-full mr-1"
                style={{ backgroundColor: "yellow" }}
              ></div>
              <p>{language}</p>
            </span>
            <span className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="flex flex-1"
                height="20"
                role="img"
                viewBox="0 0 10 16"
                width="12"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>{fork}</p>
            </span>
            <span className="flex items-center">
              <svg
                aria-hidden="true"
                className="mr-1"
                height="20"
                role="img"
                viewBox="0 0 14 16"
                width="14"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                ></path>
              </svg>
              <p className="pl-1">{star}</p>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

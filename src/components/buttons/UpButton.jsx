import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect } from "react";

const UpButton = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        document.getElementById("topBtn").classList.add("opacity-100");
      } else {
        document.getElementById("topBtn").classList.remove("opacity-100");
      }
    });
  }, []);

  return (
    <>
      <button
        id="topBtn"
        className={`bg-purple-700 dark:bg-[#0891B2] opacity-0 text-white fixed bottom-10 right-10 text-3xl rounded-full p-2 transition-all 
         `}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
};

export default UpButton;

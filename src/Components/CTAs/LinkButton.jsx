import { FaArrowRight } from "react-icons/fa6";
const LinkButton = ({ link, children, className }) => {
  return (
    <>
      <div className={`my-5 text-white font-bold bg-secondary px-2 rounded-3xl content-center hover:scale-105 cursor-pointer transition ${className} ` }>
        <a href={link || "#"} className=" justify-end w-full flex items-center">
          {!children ? (
            <>
              See All <FaArrowRight />
            </>
          ) : (
            children
          )}
        </a>
      </div>
    </>
  );
};

export default LinkButton;

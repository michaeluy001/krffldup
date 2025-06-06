import { FaArrowRight } from "react-icons/fa6";
const LinkButton = ({link}) => {
  return (
    <>
      <div className="my-5 text-white font-bold bg-secondary px-2 rounded-3xl">
        <a href={link || '#'} className=" justify-end w-full flex items-center">
          See All <FaArrowRight />
        </a>
      </div>
    </>
  );
};


export default LinkButton;
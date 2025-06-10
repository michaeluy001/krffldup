const SiteLink = ({ onClick, buttonLabel, className }) => {
  return (
    <>
      <li className={`group relative ${className}`}>
        <button onClick={onClick} className=" text-gray-800 cursor-pointer group-hover:text-yellow-800/60  font-bold transition-all duration-300">
          {buttonLabel}
        </button>

        <div className="absolute h-[2px] w-0 left-0 bottom-0 transition-all duration-300 bg-yellow-800 group-hover:left-0 group-hover:w-full" />

      </li>
    </>
  );
};

export default SiteLink;
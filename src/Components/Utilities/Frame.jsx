export const Frame = ({ imgSrc }) => {
  return (
    <>
      <div className=" relative -rotate-5 size-60 md:size-100 ">
        <div className="overflow-hidden">
        <img
          src={imgSrc}
          alt="Assorted"
          className="absolute top-0 left-0 border-2 border-white  origin-center z-1 aspect-square "
        /></div>
        <div className="absolute bg-yellow-800 size-50 -top-2 -left-2 z-0" />
        <div className="absolute bg-yellow-800 size-50 -bottom-2 -right-2 z-0" />
      </div>
    </>
  );
};

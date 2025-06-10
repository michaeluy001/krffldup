const Title = ({ children, className }) => {
  const baseStyle = " mt-20 mb-5 text-yellow-800 text-center font-bold ";

  return (
    <>
      <h1 className={`${baseStyle} ${className}`}>
        {children}
      </h1>
    </>
  );
};
export default Title;

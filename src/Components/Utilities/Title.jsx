const Title = ({ children, className }) => {
  const baseStyle = " mb-10 text-yellow-800 text-center font-bold ";

  return (
    <>
      <h1 className={`${baseStyle} ${className}`}>
        {children}
      </h1>
    </>
  );
};
export default Title;

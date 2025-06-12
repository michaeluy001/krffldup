const Button = ({ children, onClick, type="default" }) => {
  const baseStyle = `h-8 w-25 rounded-4xl text-sm hover:scale-102 transition cursor-pointer md: h-10 md:w-30 md:text-lg `;
  const variants = 
    {
        default: `bg-yellow-800 text-white`,
        primary: `bg-secondary text-white`,
        secondary: `bg-background text-yellow-800`,

    }
  
  return (
    <>
      <button className={`${baseStyle} ${variants[type]} shadow-sm shadow-black`} onClick={onClick}>
         {children || `Submit`}
      </button>

    </>
  );
};
export default Button;
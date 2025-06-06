const Button = ({ children, onClick, type="default" }) => {
  const baseStyle = `h-10 w-30 rounded-4xl text-sm hover:scale-102 transition cursor-pointer`;
  const variants = 
    {
        default: `bg-yellow-800 text-white`,
        primary: `bg-secondary text-white`,
        secondary: `bg-background text-yellow-800`,

    }
  
  return (
    <>
      <button className={`${baseStyle} ${variants[type]}`} onClick={onClick}>
         {children || `Submit`}
      </button>

    </>
  );
};
export default Button;
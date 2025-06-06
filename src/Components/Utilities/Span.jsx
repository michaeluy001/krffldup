const Span = ({ children, onClick, type="primary", className }) => {

  const variants = 
    {
        primary: `bg-surface text-yellow-800`,
        secondary: `bg-yellow-800 text-surface`,

    }
  
  return (
    <>
     <span className={`${variants[type]} ${className} px-2`} onClick={onClick}> {children} </span>

    </>
  );
};
export default Span;
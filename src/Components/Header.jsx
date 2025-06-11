import logo from "/src/assets/logo.png";
import SiteLink from "./SiteLink";
import { useRef, useEffect, useState } from "react";

const Header = ({
  onScrollToHome,
  onScrollToCollections,
  onScrollToAbout,
  onScrollToFeatures,
  onScrollToContact,
}) => {
//   const heightRef = useRef();
// const [headerHeight, setHeaderHeight] = useState();

// useEffect(() => {
//     const updateHeight = () => {
//       if (heightRef.current) {
//         setHeaderHeight(heightRef.current.clientHeight);
//       }
//     };

//     // Run once after initial render
//     updateHeight();

//     // Re-run on window resize
//     window.addEventListener('resize', updateHeight);

//     // Clean up on unmount
//     return () => {
//       window.removeEventListener('resize', updateHeight);
//     };
//   }, []);
  
  const links = [
    {
      buttonLabel: "Home",
      onClick: onScrollToHome,
    },
    {
      buttonLabel: "Collections",
      onClick: onScrollToCollections,
    },
    {
      buttonLabel: "About Us",
      onClick: onScrollToAbout,
    },
    {
      buttonLabel: "Why Choose Krffl'd Up?",
      onClick: onScrollToFeatures,
    },
    {
      buttonLabel: "Contact Us",
      onClick: onScrollToContact,
    },
  ];

  return (
    <>
      <div className="w-full h-auto  content-center bg-surface fixed z-25 shadow-xl " >
        <div className="w-dvw md:w-3/4 mx-auto mt-5 justify-center md:justify-start flex flex-col md:flex-row items-center justify-items-center">
          <Logo />
          <ul className="my-5 grid grid-cols-2 text-sm gap-1  flex-col justify-items-center md:flex md:flex-row md:gap-10 lg:text-lg  items-center ">
            {links.map((item, index) => (
              <SiteLink
                key={index}
                onClick={item.onClick}
                buttonLabel={item.buttonLabel}
              />
            ))}
          </ul>
        </div>
      </div>
      {/* <div className=" w-full " style={{ height:  `${headerHeight}px` }}/>  */}
      <div className=" w-full h-30 md:h-15 "/> 
    </>
  );
};

export default Header;

const Logo = () => {
  return (
    <>
      <div className="justify-items-end  md:mx-20 " >
        <img src={logo} className="w-20  md:w-30 md:h-10 min-w-[6rem] flex-shrink-0" />
      </div>
    </>
  );
};

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import SiteLink from "./SiteLink";

const Drawer = () => {
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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <RxHamburgerMenu onClick={handleOpen} />
      {isOpen && (
        <div className=" w-full h-full">
          <div className="absolute bg-surface top-0 w-full h-dvh left-0">
            <div className="m-5 justify-items-end text-3xl">
              <IoCloseOutline onClick={handleOpen} />
            </div>

            <div className="m-auto h-full border w-11/12 text-center">
              adasd
              <ul>
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
        </div>
      )}
    </>
  );
};

export default Drawer;

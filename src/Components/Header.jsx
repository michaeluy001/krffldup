import logo from "/src/assets/logo.png";
import SiteLink from "./SiteLink";
const Header = ({
  onScrollToHome,
  onScrollToCollections,
  onScrollToAbout,
  onScrollToFeatures,
  onScrollToContact,
}) => {
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
      <div className="w-full bg-surface fixed z-25 shadow-xl ">
        <div className="md:w-3/4 mx-auto flex flex-col md:flex-row items-center">
          <Logo />
          <ul className="my-5 flex flex-col justify-items-center md:flex-row md:gap-10 md:text-lg  items-center ">
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
    </>
  );
};

export default Header;


const Logo = () => {
  return<>
    <img src={logo} className="mx-10 w-30 h-10" />
  </>
}
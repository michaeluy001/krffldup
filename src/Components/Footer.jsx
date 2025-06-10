import SiteLink from "./SiteLink";

const Footer = ({
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
      <div className="h-50 w-full bg-yellow-800/50 py-5">
        <div className="w-50 mx-auto  gap-4 text-sm text-center">
          <div>
            <h4 className="font-bold mb-2 text-lg">Site Map</h4>
            <ul className="space-y-1 text-sm">
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
    </>
  );
};

export default Footer;

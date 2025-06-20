import Span from "./Utilities/Span";
import Title from "./Utilities/Title";
import aboutUs from "/src/assets/About Us.jpg";

const AboutUs = () => {
  return (
    <>
      <div className=" text-gray-800  mx-auto ">
        <Title className="text-lg">
          From  
           <Span type="secondary" className="text-3xl">Cravings
          </Span>
          <div>
            to <Span type="primary" className="text-3xl">Croffles
            </Span>
          </div>
        </Title>
        <div className="relative">
          <img
            src={aboutUs}
            alt="Croffle Cart "
            className="w-full  md:w-3/4 mx-auto object-contain"
          />
          <div className="md:absolute bottom-0 left-0">
          <Content /></div>
        </div>
        
       
      </div>
    </>
  );
};

export default AboutUs;

const Content = () => {
  return (
    <>
      <div className=" py-5 md:w-3/4 md:columns-2 mx-auto text-center space-y-3 space-x-5 bg-surface/90 px-5  shadow-gray-100 shadow-sm content-center ">
        <p>
          <span className="font-bold text-2xl text-yellow-800">Krffl’d Up</span> started from something simple — a craving. Were just
          looking for that perfect bite — something sweet, crispy, a little
          extra, and totally satisfying. When we couldn’t find exactly what we
          were craving, we decided to make it ourselves. That’s how Krffl’d Up
          was born — out of late-night cravings, a love for food, and the joy of
          creating something fun together.
        </p>

        <p>
          We serve croffles with a twist — playful, bold, and always made with
          love. Whether you're into sweet, savory, or something in between,
          we’re here to krffl up your day in the best way possible. From our
          cravings to yours — welcome to Krffl’d Up.
        </p>
      </div>
    </>
  );
};

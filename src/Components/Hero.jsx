import hero from "/src/assets/hero-croffle.jpg";
import { Frame } from "./Utilities/Frame";
import Button from "./CTAs/Button";
import blob from "/src/assets/blob.svg"
import Span from "./Utilities/Span";

const Hero = () => {
  return (
    <>
      <div className="h-dvh content-center">
        <div className=" w-full max-w-[1200px] m-auto items-center justify-items-center grid grid-cols-1 md:grid-cols-2   md:h-1/2   ">
          <div className=" relative  min-w-25 w-full justify-items-center items-center ">
            <Frame imgSrc={hero} />
          </div>
          <div className=" min-w-[300px] w-full items-center ">
            <HeroLabel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const HeroLabel = () => {
  return (
    <>
      <div className="relative justify-items-center space-y-5 sm:w-100 mx-auto mt-10 ">
        <p className="text-3xl  text-yellow-800 text-center font-bold md:text-4xl">
          
          Where <Span type="primary" >Croissants</Span> meet <Span type="secondary" >Waffles</Span> — And Magic Happens!
        </p>
        <p className="text-md  text-gray-700 text-center md:text-lg ">
          Crispy, buttery, and perfectly golden. Discover the sweet (and savory)
          obsession everyone’s talking about.
        </p>
        {/* <img src={blob} className="absolute -bottom-30  left-1/2 -translate-x-1/2 opacity-25 "/> */}
        <div className="flex gap-5">
          <Button type="primary">Contact Us</Button>
          <Button type="secondary">Book Us</Button>
        </div>
      </div>
    </>
  );
};

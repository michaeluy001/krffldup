import hero from "/src/assets/hero-croffle.jpg";
import { Frame } from "./Utilities/Frame";
import Button from "./CTAs/Button";
import blob from "/src/assets/blob.svg"
import Span from "./Utilities/Span";
import LinkButton from "./CTAs/LinkButton";
import { motion } from "motion/react";


const Hero = ({onCTAClick}) => {
  return (
    <>
      <div className="mt-10 md:mt-0 md:h-dvh content-center" >
        <div className=" w-full max-w-[1200px] mx-auto  justify-items-center grid grid-cols-1 lg:grid-cols-2  md:h-1/2   ">
          <motion.div className=" relative  min-w-25 w-full justify-items-center items-center "initial={{left: -1000}} animate={{left: 0 }} transition={{duration: 0.8, delay: 1, type:"spring"}}>
            <Frame imgSrc={hero} />
          </motion.div>
          <div className=" min-w-[300px] w-full items-center ">
            <HeroLabel onCTAClick={onCTAClick}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const HeroLabel = ({onCTAClick}) => {
  return (
    <>
      <div className="relative justify-items-center space-y-5 sm:w-100 mx-auto mt-10 ">
        <motion.p className="text-3xl  text-yellow-800 text-center font-bold md:text-4xl" initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 1, type:"spring"}}>
          
          Where <Span type="primary" >Croissants</Span> meet <Span type="secondary" >Waffles</Span> — And Magic Happens!
        </motion.p>
        <motion.p className="text-md  text-gray-700 text-center md:text-lg " initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}}>
          Crispy, buttery, and perfectly golden. Discover the sweet (and savory)
          obsession everyone’s talking about.
        </motion.p>
        <div className="flex gap-5">
          <Button onClick={onCTAClick} type="primary">Contact Us</Button>
    
        </div>
      </div>
    </>
  );
};

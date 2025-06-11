import almond from "/src/assets/Almond.jpg";
import choco from "/src/assets/choco loco.jpg";
import biscroffle from "/src/assets/biscroffle.jpg";
import matcha from "/src/assets/matcha.jpg";
import oreo from "/src/assets/oreo.jpg";

import LinkButton from "./CTAs/LinkButton";
import Span from "./Utilities/Span";
import Title from "./Utilities/Title";
import { motion } from "motion/react";

const FeaturedCollections = () => {
  const collections = [
    {
      imgSrc: almond,
      caption:
        "Indulge in our Nutella Almond Croffle — a golden, crispy croffle topped with fluffy whipped cream, rich Nutella drizzle, and a generous sprinkle of crunchy almond slices. Pure bliss in every bite!",
      alt: "Almond Nutella Bliss",
    },
    {
      imgSrc: choco,
      caption:
        "Dive into chocolate heaven with our chocolate croffle—a crispy, flaky waffle infused with melted chocolate. It’s topped with airy whipped cream, drizzled with warm chocolate sauce, and sprinkled with crunchy chocolate chips for the perfect blend of textures. An irresistible treat for every chocolate lover!",
      alt: "Choco Loco",
    },
    {
      imgSrc: biscroffle,
      caption:
        "Warm, crispy croffle smothered in whipped cream, topped with crunchy Biscoff crumbs and a whole Biscoff cookie — a caramelized treat that melts in your mouth.",
      alt: "Biscroffle Delight",
    },
    {
      imgSrc: oreo,
      caption:
        "Croffle perfection topped with fluffy whipped cream, Oreo cookie bits, and a whole Oreo — the ultimate treat for Oreo fanatics.",
      alt: "Nutty Dream Oreo",
    },
    {
      imgSrc: matcha,
      caption:
        "Delight in a crispy croffle layered with rich matcha, crunchy almonds, and a cloud of whipped cream on top — the perfect balance of earthy and sweet!",
      alt: "Matcha Supreme",
    },
  ];

  return (
    <>
      <div className="mb-50  w-8/12 mx-auto content-center justify-items-center items-center ">
        <Title>
          Our{" "}
          <Span type="primary" className="text-3xl">
            Best
          </Span>{" "}
          <br />{" "}
          <Span type="secondary" className="text-3xl">
            Sellers
          </Span>{" "}
        </Title>
        <div className=" h-3/4 flex flex-col lg:flex-row items-center gap-3">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              className="justify-items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: index / 3 }}
            >
              <CollectionsCard index={index} card={item} />
            </motion.div>
          ))}
        </div>
        {/* <LinkButton />  hidden for now.*/}
      </div>
    </>
  );
};

export default FeaturedCollections;

const CollectionsCard = ({ card, index }) => {
  return (
    <>
      <div
        className={`h-170  md:w-1/3 min-w-[300px] overflow-x-hidden flex flex-col ${
          index % 2 === 1 ? "lg:flex-col-reverse" : "flex-col"
        }  bg-surface shadow-2xl border border-gray-50`}
      >
        <div className=" ">
          <img
            src={card.imgSrc}
            alt={card.alt}
            className="aspect-1/1 size-full object-cover"
          />
        </div>
        <div className="h-1/2  text-center content-center p-5  ">
          <p className="text-lg font-bold">{card.alt} </p>
          <p className="break-words whitespace-normal">{card.caption}</p>
        </div>
      </div>
    </>
  );
};

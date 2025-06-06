
import photo1 from "/src/assets/Collections1.jpg";
import photo2 from "/src/assets/Collections2.jpg";
import photo3 from "/src/assets/Collections3.jpg";
import LinkButton from "./CTAs/LinkButton";
import Span from "./Utilities/Span";
import Title from "./Utilities/Title";


const FeaturedCollections = () => {
  const collections = [
    {
      imgSrc: photo1,
      caption:
        "Croffle: Where crispy waffle meets soft croissant, a delicious hybrid treat! Flaky layers and golden goodness combine in every bite. Perfect for breakfast, snack, or dessert!",
      alt: "Croffle 1",
    },
    {
      imgSrc: photo2,
      caption:
        "Classic Croffle Golden brown and crispy, this classic croffle is freshly baked to perfection. Flaky layers unfold with each bite, revealing a soft and airy interior. Perfect with a drizzle of honey or maple syrup.",
      alt: "Croffle 2",
    },
    {
      imgSrc: photo3,
      caption:
        "Sticky caramel drizzle and crunchy pecans elevate this croffle to new heights. Flaky, buttery pastry gives way to a sweet and gooey center. A delightful combination of textures and flavors that's sure to impress.",
      alt: "Croffle 3",
    },
  ];

  return (
    <>
      <div className="my-25   w-8/12 mx-auto content-center justify-items-center items-center ">
        <Title>Our <Span type="primary" className="text-3xl">Best</Span> <br/> <Span type="secondary" className="text-3xl">Sellers</Span> </Title>
        <div className=" h-3/4 flex flex-col lg:flex-row items-center gap-25">
          {collections.map((item, index) => (
            <CollectionsCard key={index} index={index} card={item} />
          ))}
        </div>
        <LinkButton />
      </div>
    </>
  );
};

export default FeaturedCollections;

const CollectionsCard = ({ card, index }) => {
  return (
    <>
      <div className={`h-150 md:w-1/3 min-w-[300px] overflow-xhidden flex flex-col ${index % 2 === 1 ? 'lg:flex-col-reverse' : 'flex-col' } text-gray-500 bg-surface shadow-gray-100 shadow-sm`}>
        <div className=" h-1/2 ">
          <img
            src={card.imgSrc}
            alt={card.alt}
            className="aspect-1/1 size-full object-cover"
          />
        </div>
        <p className=" h-1/2 text-center content-center p-5 overflow-hidden ">
          {card.caption}
        </p>
      </div>
    </>
  );
};

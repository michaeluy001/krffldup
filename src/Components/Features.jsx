import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Title from "./Utilities/Title";
import Span from "./Utilities/Span";
import features1 from "/src/assets/features1.jpg";
import features2 from "/src/assets/features2.jpg";

const Features = () => {
  const features = [
    {
      src: features1,
      alt: "alt text",
      desc: "",
    },
    {
      src: features2,
      alt: "alt text",
      desc: "",
    },
  ];
  return (
    <>
      <div className="w-full mx-auto  lg:w-3/4 justify-items-center content-center">
        <Title className="text-3xl">
          Choose Krffl'd Up for your <Span>special</Span>{" "}
          <Span type="secondary">day.</Span>{" "}
        </Title>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {" "}
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturesCard image={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Features;

const FeaturesCard = ({ image }) => {
  return (
    <>
      <div>
        <img src={image.src} alt={image.alt} className="w-[500px] h-150 aspect-auto object-fit" />
      </div>
      {/* <div>
          <p>{image.desc}</p>
        </div> */}
    </>
  );
};

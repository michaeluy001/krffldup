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
      <div className=" w-11/12 mx-auto justify-items-center content-center mb-25">
        <Title className="text-lg">
          Choose Krffl'd Up for your <Span className="text-3xl">special</Span>
          <Span type="secondary" className="text-3xl">day.</Span>
        </Title>
        <div className="w-[300px] sm:w-[400px] mx-auto content-center">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            centeredSlides="true"
            slidesPerView="auto"
          >
            {features.map((item, index) => (
              <SwiperSlide key={index}>
                <FeaturesCard image={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Features;

const FeaturesCard = ({ image }) => {
  return (
    <>
      <div>
        <img
          src={image.src}
          alt={image.alt}
          className=" h-150  aspect-auto object-contain"
        />
      </div>

    </>
  );
};

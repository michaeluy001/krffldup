import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import FeaturedCollections from "./Components/FeaturedCollections";
import Features from "./Components/Features";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const collectionsRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onScrollToHome={() => scrollTo(homeRef)}
        onScrollToCollections={() => scrollTo(collectionsRef)}
        onScrollToAbout={() => scrollTo(aboutRef)}
        onScrollToFeatures={() => scrollTo(featuresRef)}
        onScrollToContact={() => scrollTo(contactRef)}
      />
      <div className="w-full overflow-hidden text-gray-800">
        <div ref={homeRef}>
          <Hero onCTAClick={() => scrollTo(contactRef)} />
        </div>
        <div ref={collectionsRef}>
          <FeaturedCollections />
        </div>
        <div ref={aboutRef}>
          <AboutUs />
        </div>
        <div ref={featuresRef}>
          <Features />
        </div>
        <div ref={contactRef}>
          <ContactUs />
        </div>
        <Footer
          onScrollToHome={() => scrollTo(homeRef)}
          onScrollToCollections={() => scrollTo(collectionsRef)}
          onScrollToAbout={() => scrollTo(aboutRef)}
          onScrollToFeatures={() => scrollTo(featuresRef)}
          onScrollToContact={() => scrollTo(contactRef)}
        />
      </div>
    </>
  );
}

export default App;

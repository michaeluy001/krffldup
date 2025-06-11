import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Title from "./Utilities/Title";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useRef } from "react";
import { forwardRef } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import Span from "./Utilities/Span";
import QR from "/src/assets/krffldup_qr.jpg";
import { FaCheck } from "react-icons/fa6";

const ContactUs = forwardRef((props, ref) => {
  const contactRef = useRef(null);
  return (
    <>
      <div className="flex flex-col my-25  mx-auto w-11/12 gap-10" ref={ref}>
        <Title className="text-lg">
          For 
          <Span type="secondary" className="text-3xl">
          Orders,
          </Span>
          <Span className="text-3xl">Bookings,</Span> and other inquiries...
        </Title>
        <Location />
        <div className="bg-surface h-[1px] w-1/2 mx-auto"></div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col items-center lg:flex-row justify-items-center justify-center">
            <EmailForm /> <Services />
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center gap-20">
            <SocialLinks />
            <img
              src={QR}
              alt="QR Code FB page"
              className="w-50 h-60 rounded-2xl border border-surface"
            />
          </div>
        </div>
      </div>
    </>
  );
});
export default ContactUs;

const EmailForm = () => {
  return (
    <>
      <div className="w-full md:w-1/4 mx-10 mb-25">
        <div className="w-full  flex flex-col">
          <p className="text-2xl my-5">Send Us an Email</p>
          <Box
            action="https://formspree.io/f/xqabppyl"
            method="POST"
            component="form"
            encType="application/x-www-form-urlencoded"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "100%",
              },
              "& .MuiInputLabel-root": {
                color: "#f36868", // default label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#f36868", // label color on focus
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#f36868", // border color on focus
              },
              "& .MuiOutlinedInput-root:hover fieldset": {
                borderColor: "#f36868", // border color on hover
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="flex flex-col my-5">
              <TextField label="Email" name="email" type="email" required />
              <TextField
                id="message"
                label="Message"
                name="message"
                required
                type="email"
                multiline
                rows={4}
              />
            </div>

            <input
              type="submit"
              className=" bg-secondary px-3 rounded-3xl text-white hover:scale-105 transition cursor-pointer "
              value="Send"
            />
          </Box>
        </div>
      </div>
    </>
  );
};

const SocialLinks = () => {
  const socLinks = [
    "https://www.facebook.com/profile.php?id=61573593311757",
    "https://www.instagram.com/krffldup/",
    "https://www.tiktok.com/@krffldup?lang=en",
  ];

  return (
    <>
      <div className="flex flex-col w-full md:w-100 content-center">
        <p className="text-center text-2xl">Follow Us!</p>
        <div className="h-[1px] w-150 mx-auto my-5 bg-surface"></div>
        <ul className="w-auto h-15  flex items-center justify-center text-3xl gap-10 ">
          <li>
            <a href={socLinks[0]} aria-label="">
              <FaFacebook className="text-blue-800 hover:scale-105 transition" />
            </a>
          </li>
          <li>
            <a href={socLinks[1]}>
              <FaInstagram className="text-orange-700 hover:scale-105 transition" />
            </a>
          </li>
          <li>
            <a href={socLinks[2]}>
              <FaTiktok className="text-black hover:scale-105 transition" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Services = () => {
  const services = [
    "Weddings",
    "Anniversary",
    "Birthdays",
    "Family Gatherings",
    "Company Events",
    "Christening",
    "Reunions",
    
  ];

  return (
    <>
      <div className="  space-y-2  size-auto justify-items-center text-2xl">
    
          <div className="size-90 border-1 border-surface content-center [clip-path:polygon(10%_0%,100%_0%,100%_90%,90%_100%,0%_100%,0%_10%)]  text-center justify-items-center origin-center ">
            <p className=" my-2">Book our Cart for your:</p>
            <ul className="flex flex-col text-lg">
              {services.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  {" "}
                  <FaCheck className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>{" "}
          </div>
        </div>

    </>
  );
};

const Location = () => {
  return (
    <>
      <div className="text-center">
        <p className=" ">Visit us at </p>
        <p className=" text-xl">
          Block 4 Lot 14 Primavida Residences, Imus, Cavite.
        </p>
        <p className="">Contact Us!</p>
        <p className=" text-xl">0906.532.7987 / 0961.060.1125</p>
      </div>
    </>
  );
};

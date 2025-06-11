import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Title from "./Utilities/Title";
import Button from "./CTAs/Button";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useRef } from "react";
import { forwardRef } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import Span from "./Utilities/Span";
import QR from "/src/assets/krffldup_qr.jpg";

const ContactUs = forwardRef((props, ref) => {
  const contactRef = useRef(null);
  return (
    <>
      <div className="flex flex-col my-25  mx-auto w-11/12 gap-10" ref={ref}>
        <Title className="text-lg">
          For{" "}
          <Span type="secondary" className="text-3xl">
            Orders,
          </Span>{" "}
          <Span className="text-3xl">Bookings, </Span> and other inquiries...
        </Title>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col items-center lg:flex-row ">
            <EmailForm /> <Location />
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center gap-20">
            <SocialLinks />{" "}
            <img
              src={QR}
              alt="QR Code FB page"
              className="w-50 h-60 rounded-2xl"
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
      <div className="w-full md:w-1/4 mx-auto mb-25">
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
              className=" bg-secondary px-3 rounded-3xl text-white hover:scale-105 transition cursor-pointer " value="Send"
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
      <div className="flex flex-col w-full md:w-1/2">
        <p className="text-center text-2xl">Follow Us!</p>
        <div className="h-[1px] w-1/2 mx-auto my-5 bg-gray-500"></div>
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
              <FaTiktok className="text-black hover:scale-105 transition"/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Location = () => {
  return (
    <>
      <div className="relative  space-y-2 m-25 w-100 justify-items-center text-2xl">
        <p>Visit as at </p>
        <p className="flex gap-2">Blk 4 Lot 14 Primavida</p>
        <p className="flex items-center gap-3">
          <BsTelephone className="rotate-30" />
          0906-532-7987 <br /> 0961-060-1125
        </p>
        <div className="size-70 border-2 border-secondary absolute top-1/2 left-1/2 -translate-1/2 rotate-20 origin-center  ">
          {" "}
          <FaMapPin className="rotate-20 text-5xl text-secondary" />{" "}
        </div>
        <div className="size-72 border-1 border-background absolute top-1/2 left-1/2 -translate-1/2 rotate-20 origin-center " />
      </div>
    </>
  );
};

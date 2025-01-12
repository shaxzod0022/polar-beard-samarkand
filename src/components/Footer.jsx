import React from "react";
import { style } from "../utils/styles";
import {
  chat,
  instagramQR,
  logoNone,
  phone_call,
  phone_call1,
} from "../assets";
import footerData from "../locales/footer.json";
import { useSelector } from "react-redux";

const Footer = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className={`${style.flexCol} items-center font-semibold sm:p-10 p-4`}>
      <img
        className="md:w-[700px] sm:w-[400px] w-[70%]"
        src={logoNone}
        alt="logo restaurant bely medved"
      />
      <img
        className="md:w-[500px] sm:w-[200px] w-[70%]"
        src={instagramQR}
        alt="instagramQR"
      />
      <div
        className={`flex sm:gap-7 gap-3 items-center sm:mt-[20px] mt-[10px]`}
      >
        <img className="sm:w-[70px] w-[45px]" src={phone_call1} alt="chat" />
        <span className="md:text-[40px] sm:text-[30px] text-[10px]">
          {footerData.value[language]}
        </span>
        <img className="sm:w-[70px] w-[45px]" src={chat} alt="chat" />
      </div>
      <div className="flex items-center gap-2 sm:text-[50px] text-[20px] sm:mt-[40px] mt-[20px] sm:mb-[80px] mb-[50px]">
        <span>91.521-10-10</span>
        <img
          className="sm:w-[60px] w-[35px]"
          src={phone_call}
          alt="phone_call"
        />
        <span>95.441-91-11</span>
      </div>
      <p className="w-full text-center md:text-[50px] sm:text-[40px] text-[20px]">
        {footerData.value2[language]}
      </p>
    </div>
  );
};

export default Footer;

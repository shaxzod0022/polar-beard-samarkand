import React from "react";
import xolodnyNapitkiData from "../locales/xolodny_napitki.json";
import { style } from "../utils/styles";
import { xolNap1, xolNap2 } from "../assets";
import { useSelector } from "react-redux";

const XolodnyNapitki = () => {
  const language = useSelector((state) => state.language);
  return (
    <div className={`${style.flexCol} items-center sm:py-20 py-16 px-4 w-full`}>
      <h2 className="sm:text-[50px] text-[35px] text-blue-950 uppercase font-bold mb-4 text-center">
        {xolodnyNapitkiData.title[language]}
      </h2>
      <div className={`${style.flexCol} gap-8 md:w-[80%] w-full`}>
        {xolodnyNapitkiData.dishes.map((item, idx) => (
          <div key={idx} className={`${style.flexBetween} font-titleFont`}>
            <div className="w-[70%]">
              <p className="font-semibold md:leading-10 sm:leading-7 leading-5  visible md:text-[40px] sm:text-[30px] text-[22px]">
                {item.name[language]}
              </p>
              <span className="md:text-[30px] md:leading-10 sm:leading-7 leading-5  sm:text-[23px] text-[17px] text-gray-600">
                {item.description?.[language]}
              </span>
            </div>
            <div className="text-right ">
              <span className="block font-bold md:text-[40px] md:leading-10 sm:leading-7 leading-5   sm:text-[30px] text-[22px]">
                {item.price}
              </span>
              <span className="md:text-[30px] sm:text-[23px] md:leading-10 sm:leading-7 leading-5  text-[17px] text-gray-500">
                {item.price === null ? "" : item.valuta[language]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={`${style.flexArround} w-full my-6`}>
        <img
          className="sm:w-[45%] w-[60%] sm:m-0 mb-4"
          src={xolNap1}
          alt="item"
        />
        <img className="sm:w-[45%] w-[60%]" src={xolNap2} alt="item" />
      </div>
    </div>
  );
};

export default XolodnyNapitki;

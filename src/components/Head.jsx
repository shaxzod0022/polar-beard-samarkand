import React from "react";
import { style } from "../utils/styles";
import { logoNone } from "../assets";
import { useSelector } from "react-redux";

const Head = () => {
  const language = useSelector((state) => state.language);
  return (
    <div
      className={`${style.flexCol} items-center text-blue-950 font-semibold sm:p-10 p-4`}
    >
      <img
        className="md:w-[700px] sm:w-[400px] w-[70%]"
        src={logoNone}
        alt="logo restaurant bely medved"
      />
      <h1 className="md:text-[130px] sm:text-[90px] text-[50px] font-greatVibes">
        {language === "ru" ? "Дорогие гости!" : " Dear guests!"}
      </h1>
      <p className="text-center md:text-[50px] sm:text-[40px] text-[30px] font-greatVibes">
        {(language === "ru"
          ? [
              "Мы рады приветствовать Вас",
              "В ресторане «Белый медведь».",
              "Наш ресторан — это гарантия приятного",
              "времяпрепровождения, высокий уровень",
              "обслуживания и индивидуального",
              "внимания к каждому гостю.",
              "Наш ресторан предлагает Вам",
              "изысканные блюда национальной и",
              "европейской кухни в оригинальной подаче.",
            ]
          : [
              "We are glad to welcome you",
              "At the restaurant 'White Bear'.",
              "Our restaurant is a guarantee of a pleasant",
              "pastime, a high level of service and individual",
              "attention to each guest.",
              "Our restaurant offers you",
              "exquisite dishes of national and",
              "European cuisine in an original presentation.",
            ]
        ).map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </p>
      <p className="text-center md:text-[50px] sm:text-[40px] text-[30px] font-greatVibes my-[40px]">
        {language === "ru"
          ? "Желаем Вам приятного отдыха!"
          : "We wish you a pleasant stay!"}
      </p>
      <p className="w-full text-end md:text-[50px] sm:text-[40px] text-[20px] font-greatVibes">
        {language === "ru"
          ? "С уважением, Администрация"
          : "Sincerely, Administration"}
      </p>
    </div>
  );
};

export default Head;

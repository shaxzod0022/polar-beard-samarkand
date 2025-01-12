import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../store/store";

const Language = () => {
  const [language, setLanguageState] = useState(
    localStorage.getItem("language") || "ru"
  );

  const dispatch = useDispatch();

  const updateLanguage = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    setLanguageState(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <button
      className="fixed md:top-[30px] top-[20px] right-[20px] md:right-[60px] bg-blue-500/50 hover:bg-blue-500/70 transition-all text-white font-semibold text-[20px] uppercase rounded-lg px-[18px] py-[4px]"
      onClick={updateLanguage}
    >
      {language}
    </button>
  );
};

export default Language;

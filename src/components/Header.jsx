import React from "react";
import { Head } from "../assets";
import { style } from "../utils/styles";

const Header = () => {
  return (
    <div className={`${style.flexCol} items-center`}>
      <img
        className="w-full h-[100vh] object-cover"
        src={Head}
        alt="bely medved restaurant img"
      />
    </div>
  );
};

export default Header;

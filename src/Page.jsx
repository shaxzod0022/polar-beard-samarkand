import React, { useEffect } from "react";
import {
  Appetizers,
  ColdAppetizers,
  DisertHlep,
  FirstCourses,
  Footer,
  Garnir,
  GoryachyNapitki,
  Head,
  Header,
  JizBiz,
  Language,
  Meat,
  Salads,
  Shashlik,
  SousPasta,
  XolodnyNapitki,
} from "./components";
import { style } from "./utils/styles";

function Page() {
  return (
    <div className={`max-w-[1000px] mx-auto ${style.flexCol} items-center`}>
      <Language />
      <Header />
      <Head />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <Salads />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <Appetizers />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <ColdAppetizers />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <Shashlik />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <FirstCourses />
      <Garnir />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <Meat />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <JizBiz />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <SousPasta />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <DisertHlep />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <GoryachyNapitki />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <XolodnyNapitki />
      <hr className="h-[2px] w-[92%] bg-blue-950" />
      <Footer />
    </div>
  );
}

export default Page;

import React from "react";
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

function Page() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Language />
      <Header />
      <Head />
      <hr className="h-[2px] w-full bg-black" />
      <Salads />
      <hr className="h-[2px] w-full bg-black" />
      <Appetizers />
      <hr className="h-[2px] w-full bg-black" />
      <ColdAppetizers />
      <hr className="h-[2px] w-full bg-black" />
      <Shashlik />
      <hr className="h-[2px] w-full bg-black" />
      <FirstCourses />
      <hr className="h-[2px] w-full bg-black" />
      <Garnir />
      <hr className="h-[2px] w-full bg-black" />
      <Meat />
      <hr className="h-[2px] w-full bg-black" />
      <JizBiz />
      <hr className="h-[2px] w-full bg-black" />
      <SousPasta />
      <hr className="h-[2px] w-full bg-black" />
      <DisertHlep />
      <hr className="h-[2px] w-full bg-black" />
      <GoryachyNapitki />
      <hr className="h-[2px] w-full bg-black" />
      <XolodnyNapitki />
      <hr className="h-[2px] w-full bg-black" />
      <Footer />
    </div>
  );
}

export default Page;

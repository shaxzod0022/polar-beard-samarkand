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
      <Salads />
      <Appetizers />
      <ColdAppetizers />
      <Shashlik />
      <FirstCourses />
      <Garnir />
      <Meat />
      <JizBiz />
      <SousPasta />
      <DisertHlep />
      <GoryachyNapitki />
      <XolodnyNapitki />
      <Footer />
    </div>
  );
}

export default Page;

import React from "react";
import ScrollImages from "../components/ScrollImages";
import ProcessBar from "./../components/ProcessBar";
import Section1 from "../components/section1/Section1";
import Section2 from "./../components/section2/Section2";

const Mobile = () => {
  return (
    <div>
      <div className="w-full  relative     overflow-hidden">
        <div className="w-full bg-gradient-to-b from-pink-200 to-[#111111] py-6 space-y-6  ">
          <div className="relative">
    <ScrollImages />
          </div>
          <Section1 />
      
        
        </div>
        
        <div className="relative">
          <ProcessBar />
        </div>
        <Section2 />
      </div>
    </div>
  );
};
export default Mobile;

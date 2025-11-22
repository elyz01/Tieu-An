import React, { } from "react";
import DateCount from './DateCount';

const ScrollImages = () => {
  const calculateDays = () => {
    const startDate = new Date("2021-11-23");
    const today = new Date();
    const diffTime = today - startDate; // hiệu số ms
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };


  return (
    <div className="w-full flex flex-col items-center ">
      

     <div className="bg-white pb-14 relative">
     <div className="absolute -top-14 -left-4 z-10 flex flex-col items-center">
  <img className="lg:w-60 w-45 -rotate-10 h-auto" src="./image3.png" alt="" />
</div>
<div className="absolute lg:top-10 top-2 lg:left-5 left-2 sm:text-6xl text-5xl z-11 ">
<p className="text-pink-500 font-bold -rotate-5 classconfig">{calculateDays()} Days</p>

  </div>
    
    
        <img
          key=""
          src="./An/image1.jpg"
          alt=""
          className="aspect-square w-full p-4 sm:w-120 object-cover "
        />
        
      

    <div className=" flex flex-col items-end">
      <p className="classconfig text-6xl absolute bottom-8 font-bold right-5 -rotate-10 text-right text-pink-500">
        Shumoru Chan
      </p>
      <p className="classconfig text-2xl absolute bottom-5  right-10 -rotate-10 text-right text-pink-500">
        1/12/2005
      </p>
    </div>

     </div>
    </div>
  );
};

export default ScrollImages;

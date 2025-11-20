import React, { } from "react";

const ScrollImages = ({ images}) => {


  return (
    <div className="w-full relative px-8 flex flex-col items-center ">
     <div className="bg-white pb-14 relative">
     {images.map((img, index) => {
      
      return (
        <img
          key={index}
          src={img}
          alt=""
          className="aspect-square w-full p-4 sm:w-120 object-cover "
        />
        
      );
    })}
    <div className=" flex flex-col items-end">
      <p className="classconfig text-6xl absolute bottom-8 font-bold right-5 -rotate-10 text-right text-pink-500">
        Toc xanh da tinh
      </p>
      <p className="classconfig text-2xl absolute bottom-5  right-10 -rotate-10 text-right text-pink-500">
        2025/11/21
      </p>
    </div>

     </div>
    </div>
  );
};

export default ScrollImages;

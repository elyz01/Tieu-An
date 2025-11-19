import React, { } from "react";

const ScrollImages = ({ images}) => {


  return (
    <div className="w-full flex flex-col items-center relative">
      {images.map((img, index) => {
      
        return (
          <img
            key={index}
            src={img}
            alt=""
            className="aspect-square w-[30%] object-cover "
          />
        );
      })}
    </div>
  );
};

export default ScrollImages;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const items = [
    { name: "Ân", path: "/Shu",  logo: "./An/image4.jpg" },
    { name: "Tiêu", path: "/Meomeo", logo: "./Tieu/image1.jpg" },
    { name: "Minh", path: "/Elyz", logo: "./Minh/image2.jpg" },
  ];

  return (
    <div className="h-20 bg-pink-400 font-mono flex items-center">
      <div className="flex justify-between items-center w-full px-20 lg:px-120">

        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className="flex cursor-pointer items-center justify-center">
              <img className=" w-10 object-cover h-10" src={item.logo} alt="" />
            </div>
          
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Header;

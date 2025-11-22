import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const items = [
    { name: "Minh", path: "/Elyz" },
    { name: "Tiêu", path: "/Meomeo" },
    { name: "Ân", path: "/Shu" },
  ];

  return (
    <div className="h-20 bg-pink-400 font-mono flex items-center">
      <div className="flex justify-between items-center w-full px-10 lg:px-120">

        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className="flex cursor-pointer items-center justify-center w-10 h-10">
              <div className="border-red-500 border w-10 h-10"></div>
            </div>
            <p className="text-white cursor-pointer">{item.name}</p>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Header;

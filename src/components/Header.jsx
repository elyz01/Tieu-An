import React from "react";

const Header = () => {
  return (
    <div className="h-20 bg-pink-400 font-mono flex items-center">
      <div className="flex justify-between items-center w-full px-10 lg:px-120">
        
        {["Minh", "Tiêu", "Ân"].map((name, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center space-y-2">
            {/* Wrapper giữ khối vuông luôn nằm giữa */}
            <div className="flex cursor-pointer items-center justify-center w-10 h-10">
              <div className="border-red-500 border w-10 h-10 "></div>
            </div>
            <p className="text-white cursor-pointer">{name}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Header;

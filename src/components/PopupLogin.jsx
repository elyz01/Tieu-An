import React from "react";
import { Link } from "react-router-dom";

const PopupLogin = () => {
  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 bg-black/20 ">
      <div className="bg-white/90 rounded-t-xl p-6 w-full shadow-xl animate-slideUp">
        <h2 className="text-xl font-semibold text-center">Login Required</h2>

        <p className="text-center text-gray-600 mb-6">
          You need to log in to continue.
        </p>

        <div className="flex flex-col justify-between gap-4">
          <button className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-lg">
            Continue with guest
          </button>

          <Link to={"/login"}>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;

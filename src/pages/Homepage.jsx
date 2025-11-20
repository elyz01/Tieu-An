import React from 'react'
import ScrollImages from '../components/ScrollImages'
import { useState, useEffect } from 'react';
import PopupLogin from '../components/PopupLogin';

const Homepage = () => {
  const images = ["/image1.jpg"];
  const [showPopup, setShowPopup]= useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 300);
  }, []);

  return (
<div>
<div className="w-full h-screen relative  bg-gradient-to-b from-pink-200 to-[#111111]   overflow-hidden">
  <div className="w-full h-screen flex justify-center items-center relative">
    <ScrollImages images={images}  />
  </div>


    </div>
      {/* {showPopup && <PopupLogin />}   */}
</div>
  )
}
export default Homepage

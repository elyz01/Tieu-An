import React from 'react'
import ScrollImages from '../components/ScrollImages'

const Homepage = () => {
  const images = ["/image1.jpg"];

  return (
<div className="w-full min-h-screen relative  bg-[#111111]  overflow-hidden">
  <div className="w-full h-screen flex justify-center items-center relative">
    <ScrollImages images={images}  />
  </div>

      <div className='absolute bottom-5 left-5 bg-black/75 rounded-lg w-40'>
        <img 
          className='w-15 rounded-sm p-2 aspect-square object-cover' 
          src="https://i.kfs.io/album/global/259701722,0v1/fit/500x500.jpg" 
          alt="" 
        />
      </div>

    </div>
  )
}

export default Homepage

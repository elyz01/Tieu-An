import React from 'react'
import ScrollImages from '../components/ScrollImages'
import ProcessBar from './../components/ProcessBar';
import Section1 from '../components/Section1';

const Mobile = () => {

  return (
<div>
<div className="w-full h-1000 relative  bg-gradient-to-b from-pink-200 to-[#111111] px-8   overflow-hidden">
  <div className="w-full py-8 flex justify-center items-center relative">
    <ScrollImages  />
  </div>
  <div className='relative'>
  <ProcessBar />
  <Section1 />
  

  </div>

    </div>
</div>
  )
}
export default Mobile

import React, { useState, useEffect } from 'react'

const ProcessBar = () => {
    const [progress, setProgress]=useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY; 
          const docHeight = document.documentElement.scrollHeight - window.innerHeight; 
          const scrolled = (scrollTop / docHeight) * 100;
          setProgress(scrolled);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      return (
        <div className="fixed z-999 bottom-0 left-0 w-full h-18 bg-black">
          <div
            className="h-1 bg-white transition-all duration-150"
            style={{ width: `${progress}%` }}
          ></div>
       
         <div className="flex items-center h-full py-2 justify-between px-4 w-full mx-auto">
            <p className='text-4xl text-white classconfig '>Preserve all of our memories.</p>
          <p className='text-white classconfig text-3xl'>{Math.round(progress)}%</p>
        
          </div>

      
        </div>
      );
      
    };

export default ProcessBar

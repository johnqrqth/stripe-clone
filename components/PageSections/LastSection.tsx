import React from 'react'
import { MeshGradient } from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core";

const gradientOptions: MeshGradientOptions = {
  colors: ["#a960ee", "#ff333d", "#90e0ff", "#ffcb57"],
  animationSpeed: 1.6,
  frequency: 0.00022,
};

const LastSection = () => {
  return (
    <div className='bg-white py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center'>
      <div className='relative overflow-hidden rounded-3xl shadow-2xl h-full w-full max-w-4xl'>
        <div className='absolute inset-0'>
          <MeshGradient options={gradientOptions}
           style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className='relative z-10 max-w-7xl mx-auto text-center py-16 px-4'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8'>Ready to Stop Revenue Leaks?</h2>
          <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <button className='bg-[#635bff] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:bg-[#5c54e6]'>
              Start Free Trial
            </button>
            <button className='bg-white text-[#635bff] font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:bg-gray-100'>
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastSection
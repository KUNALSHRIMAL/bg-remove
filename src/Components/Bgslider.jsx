import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Bgslider = () => {
    const [sliderPosition,setsliderPosition]=useState(50)
    const handelsliderchange=(e)=>{
        setsliderPosition(e.target.value)
    }
  return (
    <div className='pb-10 md:py-20 mx-2'>
        {/* Ttile */}
        <h2 className="mb-12 sm:mb-20 text-center text-3xl md:text-4xl font-semibold text-gray-900">
          Remove Background With High
          <br />
          <span className="text-gray-600 font-normal">
             Quality and Accuracy
          </span>
        </h2>
        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
            {/* Background image */}
            <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2-sliderPosition}% 0 0)`}} />
            {/* Forground image */}
            <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} />

            {/* Slider */}
            <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handelsliderchange} />
        </div>

    </div>
  )
}

export default Bgslider
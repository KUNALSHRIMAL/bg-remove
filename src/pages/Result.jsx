import React from 'react'
import ResultPreview from '../Components/ResultPreview'
import { assets } from '../assets/assets'
const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
        <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-sm border p-6">
        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Original */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">
              Original
            </p>
            <div className="rounded-lg overflow-hidden border ">
              <img
                src={assets.image_w_bg}
                alt="Original"
                className="w-full h-[280px] object-cover"
              />
            </div>
          </div>

          {/* Background Removed */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">
              Background Removed
            </p>
            <div className="flex justify-center items-center w-full h-[280px] rounded-lg overflow-hidden border bg-[linear-gradient(45deg,#eee_25%,transparent_25%),linear-gradient(-45deg,#eee_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#eee_75%),linear-gradient(-45deg,transparent_75%,#eee_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] bglayer">
              <img
                src={assets.image_wo_bg}
                alt="Original"
                className="w-full h-[280px] object-cover"
              />
              {/* <div className=' border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div> */}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="
              px-6 py-2.5 rounded-full
              text-sm font-medium
              text-purple-600
              border border-purple-400
              hover:bg-purple-50
              hover:scale-105
              transition-all duration-700
            "
          >
            Try another image
          </button>

          <a href=''
            className="
              px-6 py-2.5 rounded-full
              text-sm font-medium text-white
              bg-gradient-to-r from-violet-500 to-purple-500
              hover:shadow-lg hover:scale-105
              transition-all duration-700
            "
          >
            Download image
          </a>
        </div>
      </div>
    </div>
  )
}

export default Result
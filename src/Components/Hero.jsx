import React from "react";
import { assets } from "../assets/assets";
export default function Hero() {
  return (
    <section className="w-full bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Remove the <span className="text-violet-600">background</span> from
            <br /> images for free.
          </h1>
          <p className="mt-6 text-gray-600 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever.
          </p>
          <div className="mt-8 inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-white font-medium hover:bg-violet-700 transition">
            <input type="file" name=""  id="upload1" hidden/>
            <label htmlFor="upload1" className="inline-flex gap-2 hover:scale-105 transition-all duration-700" >
              <img src={assets.upload_btn_icon} alt="" className="w-4"/>
              <p>Upload your image</p>
            </label>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={assets.header_img}
              alt="Background removal preview"
              className="w-full max-w-md"
            />
          </div>

          {/* Floating UI Pills */}
          <div className="absolute -left-6 top-10 bg-white shadow-md rounded-full px-4 py-2 text-sm font-medium">
            Remove background
          </div>
          <div className="absolute -right-4 bottom-12 bg-white shadow-md rounded-full px-4 py-2 text-sm font-medium">
            Share
          </div>
        </div>
      </div>
    </section>
  );
}

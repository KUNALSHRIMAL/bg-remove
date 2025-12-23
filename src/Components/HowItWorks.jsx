import React from "react";
import { assets } from "../assets/assets";

const steps = [
  {
    title: "Upload image",
    description: "This is a demo text, will replace it later.",
    icon: assets.upload_icon
  },
  {
    title: "Remove background",
    description: "This is a demo text, will replace it later.",
    icon: assets.remove_bg_icon,
  },
  {
    title: "Download image",
    description: "This is a demo text, will replace it later.",
    icon: assets.download_icon,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900">
          Steps to remove background
          <br />
          <span className="text-gray-600 font-normal">
            image in seconds
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md hover:scale-105 transition-all duration-700"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-violet-600">
                <img src={step.icon} alt=""/>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

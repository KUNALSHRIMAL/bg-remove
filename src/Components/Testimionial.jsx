import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <section className="bg-[#f7fbff] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-700 mb-14">
          Customer Testimonials
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
            >
              {/* Quote */}
              <span className="text-4xl text-purple-400 font-serif">“</span>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mt-3 mb-6">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.author}
                  </h4>
                  <p className="text-sm text-purple-600">
                    {item.jobTitle.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className="w-full bg-[#f8fbfd] py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* OUR PLANS pill */}
        <div className="flex justify-center mb-6">
          <span className="px-8 py-2 text-xs font-medium text-gray-500 border border-gray-300 rounded-full">
            OUR PLANS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[28px] font-semibold text-gray-600 mb-16">
          Choose the plan that’s right for you
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                w-[280px]
                rounded-2xl
                border-transparent
                px-8 py-10
                text-left
                text-gray-700
                flex flex-col
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Icon */}
              <img
                src={assets.logo_icon}
                alt=""
                className="
                  w-8 mb-6
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

              {/* Plan name */}
              <p className="text-base font-semibold mb-1">
                {item.id}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-6">
                {item.desc}
              </p>

              {/* Price */}
              <p className="mb-8">
                <span className="text-3xl font-semibold text-gray-800">
                  ${item.price}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  / {item.credits} credits
                </span>
              </p>

              {/* Button */}
              <button
                className="
                  mt-auto
                  w-full
                  py-3
                  rounded-lg
                  bg-gray-900
                  text-white
                  text-sm
                  font-medium
                  transition-all duration-200
                  hover:bg-gray-800
                  active:scale-[0.98]
                "
              >
                {item.id === 'Business' ? 'Purchase' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BuyCredit

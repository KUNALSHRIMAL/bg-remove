import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafc] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="bg.removal"
            className="h-6"
          />
        </div>

        {/* Center: Copyright */}
        <p className="text-sm text-gray-500 text-center">
          All rights reserved. Copyright © bg removal
        </p>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-gray-800 transition">
            <img src={assets.facebook_icon} alt="Facebook" className="w-9 h-9" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800 transition">
            <img src={assets.twitter_icon} alt="Twitter" className="w-9 h-9" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800 transition">
            <img src={assets.google_plus_icon} alt="Google" className="w-9 h-9" />
          </a>
        </div>

      </div>
    </footer>
  );
}

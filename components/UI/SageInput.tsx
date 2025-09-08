"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SageInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    setInputValue(sanitizedValue);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="mt-8 relative max-w-2xl mx-auto">
      <input
        type="text"
        className="w-full py-4 px-6 rounded-full shadow-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        placeholder="Ask Sage anything..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleButtonClick}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#635bff] text-white p-2 rounded-full transform hover:scale-110 transition-transform duration-200"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default SageInput;
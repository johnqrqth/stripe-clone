"use client";
import React, { ReactNode } from 'react';
import { FaPlus } from 'react-icons/fa';

interface CardProps {
  title: string;
  children: ReactNode;
  buttonText: string;
}

const Card = ({ title, children, buttonText }: CardProps) => {
  const handleButtonClick = () => {
    console.log(`Button clicked for: ${title}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-left">
      <h3 className="w-full text-lg font-bold text-gray-800">
        {title}
      </h3>
      <div className="mt-4 w-full">
        {children}
      </div>
      <button
        onClick={handleButtonClick}
        className="mt-6 flex items-center text-[#635bff] font-semibold text-sm transition-transform duration-200 hover:scale-105"
      >
        <FaPlus className="mr-2" /> {buttonText}
      </button>
    </div>
  );
};

export default Card;
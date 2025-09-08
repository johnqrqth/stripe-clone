"use client";
import React, { useEffect, useState } from 'react'

const RotatingForm = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`relative p-8 rounded-2xl shadow-xl w-full max-w-sm transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 rounded-2xl border-2 border-gray-200"></div>
      <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
        Demo
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-xl font-bold text-gray-800">Davis Legal Group</p>
        <p className="text-sm text-gray-500">
          Conference call with opposing counsel regarding closing timeline
        </p>
        <div className="flex w-full items-center justify-center">
          <div className="bg-gray-200 rounded-full px-4 py-2 text-sm text-gray-600">
            Corporate Merger #2024-003
          </div>
        </div>
        <div className="w-full h-8 bg-lime-500 rounded-full px-4 py-1 text-sm text-white flex items-center justify-center">
          Negotiation
        </div>
        <div className="w-full pt-4 border-t border-dashed border-gray-300 grid grid-cols-2 gap-4">
          <div className="text-sm text-gray-500">Time</div>
          <div className="text-right text-sm text-gray-800 font-bold">1.1h</div>
          <div className="text-sm text-gray-500">Rate</div>
          <div className="text-right text-sm text-gray-800 font-bold">$450</div>
          <div className="col-span-2 pt-4 border-t border-dashed border-gray-300 grid grid-cols-2">
            <div className="text-base text-gray-800 font-bold">Total</div>
            <div className="text-right text-3xl text-gray-800 font-bold">$495</div>
          </div>
        </div>
        <div className="pt-2 text-xs text-gray-400">
          Source: Phone call - logged
        </div>
      </div>
    </div>
  );
}

export default RotatingForm
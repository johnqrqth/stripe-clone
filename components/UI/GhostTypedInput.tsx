"use client";
import React, { Suspense } from "react";
import { ReactTyped } from "react-typed";

const GhostTypedInput = () => {
  return (
    <Suspense
      fallback={
        <div className="w-[70%] py-3 text-white bg-black/20 rounded-full text-center animate-pulse">
          Loading...
        </div>
      }
    >
      <div className="w-[70%] py-3 text-white bg-black/20 rounded-full text-center">
        <ReactTyped
          strings={[
            "Log all calls for today",
            "Generate conflict checks...",
            "Remind me to review smith and jones inv...",
            "Send a client email summary",
          ]}
        //   typeSpeed={40}
        //   backSpeed={50}
          attr="placeholder"
          loop
        />
      </div>
    </Suspense>
  );
};

export default GhostTypedInput;

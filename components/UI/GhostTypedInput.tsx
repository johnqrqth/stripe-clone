"use client";
import React, { Suspense, useMemo } from "react";
import Typewriter from "typewriter-effect";

const GhostTypedInput = () => {
  const typedStrings = useMemo(() => {
    return [
      "Log all calls for today",
      "Generate conflict checks...",
      "Remind me to review smith and jones inv...",
      "Send a client email summary",
    ];
  }, []);
  return (
    <Suspense
      fallback={
        <div className="w-[70%] py-3 text-white bg-black/20 rounded-full text-center animate-pulse">
          Loading...
        </div>
      }
    >
      <div className="w-[70%] py-3 text-white bg-black/20 rounded-full text-center">
        <Typewriter
          options={{
            strings: typedStrings,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </Suspense>
  );
};

export default GhostTypedInput;

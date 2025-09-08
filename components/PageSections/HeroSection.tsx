import { MeshGradient } from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core";
import React from "react";
import Button from "../UI/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const HeroSection = () => {
  const options: MeshGradientOptions = {
    colors: ["#a960ee", "#ff333d", "#90e0ff", "#ffcb57"],
    animationSpeed: 1.6,
    frequency: 0.00022,
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MeshGradient
            options={options}
            style={{ width: "100%", height: "50%" }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[#f6f9fc] transform -skew-y-[14deg] xl:-skew-y-[8deg] origin-top-left h-[100vh] xl:h-[120vh]"></div>

        <div className="relative z-10 p-4 md:p-8 mt-8 lg:mt-20 ">
          <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-8 md:max-w-7xl md:gap-x-16">
            <div className="flex flex-col items-start justify-center col-span-5">
              <p className="text-[#3a3a3a] text-[clamp(3.5rem,4vw,3rem)] md:text-[70px] font-bold text-left">
                Stop Losing Billable Time You&apos;ve Already Earned
              </p>
              <p className="text-[#425466] text-lg text-left mt-4">
                Sque is the Legal Revenue & Operating System — it captures work
                automatically and runs billing as your system of record.
              </p>
              <p className="text-[#425466] text-lg text-left mt-4">
                First invoice in 48 hours • Audit-ready proof in 14 days • 0
                rejected e-bills
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button variant="primary">Get Started</Button>
                <Button
                  variant="transparent-light"
                  icon={<FaArrowRightLong />}
                  className="ml-4"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="hidden md:block relative col-span-3">
              <div>
                <Image
                  src="/hero_image.png"
                  alt="hero image"
                  fill
                  className="object-cover object-left-top overflow-visible"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

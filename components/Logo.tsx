import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  textColor?: string;
}

const Logo = ({ textColor }: LogoProps) => {
  return (
    <Link
      href="#"
      className="-m-1.5 p-1.5 flex flex-row items-center space-x-1"
    >
      <Image
        src="/Sque_icon_universal.svg"
        alt="Sque Logo"
        width={60}
        height={20}
      />
      <p className={`text-2xl font-bold ${textColor || "text-black"}`}>Sque</p>
    </Link>
  );
};

export default Logo;

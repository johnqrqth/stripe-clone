"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa6";
import Logo from "../Logo";

const NavHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "#" },
    { name: "Resources", href: "#" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo textColor="text-white" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold leading-6 text-white text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <nav className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white m-auto sm:max-w-[100vw] sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between p-4">
              <Logo />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <GrClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mx-4 my-5 flow-root">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex justify-between py-5 text-lg font-semibold leading-7 text-[#3F4b66] hover:bg-gray-50 border-b border-dashed border-gray-300"
                  >
                    {item.name}
                    <FaChevronRight className="inline-block ml-2" />
                  </Link>
                ))}
              </div>
              <Link
                href="#"
                className="flex justify-between py-5 text-lg font-semibold leading-7 text-[#3F4b66] hover:bg-gray-50 border-b border-dashed border-gray-300"
              >
                Log in
              </Link>
              <div className="absolute bottom-0 w-full pb-6 left-36">
                <Link
                  href="#"
                  className="flex flex-row items-center justify-center rounded-full px-3 py-1 text-sm font-semibold leading-7 bg-[#635bff] max-w-fit"
                >
                  <p>Get started</p>
                  <FaChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavHeader;

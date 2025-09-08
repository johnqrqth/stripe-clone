import React from "react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#f6f6f6] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 transform -skew-y-[4deg] origin-bottom-right">
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray-500">
              Sque is an advanced AI legal platform that streamlines legal
              workflows, automates document creation, and provides intelligent
              legal research assistance.
            </p>
            <p className="mt-4 text-sm text-gray-500">© 2025 Sque AI</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Company</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Media inquiries
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Resources</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Subprocessors
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center md:text-left">
              One AI. Every Legal Task. Silos Optional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
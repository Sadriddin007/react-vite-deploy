import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-[50px] mt-7">
      <p className="text-gray-700 flex justify-center items-center gap-2 flex-wrap text-[20px]">
        Mode With <span className="text-red-500">❤️</span> by

        <span className="flex items-center gap-1 px-[20px]">
          <FaInstagram className="text-blue-500" />
          <a
            href="https://instagram.com/abduraxmonov_510"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Sadriddin Abduraxmonov
          </a>
        </span>

        <span className="flex items-center gap-1">
          <FaGithub className="text-blue-500" />
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Sadriddin Abduraxmonov
          </a>
        </span>
      </p>
    </footer>
  );
};

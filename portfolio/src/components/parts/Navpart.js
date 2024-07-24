import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navpart() {
   const navigate = useNavigate();

   const handleClick = (item) => {
     navigate(item);
   };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              onClick={() => handleClick("/")}
              className="text-gray-300 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("/portfolio")}
              className="text-gray-300 hover:text-white"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("/")}
              className="text-gray-300 hover:text-white"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("/contact")}
              className="text-gray-300 hover:text-white"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

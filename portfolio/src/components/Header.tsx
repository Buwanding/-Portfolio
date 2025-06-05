import { useState } from "react";
import { Link } from "react-router-dom";
import Portfolio from "../assets/portfolio.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 shadow-md dark:shadow-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          {/* Logo */}
          <Link to="/" className="flex items-start ml-10">
            <img src={Portfolio} className="mr-3 h-8 sm:h-10" alt="Logo" />
            <span className="self-center text-2xl font-bold text-blue-500 dark:text-blue-400 whitespace-nowrap">
              Portfolio
            </span>
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 dark:text-gray-300 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""
                }`}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 10h14a1 1 0 010 2H3a1 1 0 010-2zM3 15h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${isMobileMenuOpen ? "block" : "hidden"
              } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 lg:p-0 font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-me"
                  className="block py-2 pr-4 pl-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 lg:p-0 font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="block py-2 pr-4 pl-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 lg:p-0 font-bold"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="block py-2 pr-4 pl-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 lg:p-0 font-bold"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 lg:p-0 font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

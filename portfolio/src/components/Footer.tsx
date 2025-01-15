import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 mt-10 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Copyright Section */}
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © 2023{" "}
            <a
              href="#"
              className="hover:underline text-gray-900 dark:text-white font-semibold"
            >
              Aladdin A Buwanding
            </a>
            . All Rights Reserved.
          </span>

          {/* Footer Navigation Links */}
          <ul className="flex flex-wrap items-center space-x-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 mt-10 shadow-lg dark:shadow-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Copyright Section */}
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © 2025{" "}
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
              <Link to="/about-me">
                <a href="#about" className="hover:underline dark:hover:text-white">
                  About Me
                </a>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <a href="#projects" className="hover:underline dark:hover:text-white">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a href="#contact" className="hover:underline dark:hover:text-white">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

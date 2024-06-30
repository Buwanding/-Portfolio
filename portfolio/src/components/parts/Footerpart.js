import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footerpart = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-sm">
              Ecosystem bootstrapping learning curve lean startup disruptive.
              Marketing long tail disruptive agile development partner.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-200 hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-400">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <i className="fab fa-dribbble text-2xl text-gray-200"></i>
              <a
                href="https://dribbble.com/example"
                className="ml-2 text-gray-200 hover:text-gray-400"
              >
                dribbble.com/example
              </a>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-2xl text-gray-200"></i>
              <a
                href="mailto:contact@example.com"
                className="ml-2 text-gray-200 hover:text-gray-400"
              >
                contact@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpart;

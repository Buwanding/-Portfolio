import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyPhoto from "../images/MyPhoto.jpg";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

        <section className="flex flex-col md:flex-row items-center justify-center h-screen bg-white px-6 md:px-16">
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Hi, I'm <span className="text-blue-500">Aladdin</span>
            </h1>
            <h2 className="text-2xl font-medium text-gray-600">Web Designer</h2>
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 mt-4">
              Contact
            </button>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {/* Social Icons */}
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-behance text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              {/* Decorative Shape */}
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-blue-500 rounded-full transform rotate-45 lg:w-96 lg:h-96"></div>
              {/* Profile Image */}
              <img
                src="/path-to-your-image.jpg"
                alt="Aladdin"
                className="relative w-64 h-64 rounded-full object-cover shadow-lg lg:w-72 lg:h-72"
              />
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}

export default Home;

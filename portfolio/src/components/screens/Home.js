import React from 'react'
import Navpart from '../parts/Navpart'
import Footerpart from '../parts/Footerpart'

export const Home = () => {
  return (
    <div>
      <Navpart />
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center text-white p-8">
          <img
            src="/path/to/your/image.png"
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold">Hi There,</h1>
          <h2 className="text-3xl font-bold text-yellow-500">
            I'm Jigar Sable
          </h2>
          <p className="text-xl text-gray-400 mt-2">
            I Am Into <span className="text-red-500">Web Development</span>
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            About Me
          </button>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <Footerpart />
    </div>
  );
}

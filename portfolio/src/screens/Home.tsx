import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyPhoto from "../images/MyPhoto.jpg";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300"
          >
            <img
              className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
              src={MyPhoto}
              alt="My Profile"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Welcome to My Portfolio
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I am a passionate developer with experience in both front-end
                and back-end technologies. Here, you can explore my projects,
                skills, and the work I am proud to showcase.
              </p>
              <button className="px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View My Projects
              </button>
            </div>
          </a>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

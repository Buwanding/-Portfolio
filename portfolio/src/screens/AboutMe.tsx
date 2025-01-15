import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Myphoto } from "../assets";

function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">
          <motion.a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-l-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
              src={Myphoto}
              alt="My Profile"
              whileHover={{ scale: 1.1 }}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Welcome to <span className="text-blue-500">My Portfolio</span>
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I am a passionate developer with experience in both front-end
                and back-end technologies. Here, you can explore my projects,
                skills, and the work I am proud to showcase.
              </p>
              <motion.button
                className="px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://github.com/Buwanding">View My Projects</a>
              </motion.button>
            </div>
          </motion.a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutMe;

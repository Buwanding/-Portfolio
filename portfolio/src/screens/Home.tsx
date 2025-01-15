
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyPhoto from "../images/MyPhoto.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col min-h-screen px-10">
      <Header />
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-10 md:px-16 py-8">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Hi, I'm <span className="text-blue-500">Aladdin</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
            Web Developer
          </h2>
          <motion.button
            className="px-8 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
          <motion.div
            className="flex justify-center md:justify-start space-x-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Social Icons */}
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-behance text-3xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative Shape */}
            <motion.div
              className="absolute -top-8 -left-8 w-72 h-72 bg-blue-500 rounded-full transform rotate-45 md:w-96 md:h-96"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            ></motion.div>
            {/* Profile Image */}
            <motion.img
              src={MyPhoto}
              alt="Aladdin"
              className="relative w-56 h-56 rounded-full object-cover shadow-lg md:w-72 md:h-72"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;

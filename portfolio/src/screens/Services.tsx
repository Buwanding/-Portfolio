import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Services() {

      const skills = [
        {
          name: "SQL",
          description:
            "Proficient in creating, managing, and querying databases.",
          image: "sql-image-url",
        },
        {
          name: "JavaScript",
          description:
            "Experienced in building dynamic and interactive web applications.",
          image: "javascript-image-url",
        },
        {
          name: "HTML and CSS",
          description:
            "Expert in crafting semantic and responsive web designs.",
          image: "html-css-image-url",
        },
        {
          name: "React",
          description:
            "Skilled in building reusable components and managing application state.",
          image: "react-image-url",
        },
        {
          name: "Tailwind CSS",
          description:
            "Proficient in styling web applications with utility-first CSS framework.",
          image: "tailwind-image-url",
        },
        {
          name: "React Vite",
          description:
            "Experienced in fast and efficient development with Vite.",
          image: "vite-image-url",
        },
        {
          name: "TypeScript",
          description:
            "Good understanding of type-safe development with TypeScript.",
          image: "typescript-image-url",
        },
        {
          name: "PHP",
          description:
            "Proficient in server-side programming and developing dynamic websites.",
          image: "php-image-url",
        },
        {
          name: "Python (Beginner in Machine Learning)",
          description:
            "Basic understanding of Python and foundational knowledge in machine learning.",
          image: "python-image-url",
        },
      ];
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-6 flex-grow">
        <section className="my-12">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white shadow-xl rounded-lg p-6 border-t-4 border-blue-500"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-blue-500 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-700 text-center">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Services;

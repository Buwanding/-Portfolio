// src/components/Portfolio.js
import React from "react";
import Navpart from "../parts/Navpart";
import Footerpart from "../parts/Footerpart";
import Experience from "../parts/Experience";
import Testimonial from "../parts/Testimonial";
import Contact from "../parts/Contact";

const Portfolio = () => {
  const projects = [
    {
      title: "Amazon Scrapper",
      image: "path_to_image",
      description: "Description here",
    },
    // Add more projects here
  ];

  return (
    <div className="bg-gray-800 text-white p-8">
      <Navpart/>
      <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    <Experience/>
    <Testimonial/>
    <Contact/>
    <Footerpart/>
    </div>
  );
};

export default Portfolio;

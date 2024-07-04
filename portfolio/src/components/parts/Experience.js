// src/components/Experience.js
import React from "react";

const Experience = () => {
  const experiences = [
    {
      year: 2021,
      title: "Senior Python Developer",
      company: "Scottech, Toledo",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      year: 2021,
      title: "Python Developer",
      company: "AutoGrid Systems, Naperville",
      description: "Lorem ipsum dolor sit amet...",
    },
    // Add more experiences here
  ];

  return (
    <div className="bg-gray-800 text-white p-8">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold">{exp.year}</h3>
            <h4 className="text-xl font-medium">{exp.title}</h4>
            <h5 className="text-lg">{exp.company}</h5>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

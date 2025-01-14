import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    image: "path/to/image1.jpg",
    title: "Project 1",
    description: "Description for project 1",
    tags: ["React", "Tailwind"],
  },
  {
    image: "path/to/image2.jpg",
    title: "Project 2",
    description: "Description for project 2",
    tags: ["JavaScript", "API"],
  },
  // Add more projects as needed
];

function Portfolio() {
  // Allow `selectedImage` to be a string (image URL) or null
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900">
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-200">
            Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                {/* Image Section */}
                <div
                  className="relative h-48 w-full cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedImage(project.image)} // No error now
                >
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "path/to/placeholder.jpg"; // Fallback image
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-sky-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-sky-900 text-sky-200 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Portfolio;

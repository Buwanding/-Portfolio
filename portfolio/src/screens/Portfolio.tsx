import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mobile_PickMeUp, sams, Web_PickMeUp } from "../assets";

// Define TypeScript interfaces
interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    image: Mobile_PickMeUp,
    title: "Mobile PickMeUp",
    description: "Ride hailing app for mobile devices.",
    tags: ["React Native", "Tailwind"],
  },
  {
    image: sams,
    title: "SAMS",
    description: "Student Monitoring System for schools.",
    tags: ["html", "css", "javascript", "php"],
  },
  {
    image: Web_PickMeUp,
    title: "Website PickMeUp",
    description: "For Admins to manage the Pick Me Up mobile users.",
    tags: ["React", "Tailwind"],
  },
];

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Image modal handler
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900">
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-blue-500 dark:bg-blue-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 dark:border-gray-600"
              >
                <div
                  className="relative h-48 w-full cursor-pointer overflow-hidden group"
                  onClick={() => handleImageClick(project.image)}
                >
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const img = e.currentTarget;
                      img.onerror = null;
                      img.src = "/images/placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-blue-500 dark:bg-blue-600">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-200 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white text-blue-500 rounded-full text-sm dark:bg-gray-200"
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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="max-w-4xl max-h-[90vh] p-4">
            <img
              src={selectedImage}
              alt="Selected project"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;

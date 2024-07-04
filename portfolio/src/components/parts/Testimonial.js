// src/components/Testimonial.js
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-gray-800 text-white p-8 flex items-center">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4">Testimonial</h2>
        <p className="text-xl mb-4">
          The design quality, flexibility, documentation and support are all
          absolutely excellent. I buy the Avada theme for all my clients,
          knowing that whatever they require, Avada will be able to deliver.
        </p>
        <p className="font-bold">Josef Sharon</p>
        <p>CEO, Omsoft</p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="path_to_image"
          alt="Josef Sharon"
          className="rounded-full w-48 h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonial;

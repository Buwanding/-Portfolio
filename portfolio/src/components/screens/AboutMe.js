import React from "react";

function AboutMe() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto my-10">
      <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block pb-1 mb-6">
        About Me
      </h2>
      <p className="text-gray-700 mb-4">
        An experienced Graphic Designer and a devoted Creative. I strive to
        achieve high standards of quality in all my work.
        <br />
        <br />
        I love Designing. I love helping people create that visual they've been
        seeing in their minds. And the best part comes from the joy when a
        client gets the finished product.
        <br />
        <br />
        My speed and price go hand in hand with the work needed to be done.
        Deadlines are met swiftly, and work is done efficiently.
        <br />
        <br />
        Like what you see? Whatever it may be, I can make it for you. Contact me
        for more information.
      </p>
      <div className="mt-6">
        <p className="font-bold text-gray-900">+254 711 860722</p>
        <p className="font-bold text-gray-900">hooded.artist.ke@gmail.com</p>
      </div>
    </div>
  );
}

export default AboutMe;

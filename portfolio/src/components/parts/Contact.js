// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 bg-gray-700 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 bg-gray-700 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 bg-gray-700 rounded-lg"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-black p-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

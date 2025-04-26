// src/sections/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Your Path to Wellness Starts Here
        </h1>
        <p className="text-xl mb-6">
          Empower your health journey with our innovative AI-powered tools and
          resources.
        </p>
        <div>
          <a
            href="#get-started"
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md text-lg mr-4"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

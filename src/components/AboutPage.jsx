import React from "react";
import aboutImage from "../assets/aboutus.gif"; // Make sure this path is correct

const AboutUs = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white px-6 py-12"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
   
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-80 h-auto object-contain rounded-xl" // added rounded corners
          />
        </div>

     
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-purple-600 inline-block pb-1">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-7 mb-6">
            We are a pioneering AI-driven platform focused on revolutionizing
            the medical tourism industry. By addressing inefficiencies and
            disorganization, we empower healthcare facilitators to modernize
            their operations, attract more patients, and deliver seamless,
            personalized care across borders.
          </p>
          <p className="text-gray-700 text-lg leading-7 mb-8">
            Our cutting-edge solutions are designed to streamline processes and
            enhance the overall patient experience.
          </p>

          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Modern Solutions */}
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 17a1 1 0 01-2 0v-2H7a1 1 0 110-2h2V9a1 1 0 012 0v4h2a1 1 0 110 2h-2v2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  Modern Solutions
                </h4>
                <p className="text-gray-600">
                  Leveraging AI technology for healthcare
                </p>
              </div>
            </div>

           
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4
                      v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  Patient-Centric
                </h4>
                <p className="text-gray-600">
                  Personalized healthcare experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

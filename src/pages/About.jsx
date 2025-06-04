
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
     
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/aboutus.gif"
            alt="Doctors Team"
            className="w-full max-w-md"
          />
        </div>

        <div className="flex-1">
  
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

   
          <div className="w-16 h-1 bg-purple-600 mb-6"></div>

          
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a pioneering AI-driven platform focused on revolutionizing
            the medical tourism industry. By addressing inefficiencies and
            disorganization, we empower healthcare facilitators to modernize
            their operations, attract more patients, and deliver seamless,
            personalized care across borders.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our cutting-edge solutions are designed to streamline processes and
            enhance the overall patient experience.
          </p>

         
          <div className="grid md:grid-cols-2 gap-8">
         
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Modern Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Leveraging AI technology for healthcare.
                </p>
              </div>
            </div>

     
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
          
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16h8m0 0v-8m0 8H8m8 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Patient-Centric
                </h3>
                <p className="text-gray-600 text-sm">
                  Personalized healthcare experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

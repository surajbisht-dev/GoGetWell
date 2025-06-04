import React from "react";
import { CheckCircle, TrendingUp } from "lucide-react";
import missionGif from "../assets/mission.gif"; // Adjust path if needed

const Mission = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
 
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h1 className="text-4xl font-bold relative mb-6">
          Our Mission
          <span className="block w-16 h-1 bg-indigo-500 mt-2"></span>
        </h1>

        <p className="text-lg mb-6">
          Our mission is to simplify the complex medical tourism process by
          leveraging advanced AI tools that optimize healthcare facilitators
          operations, maximize revenue opportunities, and provide patients with
          personalized and stress-free treatment journeys.
        </p>

        <p className="text-lg mb-8">
          We strive to become the leading platform for healthcare tourism
          management and digital transformation.
        </p>

       
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex items-center gap-4 w-full sm:w-[260px]">
            <div className="p-3 bg-indigo-100 rounded-md flex items-center justify-center w-12 h-12">
              <CheckCircle className="text-indigo-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                AI-Powered Solutions
              </h3>
              <p className="text-sm text-gray-600">
                Optimizing operations with advanced technology
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-[260px]">
            <div className="p-3 bg-indigo-100 rounded-md flex items-center justify-center w-12 h-12">
              <TrendingUp className="text-indigo-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Growth Focus
              </h3>
              <p className="text-sm text-gray-600">
                Maximizing revenue and opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="md:w-1/2 flex justify-center">
        <img
          src={missionGif}
          alt="Mission GIF"
          className="w-[400px] h-auto object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default Mission;

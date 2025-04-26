import React from "react";
import { Clock, MessageSquare } from "lucide-react";
import challengeGif from "../assets/challenge.gif"; // adjust path if needed

const Challenge = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 md:pr-12">
        <img
          src={challengeGif}
          alt="Challenge GIF"
          className="w-[400px] h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-3">
          The Challenges We Solve
        </h2>
        <div className="w-16 h-1 bg-indigo-500 mb-6"></div>

        <p className="text-base text-gray-600 leading-relaxed mb-4">
          Medical tourism, especially in India, is plagued by disorganization
          and inefficiency. Facilitators often rely on outdated methods, leading
          to delayed bookings, inadequate patient support, and missed growth
          opportunities.
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-10">
          Our platform addresses these pain points by streamlining lead
          management and improving operational efficiency for facilitators and
          hospitals alike.
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Efficient Operations */}
          <div className="flex items-center gap-4 w-full sm:w-[260px]">
            <div className="p-3 bg-indigo-100 rounded-md flex items-center justify-center w-12 h-12">
              <Clock className="text-indigo-500 w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Efficient Operations
              </h4>
              <p className="text-sm text-gray-600">
                Streamlined booking and management
              </p>
            </div>
          </div>

          {/* Enhanced Support */}
          <div className="flex items-center gap-4 w-full sm:w-[260px]">
            <div className="p-3 bg-indigo-100 rounded-md flex items-center justify-center w-12 h-12">
              <MessageSquare className="text-indigo-500 w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Enhanced Support
              </h4>
              <p className="text-sm text-gray-600">
                Improved patient communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;

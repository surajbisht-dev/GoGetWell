// src/sections/Features.jsx
import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Insights</h3>
            <p className="text-lg">
              Get actionable health insights based on your personal data and
              goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Easy Tracking</h3>
            <p className="text-lg">
              Track your wellness progress with user-friendly dashboards and
              graphs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Real-time Recommendations
            </h3>
            <p className="text-lg">
              Receive real-time health recommendations and tips based on your
              activity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

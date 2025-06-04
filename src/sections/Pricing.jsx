
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <section className="py-20 text-center bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-lg mb-4">$19.99/month</p>
              <ul className="text-left mb-6">
                <li>Access to basic features</li>
                <li>24/7 customer support</li>
                <li>Basic analytics</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
              <p className="text-lg mb-4">$49.99/month</p>
              <ul className="text-left mb-6">
                <li>Access to all features</li>
                <li>Priority customer support</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
              <p className="text-lg mb-4">Contact us for pricing</p>
              <ul className="text-left mb-6">
                <li>Customized features</li>
                <li>Dedicated account manager</li>
                <li>Enterprise-grade analytics</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;

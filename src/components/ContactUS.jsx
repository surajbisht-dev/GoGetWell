import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full px-4 py-16 flex flex-col md:flex-row gap-16">
     
        <div className="flex-1">
          <h1 className="text-4xl text-gray-900 mb-6">Let's get in touch!</h1>
          <p className="text-gray-600 text-base mb-10 max-w-md">
            Got questions about GoGetWell.AI? Our team is here to help. Contact
            us for quick and friendly support.
          </p>

         
          <div className="space-y-6">
        
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-md text-purple-700 flex items-center justify-center">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800 text-sm">+91 9811396858</p>
              </div>
            </div>

   
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-md text-purple-700 flex items-center justify-center">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800 text-sm">hello@gogetwell.ai</p>
              </div>
            </div>
          </div>

          
          <div className="mt-10">
            <h2 className="text-base text-gray-800 mb-4">Connect With Us</h2>
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-2 rounded-md text-purple-700 cursor-pointer flex items-center justify-center">
                <FaTwitter size={20} />
              </div>
              <div className="bg-purple-100 p-2 rounded-md text-purple-700 cursor-pointer flex items-center justify-center">
                <FaLinkedin size={20} />
              </div>
            </div>
          </div>
        </div>

       
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm">
          <form className="space-y-6">
           
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700"
              />
              <FaUser
                className="absolute top-3.5 left-4 text-gray-400"
                size={18}
              />
            </div>

         
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700"
              />
              <MdEmail
                className="absolute top-3.5 left-4 text-gray-400"
                size={18}
              />
            </div>

           
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 resize-none text-gray-700"
              ></textarea>
            </div>

       
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg text-sm hover:bg-purple-800 transition"
            >
              Submit ➤
            </button>
          </form>
        </div>
      </div>

     
      <footer
        id="contact"
        className="border-t border-gray-200 text-gray-500 text-sm py-6 px-6 flex flex-col md:flex-row items-center justify-between"
      >
        <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
          <p>©2025 gogetwell.ai</p>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Pricing Policy
          </a>
          <a href="#" className="hover:underline">
            Editor Policy
          </a>
        </div>

        <div className="flex gap-4 text-purple-700 text-xl">
          <FaTwitter size={20} />
          <FaLinkedin size={20} />
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;

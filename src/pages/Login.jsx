import React from "react";
import logo from "../assets/logo.png"; // Make sure logo is correctly imported

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
      
        <div className="flex justify-start mb-6">
          <img src={logo} alt="GoGetWell Logo" className="w-14 h-14" />
        </div>

      
        <h1 className="text-3xl font-bold text-black mb-2 text-left">
          Store Login!
        </h1>

       
        <p className="text-base text-gray-600 mb-6 text-left">
          Please enter your credentials to sign in!
        </p>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2 text-left"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 bg-gray-100 text-sm text-gray-900 rounded-md placeholder-gray-400 focus:outline-none"
          />
        </div>

     
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-[#6956A5] hover:bg-[#5c4b93] text-white py-3 text-sm font-semibold rounded-md transition duration-150"
          >
            Sign In
          </button>
        </div>

        
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-600">or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

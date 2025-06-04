

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0B0B3B] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
      
        <div className="space-y-4">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-left">
            <span className="text-[#8f5fff]">AI Front Office</span> <br />
            For Healthcare Agents
          </h1>

          <p className="text-lg md:text-xl text-gray-300 text-left leading-relaxed">
            Create{" "}
            <span className="text-[#8f5fff] font-semibold">AI Store</span> in 2
            min
            <br />
            Scale with{" "}
            <span className="text-[#8f5fff] font-semibold">
              Digital Marketing
            </span>
          </p>
        </div>

      
        <div className="text-left">
          <button
            onClick={() => navigate("/register")}
            className="bg-[#8f5fff] hover:bg-[#7a4fe0] px-8 py-3 rounded-md text-lg font-semibold transition"
          >
            Get Started
          </button>
        </div>

       
        <div className="flex flex-col md:flex-row items-start gap-12 mt-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold">2100+</h2>
            <p className="text-gray-300 text-base mt-1">Qualified Doctors</p>
          </div>
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold">1000+</h2>
            <p className="text-gray-300 text-base mt-1">Hospitals</p>
          </div>
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold">800+</h2>
            <p className="text-gray-300 text-base mt-1">Treatment Plans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// src/components/CTASection.jsx

import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-primary text-white py-16 px-4 text-center rounded-xl max-w-6xl mx-auto my-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Scale Your Clinic?
      </h2>
      <p className="text-lg mb-6">
        Let GoGetWell automate your growth while you focus on care.
      </p>
      <button
        onClick={() => navigate("/register")}
        className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-white/90 transition"
      >
        Get Started Now
      </button>
    </section>
  );
};

export default CTASection;

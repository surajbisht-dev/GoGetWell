import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#0B0B3B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-white font-semibold">go</span>
          <span className="text-[#8f5fff] font-semibold">Getwell.ai</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className="bg-white text-[#0B0B3B] font-semibold px-5 py-2 rounded-md hover:bg-gray-100"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-[#8f5fff] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#7a4fe0]"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

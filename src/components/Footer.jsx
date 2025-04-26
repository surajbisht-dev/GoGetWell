// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] text-gray-700 py-10 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-primary">GoGetWell</h2>
          <p className="text-sm leading-relaxed">
            Your AI-powered growth partner for healthcare businesses. Get more
            leads. Stay compliant. Grow effortlessly.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="https://goget.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                GoGet.co.in
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h3 className="font-semibold mb-2">Join Us</h3>
          <p className="text-sm mb-2">Sign up and get started in minutes.</p>
          <Link
            to="/register"
            className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark text-sm"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GoGetWell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

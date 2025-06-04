

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 px-4 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Have any questions? We would love to hear from you.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-2 h-32"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

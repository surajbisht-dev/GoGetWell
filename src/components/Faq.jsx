import React, { useState } from "react";

const faqs = [
  {
    question: "What is gogetwell.ai?",
    answer:
      "gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.",
  },
  {
    question: "What is the AI Front Office for Healthcare Agents?",
    answer: "",
  },
  {
    question: "How does the AI Agent assist me in my healthcare business?",
    answer: "",
  },
  {
    question: "Can I customize the website for my healthcare services?",
    answer: "",
  },
  {
    question:
      "How does this platform support independent healthcare facilitators like me?",
    answer: "",
  },
  {
    question: "How does the platform help me manage patient leads?",
    answer: "",
  },
  {
    question:
      "Is it easy to integrate the platform with the hospitals I work with?",
    answer: "",
  },
  {
    question:
      "Is the platform secure and compliant with healthcare regulations?",
    answer: "",
  },
  {
    question: "How quickly can I get started with the platform?",
    answer: "",
  },
  {
    question: "What kind of customer support is available if I need help?",
    answer: "",
  },
  {
    question: "How does the platform help me attract more patients?",
    answer: "",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-indigo-50 min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-3xl w-full">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
        </h2>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-base text-gray-800">{faq.question}</span>
                <span className="ml-4 text-indigo-500">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

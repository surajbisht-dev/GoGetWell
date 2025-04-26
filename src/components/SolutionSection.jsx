const solutions = [
  {
    title: "Custom AI-Powered Website",
    description:
      "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "border-b-4 border-blue-500",
    icon: "🌐",
  },
  {
    title: "Enhanced Patient Conversion",
    description:
      "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "border-b-4 border-purple-500",
    icon: "🏥",
  },
  {
    title: "Real-Time Query Handling",
    description:
      "Instant response system for patient inquiries with AI-powered chat support.",
    color: "border-b-4 border-green-500",
    icon: "💬",
  },
  {
    title: "Medical Report Analysis",
    description:
      "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "border-b-4 border-orange-500",
    icon: "📝",
  },
  {
    title: "Improved Lead Generation",
    description:
      "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "border-b-4 border-pink-500",
    icon: "📈",
  },
  {
    title: "Comprehensive Healthcare Database",
    description:
      "Extensive medical information database for accurate patient guidance and support.",
    color: "border-b-4 border-indigo-500",
    icon: "📚",
  },
  {
    title: "Telemedicine Integration",
    description:
      "Seamless telemedicine integration for remote consultations and virtual care.",
    color: "border-b-4 border-teal-500",
    icon: "📞",
  },
  {
    title: "Patient Education Tools",
    description:
      "Interactive educational resources to empower patients with knowledge about their health.",
    color: "border-b-4 border-yellow-500",
    icon: "🎓",
  },
  {
    title: "Automated Appointment Scheduling",
    description:
      "AI-driven scheduling system to optimize patient appointment management.",
    color: "border-b-4 border-red-500",
    icon: "📅",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Comprehensive Solutions
          </h2>
          <div className="w-16 h-1 bg-[#8f5fff] mx-auto rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-xl p-6 text-left ${item.color}`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

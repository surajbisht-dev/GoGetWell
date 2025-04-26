// src/components/TestimonialCard.jsx

const TestimonialCard = ({ name, title, message, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-gray-700 text-sm italic mb-4">"{message}"</p>
      <h4 className="text-md font-semibold">{name}</h4>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  );
};

export default TestimonialCard;

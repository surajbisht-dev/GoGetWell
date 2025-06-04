

const PricingCard = ({
  title,
  price,
  features = [],
  buttonText,
  highlight,
}) => {
  return (
    <div
      className={`rounded-xl border shadow-sm p-6 flex flex-col justify-between ${
        highlight ? "bg-primary text-white border-primary" : "bg-white"
      }`}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold mb-4">{price}</p>
        <ul
          className={`space-y-2 text-sm ${
            highlight ? "text-white/90" : "text-gray-700"
          }`}
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">✔️</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-6 px-4 py-2 rounded text-sm font-medium ${
          highlight
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;

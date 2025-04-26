// src/pages/Register.jsx

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here (dummy for now)
    navigate("/dashboard");
  };

  return (
    <section className="py-20 px-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;

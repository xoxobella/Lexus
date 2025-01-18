import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Video from '../assets/videos/bg-form.mp4';

export default function SignUp() {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover filter grayscale"
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Black & White Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 mix-blend-overlay"></div>

      {/* Animated Form Card */}
      <div className="relative bg-white bg-opacity-70 shadow-lg rounded-lg p-8 w-full max-w-md animate-fadeIn transition-transform transform duration-500 ease-in-out hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Back to Home Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-gray-700 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaApple, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <div className="flex bg-secondary justify-center items-center min-h-screen bg-gray-100 px-4">
      <motion.div
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-r md:border-b-0">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-secondary mb-6">Log into Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black"
              required
            />
            <motion.button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Log In
            </motion.button>
            <div className="text-center text-secondary text-sm sm:text-base">
              <Link to="/" className="hover:underline">Back to Website</Link>
            </div>
          </form>
        </div>

        {/* Right Side - Social Login */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center p-3 border rounded-lg hover:bg-primary hover:text-gray-800 transition">
              <FaGoogle className="mr-2" /> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center p-3 border rounded-lg hover:bg-primary hover:text-gray-800 transition">
              <FaApple className="mr-2" /> Continue with Apple
            </button>
            <button className="w-full flex items-center justify-center p-3 border rounded-lg hover:bg-primary hover:text-gray-800 transition">
              <FaFacebook className="mr-2" /> Continue with Facebook
            </button>
            <button className="w-full flex items-center justify-center p-3 border rounded-lg hover:bg-primary hover:text-gray-800 transition">
              <FaTwitter className="mr-2" /> Continue with Twitter
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

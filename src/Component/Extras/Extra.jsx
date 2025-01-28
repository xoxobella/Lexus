// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";  // For animations
import sofaVideo from '../../assets/videos/sofa-video.mp4' 

const HeroSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationTriggered(true), 500); // Delayed fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
  <video
    className="w-full h-full object-cover sm:w-full sm:h-screen md:w-full md:h-screen lg:w-full lg:h-screen"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={sofaVideo} type="video/mp4" />
  </video>
</div>

      {/* Content */}
      <div className="text-center px-6 md:px-12 lg:px-24 space-y-6 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 4 }}
        >
          Find Your Perfect Sofa or Mattress
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Explore a wide range of comfortable sofas and mattresses to suit your needs.
        </motion.p>
        
        <motion.button
          className="mt-8 py-3 px-6 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-gray-200 hover:text-gray-500 transition ease-in-out duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 space-x-4 text-white z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="text-sm sm:text-base md:text-lg"
        >
          Designed for Comfort
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="text-sm sm:text-base md:text-lg"
        >
          Built to Last
        </motion.span>
      </div>
    </div>
  );
};

export default HeroSection;

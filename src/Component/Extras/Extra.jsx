// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";  // For animations
import sofaVideo from '../../assets/videos/sofa-video.mp4';

const HeroSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationTriggered(true), 500); // Delayed fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={sofaVideo} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-8 md:px-12 lg:px-24 space-y-6 z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 4 }}
        >
          Find Your Perfect Sofa or Mattress
        </motion.h1>
        
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Explore a wide range of comfortable sofas and mattresses to suit your needs.
        </motion.p>
        
        <motion.button
          className="mt-6 py-3 px-6 bg-primary text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-200 hover:text-gray-500 transition ease-in-out duration-300 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-white z-10 text-sm sm:text-base md:text-lg">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Designed for Comfort
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          Built to Last
        </motion.span>
      </div>
    </div>
  );
};

export default HeroSection;

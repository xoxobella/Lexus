// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Modern Living Room Collection",
      description: "Transform your space with our latest furniture designs",
      image: "https://via.placeholder.com/800x400/ff6347/fff?text=Living+Room+Collection"
    },
    {
      title: "Luxury Sofa Sets",
      description: "Comfort meets elegance in our premium collection",
      image: "https://via.placeholder.com/800x400/4682b4/fff?text=Luxury+Sofa+Sets"
    },
    {
      title: "Special Offers",
      description: "Up to 40% off on selected items",
      image: "https://via.placeholder.com/800x400/32cd32/fff?text=Special+Offers"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    // GSAP fade-in effect when the slide changes
    gsap.fromTo(
      ".carousel-slide",
      { opacity: 0 }, // Initial opacity
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentSlide]);

  // Auto-play for the carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Main Slider */}
      <div className="relative h-[400px] w-full">
        <div
          className="carousel-slide absolute w-full h-full transition-opacity duration-1000"
          style={{ opacity: 0 }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Carousel;

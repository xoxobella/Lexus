/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'react-feather';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Verified Buyer",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      comment: "The quality of this furniture exceeded my expectations. The comfort level is amazing, and the customer service was outstanding throughout the entire process.",
      productBought: "Modern Leather Sofa",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Interior Designer",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      comment: "As an interior designer, I'm very particular about the furniture I recommend. This brand consistently delivers exceptional quality and style.",
      productBought: "Elegant Armchair",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emma Wilson",
      title: "Home Owner",
      rating: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      comment: "Beautiful design and very comfortable. The delivery was prompt and the assembly was straightforward. Highly recommend!",
      productBought: "Dining Set",
      date: "3 weeks ago"
    },
    // Add more testimonials...
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-50 py-16">
        <div className="w-full h-0.5 bg-gray-200 my-8 sm:my-12"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&lsquo;t just take our word for it. Hear what our valued customers have to say about their experience with our furniture.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-sm p-8 relative"
            >
              {/* <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-200" /> */}
              
              {/* Customer Info */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>

              {/* Product & Date */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Purchased: {testimonial.productBought}</span>
                <span>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Slider for Mobile */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-sm p-6 relative">
                    {/* <Quote className="absolute top-4 right-4 h-6 w-6 text-gray-200" /> */}
                    
                    {/* Customer Info */}
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-4 w-4 ${
                            index < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-600 text-sm mb-3">{testimonial.comment}</p>

                    {/* Product & Date */}
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Purchased: {testimonial.productBought}</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-4 bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View all reviews
            <ChevronRight className="h-5 w-5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
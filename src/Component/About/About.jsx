/* eslint-disable no-unused-vars */
import React from 'react';

const AboutUs = () => {
  const features = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      title: "Thoughtful design",
      description: "Clever, comfy furniture that you're proud to show off but not precious about using everyday."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
      title: "Everyday value",
      description: "Our direct-to-consumer model cuts out the middlemen, hidden costs and showroom expenses that charge you extra."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1609841644158-4c11986f0b11",
      title: "Effortless experiences",
      description: "Fast and flexible delivery, tool-free assembly and a 120 night risk-free trial."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
      title: "Designed with the world in mind",
      description: "Ethically made and designed to last. Every purchase helps save koalas and protect endangered Australian species and habitats."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">A little about us</h2>
        <button className="px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
          LEARN MORE
        </button>
      </div>

      {/* Mission Statement */}
      <div className="relative mb-8 sm:mb-16">
        <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9" 
            alt="Forest background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-4xl font-bold text-white max-w-lg mb-4">
              Our mission is to help plant and protect 2 billion trees in 10 years
            </h3>
            <p className="text-white max-w-2xl text-sm sm:text-base">
              We love creating habitats for all Aussies, including those of the furry persuasion. 
              Shockingly, 95% of koalas perished during the horrific 2019-20 bushfires, 
              so we&apos;ve partnered with not-for-profit organisation WWF-Australia with the aim of 
              regenerating the homes of this devastated population.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] w-full">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
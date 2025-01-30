/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Video from  '../../assets/videos/treevideo.mp4'
import image1 from '../../assets/image/about/About_sofa.jpg'
import image2 from '../../assets/image/about/deliveryman.jpg'
import image3 from '../../assets/image/about/similan-island.jpg'
import image4 from '../../assets/image/about/Comparison_Infographic.png'

const AboutUs = () => {
  const features = [
    {
      id: 1,
      image: (image1),
      title: "Thoughtful design",
      description: "Clever, comfy furniture that you're proud to show off but not precious about using everyday."
    },
    {
      id: 2,
      image:(image4),
      title: "Everyday value",
      description: "Our direct-to-consumer model cuts out the middlemen, hidden costs and showroom expenses that charge you extra."
    },
    {
      id: 3,
      image: (image2),
      title: "Effortless experiences",
      description: "Fast and flexible delivery, tool-free assembly and a 120 night risk-free trial."
    },
    {
      id: 4,
      image: (image3),
      title: "Designed with the world in mind",
      description: "Ethically made and designed to last. Every purchase helps save koalas and protect endangered Australian species and habitats."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
        <h8 className="text-4xl sm:text-5xl md:text-6xl text-secondary font-serif font-bold">A little about us</h8>
        <Link to="/aboutus" className="inline-block">
  <button className="px-6 py-2 border-2 border-black rounded-full hover:bg-primary hover:text-white transition-colors">
    LEARN MORE
  </button>
</Link>
      </div>

      {/* Mission Statement */}
      <div className="relative mb-8 sm:mb-16">
  <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden relative">
    <video
      src={Video} // Replace with your actual video path
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
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
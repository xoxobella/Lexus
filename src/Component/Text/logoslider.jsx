/* eslint-disable no-unused-vars */
import React from 'react';
import bazaar from '../../assets/logo/bazaar.png'
import urban from '../../assets/logo/urban.png'
import vogue from '../../assets/logo/vogue.png'
import zara from '../../assets/logo/zara.png'

const LogoSlider = () => {
    const logos = [
        {
          id: 1,
          name: 'FINERY29',
          image: [bazaar], // Replace with actual logo paths
          alt: 'Finery29 Logo'
        },
        {
          id: 2,
          name: 'URBAN LIST',
          image: [urban],
          alt: 'Urban List Logo'
        },
        {
          id: 3,
          name: 'VOGUE',
          image: [vogue],
          alt: 'Vogue Logo'
        },
        {
          id: 4,
          name: 'BAZAAR',
          image: [zara],
          alt: 'Bazaar Logo'
        }
      ];

  return (
    <div className="w-full bg-[#FAF9F8] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <span className="text-lg text-gray-600 font-medium">As seen in</span>
          <div className="ml-4 flex-grow border-t border-gray-200"></div>
        </div>

        {/* Animated Logo Slider */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-16 min-w-full">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="h-8 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-16 min-w-full">
              {logos.map((logo) => (
                <div
                  key={`${logo.id}-duplicate`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="h-8 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
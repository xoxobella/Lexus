/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import bazaar from '../../assets/logo/bazaar.png';
import urban from '../../assets/logo/urban.png';
import vogue from '../../assets/logo/vogue.png';
import zara from '../../assets/logo/zara.png';

const LogoSlider = () => {
  const logos = [
    { id: 1, name: 'FINERY29', image: bazaar, alt: 'Finery29 Logo' },
    { id: 2, name: 'URBAN LIST', image: urban, alt: 'Urban List Logo' },
    { id: 3, name: 'VOGUE', image: vogue, alt: 'Vogue Logo' },
    { id: 4, name: 'BAZAAR', image: zara, alt: 'Bazaar Logo' },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // Fade-in delay
  }, []);

  return (
    <div
      className={`w-full bg-[#FAF9F8] py-12 overflow-hidden transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <span className="text-lg text-gray-600 font-medium">As seen in</span>
          <div className="ml-4 flex-grow border-t border-gray-200"></div>
        </div>

        {/* Animated Logo Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-16 min-w-full animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
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

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LogoSlider;

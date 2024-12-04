/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from 'react-fast-marquee';

const Offers = () => {
  const offers = [
    "30% OFF on All Sofas",
    "Free Delivery on Orders Above $999",
    "New Collection Arrived",
    "Special Weekend Deal - Use Code: WEEKEND20",
    "Buy 2 Get 1 Free on All Cushions",
  ];

  return (
    <div className="bg-white text-tertiary py-2">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        <div className="flex space-x-8">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 mx-8"
            >
              <span className="text-sm font-medium">{offer}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Offers;

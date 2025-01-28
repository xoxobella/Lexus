/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Offers = () => {
  const offers = [
    "🎉 30% OFF on All Sofas",
    "🚚 Free Delivery on Orders Above $999",
    "🆕 New Collection Arrived",
    "💥 Special Weekend Deal - Use Code: WEEKEND20",
    "🛋️ Buy 2 Get 1 Free on All Cushions",
  ];

  // Detect when the component is in view
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-white text-black py-2 border-t border-b border-gray-200 shadow-sm"
    >
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className="flex space-x-8">
          {offers.map((offer, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-2 mx-8 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {offer}
            </motion.div>
          ))}
        </div>
      </Marquee>
    </motion.div>
  );
};

export default Offers;

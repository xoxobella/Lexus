import React from "react";
import { Truck, Calendar, Shield } from "react-feather";

const FeatureBar = () => {
  const features = [
    { icon: <Truck size={20} />, text: "Fast delivery" },
    { icon: <Calendar size={20} />, text: "120-night free trial" },
    { icon: <Shield size={20} />, text: "World-class warranty" },
  ];

  return (
    <div className="bg-gray-100 py-3 px-6 flex justify-center items-center gap-8 text-gray-800 text-sm">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4">
          {feature.icon}
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureBar;

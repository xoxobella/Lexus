// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bed from '../../assets/image/cate/Queen_Plus_Mattress_11_1.webp'
import bed_bases from '../../assets/image/cate/Kirribilli_Bed_Base_Queen_10_1.webp'
import sofa from '../../assets/image/cate/ModernSofa_ArvoStorm_3Seater_4_1.webp'
import sofa_bed from '../../assets/image/cate/CushyLuxe_Gumleaf_Queen_8_2.webp'

const categoriesData = [
  {
    name: "Mattresses",
    image: (bed),
    link: "/productpage",
  },
  {
    name: "Sofa Beds",
    image: (sofa_bed),
    link: "/productpage",
  },
  {
    name: "Bed Bases",
    image: (bed_bases),
    link: "/productpage",
  },
  {
    name: "Sofas",
    image: (sofa),
    link: "/productpage",
  },
];

const CategorySection = () => {
  const [categories] = useState(categoriesData);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
      <h2 className="text-4xl text-center sm:text-5xl md:text-6xl text-secondary font-serif font-bold">Categories</h2>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="bg-gray-100 p-6 rounded-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-medium">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

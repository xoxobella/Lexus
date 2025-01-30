// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from '../Component/Navbar/Navbar'
import Footer from "../Component/Footer/Footer";

import id1 from '../assets/sofa_bed/id_mattress.webp';
import id2 from '../assets/sofa_bed/id2_mattress.avif';
import id3 from '../assets/sofa_bed/id3_mattress.avif';
import id4 from '../assets/sofa_bed/id4_mattress.avif';

import sofa from '../assets/image/product/sofa.avif';
import id1_sofa from '../assets/sofa_bed/id1_sofa.webp';
import id2_sofa from '../assets/sofa_bed/id2_sofa.webp';


const products = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    price: 650.99,
    originalPrice: 799.99,
    rating: 4,
    reviews: 125,
    image: [id1],
    discount: 20,
    category: "Mattresses",
    featured: true,
  },
  {
    id: 2,
    name: "Wandana sofa bed",
    price: 1200,
    rating: 5,
    reviews: 89,
    image: [id2],
    category: "Mattresses",
    featured: true,
  },
  {
    id: 3,
    name: "Wandana sofa bed",
    price: 799,
    rating: 5,
    reviews: 89,
    image: [id3],
    category: "Mattresses",
    featured: true,
  },
  {
    id: 4,
    name: "Wandana sofa bed",
    price: 699,
    rating: 5,
    reviews: 89,
    image: [id4],
    category: "Mattresses",
    featured: true,
  },
  {
    id: 5,
    name: "Modern Leather Sofa",
    price: 999.99,
    originalPrice: 1299.99,
    rating: 4,
    reviews: 125,
    image: [sofa],
    discount: 20,
    category: "Sofas",
    featured: true,
  },
  {
    id: 6,
    name: "Elegant Sofa",
    price: 499.99,
    rating: 5,
    reviews: 89,
    image: [id1_sofa],
    category: "Sofas",
    featured: true,
  },
  {
    id: 7,
    name: "Wandana Leather Sofa",
    price: 499.99,
    rating: 5,
    reviews: 89,
    image: [id2_sofa],
    category: "Sofas",
    featured: true,
  },
];

const categories = ["Sofas", "Mattresses", "Chairs", "Tables"];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Sofas");
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl font-bold text-secondary font-serif text-left mb-6">
          Shop <br /> By Categories
        </h2>

        <div className="w-full h-0.5 bg-gray-200 my-8 sm:my-12"></div>
        <div className="flex justify-end space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition ${selectedCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 hover:bg-gray-300"
                }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category === selectedCategory)
            .map((product) => (
              <div
                key={product.id}
                className="relative border p-4 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-sm rounded-full">
                  {product.rating === 4.8 ? "Best Seller" : product.rating === 4.7 ? "Most Luxurious" : "Award-winning"}
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 font-bold">{product.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-gray-200 hover:text-gray-800 w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

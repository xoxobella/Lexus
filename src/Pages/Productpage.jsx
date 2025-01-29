// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from '../Component/Navbar/Navbar'
import Footer from "../Component/Footer/Footer";

const products = [
  {
    id: 1,
    name: "Koala Mattress",
    price: "$850",
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 2045,
    category: "Mattresses",
  },
  {
    id: 2,
    name: "Cushy Sofa Bed",
    price: "$1,390",
    image: "https://via.placeholder.com/200",
    rating: 4.7,
    reviews: 1673,
    category: "Sofas",
  },
  {
    id: 3,
    name: "Koala Plus Mattress",
    price: "$990",
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 628,
    category: "Mattresses",
  },
  {
    id: 4,
    name: "Koala Plus Mattress",
    price: "$990",
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 628,
    category: "Mattresses",
  },
  {
    id: 5,
    name: "Koala Plus Mattress",
    price: "$990",
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 628,
    category: "Mattresses",
  },
  {
    id: 6,
    name: "Koala Plus Mattress",
    price: "$990",
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 628,
    category: "Mattresses",
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

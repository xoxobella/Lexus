// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Modern Comfort Sofa",
    price: "$599.00",
    image: "https://via.placeholder.com/200",
    category: "Sofas",
  },
  {
    id: 2,
    name: "Classic Leather Sofa",
    price: "$799.00",
    image: "https://via.placeholder.com/200",
    category: "Sofas",
  },
  {
    id: 3,
    name: "Minimalist Fabric Sofa",
    price: "$699.00",
    image: "https://via.placeholder.com/200",
    category: "Sofas",
  },
  {
    id: 4,
    name: "Luxury Recliner Sofa",
    price: "$999.00",
    image: "https://via.placeholder.com/200",
    category: "Sofas",
  },
];

const categories = ["Sofas", "Chairs", "Tables", "Lights"];

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
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Shop By Categories</h2>
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
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
            <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 font-bold">{product.price}</p>
              <button
                className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 w-full"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
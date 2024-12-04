/* eslint-disable no-unused-vars */
'use client'
import React, { useState } from 'react';
import { StarIcon, ShoppingCartIcon, HeartIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const SingleProduct = () => {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('White');
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    name: "Modern Leather Sofa",
    price: 999.99,
    originalPrice: 1299.99,
    discount: 20,
    rating: 4,
    reviews: 125,
    description: "Experience ultimate comfort with our Modern Leather Sofa. Crafted with premium materials and designed for both style and durability, this sofa becomes the centerpiece of any living space.",
    colors: ['White', 'Black', 'Brown', 'Gray'],
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
      "https://images.unsplash.com/photo-1540638349517-3abd5afc5847",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    ],
    features: [
      "Premium leather upholstery",
      "Solid wood frame",
      "High-density foam cushions",
      "Modern design aesthetic",
    ],
    stock: 10,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[mainImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors
                  ${mainImage === index ? 'border-black' : 'border-transparent'}`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          {/* Product Title and Price */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4 flex items-center">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                  Save {product.discount}%
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`h-5 w-5 ${
                    index < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.reviews} reviews
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            {product.description}
          </p>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="mt-2 flex items-center space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 rounded-full border ${
                    selectedColor === color
                      ? 'border-black'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="mt-2 flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-md hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="px-3 py-1 border rounded-md hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart and Wishlist */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2">
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 border rounded-md hover:bg-gray-50"
            >
              <HeartIcon className={`h-6 w-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
            </button>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping Info */}
          <div className="border-t pt-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <TruckIcon className="h-5 w-5" />
              <span>Free shipping on orders over $999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct; 
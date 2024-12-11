/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ChevronLeft, Truck, Shield, Plus, Minus } from 'react-feather';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data - Replace with your actual data or API call
  const products = {
    1: {
      id: 1,
      name: "Modern Leather Sofa",
      price: 999.99,
      originalPrice: 1299.99,
      rating: 4,
      reviews: 125,
      discount: 20,
      description: "Experience ultimate comfort with our Modern Leather Sofa. Crafted with premium materials and designed for both style and durability.",
      colors: ['Black', 'Brown', 'White', 'Gray'],
      sizes: ['Small', 'Medium', 'Large'],
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
      specifications: {
        "Dimensions": "84\" W x 38\" D x 34\" H",
        "Weight": "120 lbs",
        "Material": "Top-grain leather",
        "Frame": "Kiln-dried hardwood",
        "Assembly": "Required",
      },
      stock: 10,
    },
    // Add more products...
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[mainImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  mainImage === index ? 'border-black' : 'border-transparent'
                }`}
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

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.reviews} reviews
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <>
                <span className="ml-2 text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-semibold">
                  Save {product.discount}%
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart and Wishlist */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 border rounded-md hover:bg-gray-50"
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </button>
          </div>

          {/* Specifications */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm text-gray-600">{key}</dt>
                  <dd className="text-sm font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping Info */}
          <div className="border-t pt-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Truck className="h-5 w-5" />
              <span>Free shipping on orders over $999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
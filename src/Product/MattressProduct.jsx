// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/CartActions.js';
import Navbar from '../Component/Navbar/Navbar.jsx';
import { ShoppingCart, ChevronLeft, Plus, Minus } from 'react-feather';

// Product images
import productImage1 from '../../src/assets/image/product/product1.webp';
import productImage2 from '../assets/image/product/image2.webp';
import productImage3 from '../../src/assets/image/product/image3.webp';
import productImage4 from '../../src/assets/image/product/image4.webp';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(0);

  // Example product data (replace with actual data from API or Redux store)
  const products = [
    {
      id: '1',
      name: 'jk',
      price: 99.99,
      originalPrice: 149.99,
      discount: 33,
      rating: 4,
      reviews: 25,
      description: 'This is a great product description.',
      images: [productImage1, productImage2, productImage3, productImage4],
      colors: ['Red', 'Blue', 'Green'],
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 10,
    },
    {
      id: '2',
      name: 'Mattress',
      price: 99.99,
      originalPrice: 149.99,
      discount: 33,
      rating: 4,
      reviews: 25,
      description: 'This is a great product description.',
      images: [productImage1, productImage2, productImage3, productImage4],
      colors: ['Red', 'Blue', 'Green'],
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 10,
    },
  ];

  // Find the product by ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-600">Product not found!</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleAddItem = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size.');
      return;
    }

    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };

    dispatch(addToCart(itemToAdd));
    alert('Item added to cart!');
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(product.id));
    alert('Item removed from cart!');
  };

  // Check if product is already in cart
  const isProductInCart = cartItems.some((item) => item.id === product.id);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button onClick={() => navigate('/')} className="flex items-center text-secondary hover:text-primary mb-8">
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img src={product.images[mainImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${mainImage === index ? 'border-black' : 'border-transparent'}`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>

            {/* Price */}
            <div className="flex items-center">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="ml-2 text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-semibold">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`px-4 py-2 border rounded-md ${selectedColor === color ? 'border-black' : 'border-gray-200'}`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'border-black' : 'border-gray-200'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Quantity</h3>
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

            {/* Add to Cart */}
            <button onClick={handleAddItem} className="w-full bg-primary text-white py-3 rounded-md">
              <ShoppingCart className="inline-block mr-2" />
              Add to Cart
            </button>

            {/* Remove from Cart */}
            {isProductInCart && (
              <button onClick={handleRemoveItem} className="w-full mt-4 text-red-600 hover:text-red-800">
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

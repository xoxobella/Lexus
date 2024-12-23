// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/CartActions.js'; // Import addToCart and removeFromCart actions
import Navbar from '../Component/Navbar/Navbar.jsx';
import { Star, ShoppingCart, Heart, ChevronLeft, Plus, Minus } from 'react-feather';

// Product images (example)
import prodcutimage1 from '../../src/assets/image/product/product1.webp';
import prodcutimage2 from '../assets/image/product/image2.webp';
import prodcutimage3 from '../../src/assets/image/product/image3.webp';
import prodcutimage4 from '../../src/assets/image/product/image4.webp';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems); // Get cart items from Redux state
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Example product data (replace with actual product data)
  const product = {
    id: '1',
    name: 'Product 1',
    price: 99.99,
    originalPrice: 149.99,
    discount: 33,
    rating: 4,
    reviews: 25,
    description: 'This is a great product description.',
    images: [prodcutimage1, prodcutimage2, prodcutimage3, prodcutimage4],
    colors: ['Red', 'Blue', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 10,
  };

  const handleAddItem = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size.');
      return;
    }

    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize,
    };

    console.log('Adding item to cart:', itemToAdd); // Log the item being added
    dispatch(addToCart(itemToAdd)); // Dispatch the action to add the item to the cart
    alert('Item added to cart!');
  };

  const handleRemoveItem = (itemId) => {
    console.log('Removing item from cart with ID:', itemId); // Log the item being removed
    dispatch(removeFromCart(itemId));  // Dispatch the action to remove the item from the cart
    alert('Item removed from cart!');
  };

  // Check if the current product is already in the cart
  const isProductInCart = cartItems.some(item => item.id === product.id);

  return (
    <>
      <Navbar />
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
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${mainImage === index ? 'border-black' : 'border-transparent'}`}
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
                      className={`h-5 w-5 ${index < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
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
                    className={`px-4 py-2 border rounded-md ${selectedColor === color ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-300'}`}
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
                    className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-300'}`}
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
              {/* Add to Cart Button */}
              <button
                onClick={handleAddItem}
                aria-label="Add to cart"
                className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                <span>Add to Cart</span>
              </button>

              {/* Favorite/Like Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                aria-label="Add to favorites"
                className={`p-2 border rounded-md ${isFavorite ? 'bg-red-100' : 'bg-gray-100'}`}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Remove from Cart Button */}
            {isProductInCart && (
              <button
                onClick={() => handleRemoveItem(product.id)}
                className="mt-4 text-red-600 hover:text-red-800"
              >
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

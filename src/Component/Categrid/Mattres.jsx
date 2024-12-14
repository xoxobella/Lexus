/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'react-feather';

const ProductSection = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');
    const scrollContainerRef = useRef(null);

    const categories = [
        { id: 'all', name: 'Featured' },
        { id: 'mattress', name: 'Mattress' },
        { id: 'hybrid', name: 'Hybrid mattresses' },
        { id: 'foam', name: 'Foam mattress' },
        { id: 'dual', name: 'Dual mattress' }
    ];

    const products = [
        {
            id: 1,
            name: "Modern Leather Sofa",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 4,
            reviews: 125,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            discount: 20,
            category: "sofa",
            featured: true,
        },
        {
            id: 2,
            name: "Modern Leather Sofa",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 4,
            reviews: 125,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            discount: 20,
            category: "sofa",
            featured: true,
        },
        {
            id: 3,
            name: "Modern Leather Sofa",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 4,
            reviews: 125,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            discount: 20,
            category: "sofa",
            featured: true,
        },
        {
            id: 4,
            name: "Modern Leather Sofa",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 4,
            reviews: 125,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            discount: 20,
            category: "sofa",
            featured: true,
        },
        {
            id: 5,
            name: "Modern Leather Sofa",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 4,
            reviews: 125,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            discount: 20,
            category: "sofa",
            featured: true,
        },
        {
            id: 6,
            name: "Modern Leather Sofa",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 4,
            reviews: 125,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            discount: 20,
            category: "sofa",
            featured: true,
        },
        {
            id: 7,
            name: "Modern Leather Sofa",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 4,
            reviews: 125,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            discount: 20,
            category: "sofa",
            featured: true,
        },
        // ... your existing products
    ];

    const scrollNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollContainerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollPrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -scrollContainerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const filteredProducts = products.filter(product =>
        activeCategory === 'all' ? true : product.category === activeCategory
    );

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className='text-4xl font-serif font-bold'>Mattres&lsquo;s</h1>
                <a href="#" className="text-gray-600 hover:underline">See All</a>
            </div>

            {/* Category Navigation */}
            <div className="relative mb-8">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors
                                ${activeCategory === category.id 
                                    ? 'bg-gray-700 text-white' 
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Carousel */}
            <div className="relative group">
                {/* Navigation Buttons */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <button
                        onClick={scrollPrev}
                        className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                </div>

                {/* Products */}
                <div
                    ref={scrollContainerRef}
                    className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="flex-none w-[300px] group"
                        >
                            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                                <div
                                    className="relative aspect-square cursor-pointer"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {product.discount && (
                                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                                            {product.discount}% OFF
                                        </div>
                                    )}
                                    <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                                        <Heart className="h-5 w-5 text-gray-600" />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <div className="text-sm text-gray-500 mb-1 capitalize">{product.category}</div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>

                                    <div className="flex items-center mb-2">
                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="ml-2 text-sm text-gray-500 line-through">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center mb-3">
                                        {[...Array(5)].map((_, index) => (
                                            <Star
                                                key={index}
                                                className={`h-4 w-4 ${
                                                    index < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                        <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                                    </div>

                                    <button className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md flex items-center justify-center space-x-2 transition-colors">
                                        <ShoppingCart className="h-5 w-5" />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    <button
                        onClick={scrollNext}
                        className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
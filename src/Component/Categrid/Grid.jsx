/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'react-feather';

const styles = {
    scrollContainer: {
        scrollBehavior: 'smooth',
        scrollSnapType: 'x mandatory',
        '-webkit-overflow-scrolling': 'touch'
    }
};

const ProductSection = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const scrollContainerRef = useRef(null);

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
            name: "Elegant Armchair",
            price: 499.99,
            rating: 5,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
            category: "chair",
            featured: true,
        },
        // Add more products...
    ];

    const featuredProducts = products.filter(product => product.featured);
    const filteredProducts = products.filter(product =>
        selectedCategory === 'all' ? true : product.category === selectedCategory
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            default:
                return 0;
        }
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === featuredProducts.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(timer);
    }, [featuredProducts.length]);

    return (
        <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Featured Products Carousel */}
            <div className="relative mb-12 overflow-hidden rounded-xl">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="w-full flex-shrink-0"
                        >
                            <div className="relative aspect-[21/9]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                                        <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
                                        <button
                                            onClick={() => navigate(`/product/${product.id}`)}
                                            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button
                    onClick={() => setCurrentSlide(prev => prev === 0 ? featuredProducts.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={() => setCurrentSlide(prev => prev === featuredProducts.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {featuredProducts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                currentSlide === index ? 'w-4 bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-200 my-8 sm:my-12"></div>

            <div className='my-8 text-center'>
                <h1 className='text-4xl font-serif font-bold'>Best Sellers</h1>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border rounded-md bg-white w-full sm:w-auto"
                >
                    <option value="all">All Categories</option>
                    <option value="sofa">Sofas</option>
                    <option value="chair">Chairs</option>
                    <option value="table">Tables</option>
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border rounded-md bg-white w-full sm:w-auto"
                >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                </select>
            </div>

            {/* Mobile Navigation */}
            <div className="relative">
                <div className="sm:hidden flex justify-between mb-4">
                    <button
                        onClick={scrollPrev}
                        className="bg-white shadow-md rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="bg-white shadow-md rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Product Grid */}
                <div
                    ref={scrollContainerRef}
                    className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible pb-4"
                    style={styles.scrollContainer}
                >
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-[80vw] sm:w-auto group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
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
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductSection;
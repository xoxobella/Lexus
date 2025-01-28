/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'react-feather';
import Select from "react-select";

import sofa from '../../assets/image/product/sofa.avif';
import mattres from '../../assets/image/product/Mattres.avif';

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
    const [selectedCategory, setSelectedCategory] = useState({ value: "all", label: "All Categories" });
    const [sortBy, setSortBy] = useState({ value: "featured", label: "Featured" });
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
            image: [sofa],
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
            image: [mattres],
            category: "chair",
            featured: true,
        },
    ];

    const featuredProducts = products.filter(product => product.featured);
    const filteredProducts = products.filter(product =>
        selectedCategory.value === 'all' ? true : product.category === selectedCategory.value
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy.value) {
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

    const categoryOptions = [
        { value: "all", label: "All Categories" },
        { value: "sofa", label: "Sofas" },
        { value: "chair", label: "Chairs" },
        { value: "table", label: "Tables" },
    ];

    const sortOptions = [
        { value: "featured", label: "Featured" },
        { value: "newest", label: "Newest" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
    ];
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--tw-color-primary') || "#6d9773";

    const customStyles = {
        control: (base) => ({
            ...base,
            borderColor: primaryColor,
            '&:hover': { borderColor: primaryColor },
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? primaryColor : "white",
            color: state.isFocused ? "white" : primaryColor,
        }),
    };
    

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === featuredProducts.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(timer);
    }, [featuredProducts.length]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="w-full h-0.5 bg-gray-200 my-8 sm:my-12"></div>

            <motion.div 
      initial={{ opacity: 0, x: 50 }} // Start from right & invisible
      animate={{ opacity: 1, x: 0 }} // Move to normal position & fade in
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      className='my-8 text-right sm:text-2xl'
    >
      <h1 className='text-6xl text-secondary font-serif font-bold'>
        Mattress <br /> Where Comfort Meets Recovery.
      </h1>
    </motion.div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                <Select
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    options={categoryOptions}
                    styles={customStyles}
                    className="w-full sm:w-60"
                    classNamePrefix="react-select"
                />

                <Select
                    value={sortBy}
                    onChange={setSortBy}
                    options={sortOptions}
                    styles={customStyles}
                    className="w-full sm:w-60"
                    classNamePrefix="react-select"
                />
            </div>

            {/* Product Grid */}
            <div ref={scrollContainerRef} className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible pb-4" style={styles.scrollContainer}>
                {sortedProducts.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-[80vw] sm:w-auto group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative aspect-square cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
                            <div className="flex items-center mb-3">
                                <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-primary hover:bg-gray-200 hover:text-gray-800 text-white py-2 rounded-md flex items-center justify-center space-x-2 transition-colors">
                                <ShoppingCart className="h-5 w-5" />
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;

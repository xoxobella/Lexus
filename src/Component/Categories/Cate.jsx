/* eslint-disable no-unused-vars */
import React from "react";

const categories = [
    { name: "Sofa", image: "https://au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=1500", alt: "Sofa Image" },
    { name: "Bed Bases", image: "https://au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=1500", alt: "Bed Image" },
    { name: "Mattress", image: "https://au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&width=1500", alt: "Mattress Image" },
    { name: "Sofa Bed", image: "https://au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&width=1500", alt: "Sofa Bed Image" },
];

const Categories = () => {
    return (
        <div className="bg-secondary">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={category.image}
                            alt={category.alt}
                            className="h-60 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <span className="text-tertiary text-lg font-bold">{category.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;

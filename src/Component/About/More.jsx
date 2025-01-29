/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import Graph from '../../assets/image/Comparison_Infographic.png'
import video1 from '../../assets/videos/c0d048a2bdbe4be3a9c48fb95d66e00d.HD-1080p-3.3Mbps-35399727.mp4'
import video2 from '../../assets/videos/f2a50770080048c4b2b9927c627a1f4d.HD-1080p-2.5Mbps-35399708.mp4'

const AboutSection = () => {
    const [isPlaying1, setIsPlaying1] = useState(true);
    const [isPlaying2, setIsPlaying2] = useState(true);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className="relative bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                        <div className="aspect-w-16 aspect-h-9">
                            <video
                                ref={videoRef1}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={video2} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    {/* First Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-6xl text-secondary sm:text-8xl font-bold">
                            Buy furniture worth keeping.
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Fast furniture creates more of fewer products, leading to issues with design
                            and quality standards, while maximizing wastage throughout the supply chain.
                            We feel this sector can be getting more for products that all must be
                            disposed of in a few years. We&lsquo;re changing that by designing and making
                            thoughtfully designed products efficiently, so you can get them for
                            the best price.
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Second Text Content */}
                    <div className="space-y-6 lg:order-2">
                        <h2 className="text-6xl text-secondary sm:text-8xl font-bold">
                            Down with Allen keys!
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We believe furniture should be stress free, the Allen key stands for
                            everything but. So along with 100% tool-free assembly we offer fast and
                            flexible delivery and a risk free 120 night trial with hassle free returns.
                        </p>
                    </div>

                    {/* Second Video */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-100 lg:order-1">
                        <div className="aspect-w-16 aspect-h-9">
                            <video
                                ref={videoRef2}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={video1} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-6xl text-secondary sm:text-8xl font-bold tracking-tight">
                            You can&lsquo;t<br />
                            afford dodgy furniture.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Don&lsquo;t pay extra for inefficient production and supply chains caused by
                            having too many products. Let alone the middlemen upcharges, warehousing
                            and showroom expenses of traditional retail. We cut out all hidden costs
                            and inefficiencies, so your money just pays for the best products in the
                            market at the best possible price.
                        </p>
                    </div>
                    <div className="bg-[#FAF9F8] p-8 rounded-xl relative">
                        {!imageLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black" />
                            </div>
                        )}
                        <img
                            src={Graph}
                            alt="Price comparison between Koala and Traditional furniture stores"
                            className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
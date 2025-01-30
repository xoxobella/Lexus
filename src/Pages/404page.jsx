import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Example() {
    return (
        <>
            <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    {/* 404 with a slight bounce animation */}
                    <motion.p
                        className="text-base font-semibold text-indigo-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.2 }}
                    >
                        404
                    </motion.p>

                    {/* Main heading with a fade-in effect */}
                    <motion.h1
                        className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl md:text-7xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        Page not found
                    </motion.h1>

                    {/* Subheading with a fade-in animation */}
                    <motion.p
                        className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    >
                        Sorry, we couldn’t find the page you’re looking for.
                    </motion.p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {/* Go back home button with hover animation */}
                        <Link to="/">
                            <motion.a
                                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-200 hover:text-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                Go back home
                            </motion.a>
                        </Link>

                        {/* Contact support link with hover effect */}
                        <motion.a
                            href="#"
                            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </motion.a>
                    </div>
                </div>
            </main>
        </>
    );
}

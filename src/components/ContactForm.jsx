import React from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const ContactForm = () => {
    return (
        <div>
            <Nav />
            <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">Contact Us</h1>
                <hr className="w-16 border-t-2 border-gray-300 mb-8" />
                <form className="w-full max-w-lg space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-1 text-sm sm:text-base">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 text-sm sm:text-base">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full border rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 text-sm sm:text-base">Message</label>
                        <textarea
                            placeholder="Enter your message"
                            className="w-full border rounded-lg p-3 h-40 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

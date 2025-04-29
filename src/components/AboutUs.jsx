export const AboutUs = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-20 py-12">
            <h1 className="text-2xl sm:text-3xl font-semibold text-center pt-20">About Us</h1>
            <hr className="my-6 border-gray-300" />
            <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 leading-relaxed">
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>

            <div className="py-12">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Our Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300">
                        <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Men's Clothing" className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium text-gray-800">Men's Clothing</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300">
                        <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium text-gray-800">Women's Clothing</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300">
                        <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelery" className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium text-gray-800">Jewelery</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300">
                        <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-medium text-gray-800">Electronics</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
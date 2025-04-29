import { useContext, useEffect, useState } from "react";
import { Context } from './../api/store/store';
import { AddToCart, FilterProductsByCategory, GetAllProducts } from "../api/action/action";
import { DataLoading } from "./DataLoading";
import { Link, useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";

export const Header = () => {
    const { state, dispatch } = useContext(Context);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            await GetAllProducts(dispatch);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = (category) => {
        setSelectedCategory(category);
        FilterProductsByCategory(category, dispatch);
    };
    const handleAddToCart = (item) => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Iltimos, avval tizimga kiring!"); 
            navigate("/login"); 
        } else {
            AddToCart(item, toast, dispatch); 
        }
    };

    return (
        <div>
            <div className="px-4 md:px-[100px] text-center mt-[90px]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold py-5">Latest Products</h1>
                <hr className="my-4" />
            </div>

            <div className="px-4 md:px-[100px] py-5">
                <div className="flex flex-wrap gap-4 justify-center">
                    <button onClick={() => handleFilter("all")} className={`border-2 border-black px-5 py-1 rounded-lg ${selectedCategory === "all" ? "bg-black text-white" : "bg-white text-black"}`}>
                        All
                    </button>
                    <button onClick={() => handleFilter("men's clothing")} className={`hover:bg-black hover:text-white border-2 border-black px-4 py-1 rounded-lg ${selectedCategory === "men's clothing" ? "bg-black text-white" : ""}`}>
                        Men's Clothing
                    </button>
                    <button onClick={() => handleFilter("women's clothing")} className={`hover:bg-black hover:text-white border-2 border-black px-4 py-1 rounded-lg ${selectedCategory === "women's clothing" ? "bg-black text-white" : ""}`}>
                        Women's Clothing
                    </button>
                    <button onClick={() => handleFilter("jewelery")} className={`hover:bg-black hover:text-white border-2 border-black px-4 py-1 rounded-lg ${selectedCategory === "jewelery" ? "bg-black text-white" : ""}`}>
                        Jewelry
                    </button>
                    <button onClick={() => handleFilter("electronics")} className={`hover:bg-black hover:text-white border-2 border-black px-4 py-1 rounded-lg ${selectedCategory === "electronics" ? "bg-black text-white" : ""}`}>
                        Electronics
                    </button>
                </div>
            </div>
            {state.isLoading && <DataLoading />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[20px] md:px-[50px] lg:px-[100px]">
                {state?.products?.map((item) => (
                    <div key={item?.id}>
                        <div className="mx-auto border rounded-lg p-4 shadow-md bg-white">
                            <img
                                src={item?.image}
                                alt="Product"
                                className="w-full h-64 object-contain mb-4"
                                loading="lazy"
                            />
                            <h2 className="text-lg md:text-xl font-semibold mb-2 line-clamp-1">
                                {item?.title}
                            </h2>
                            <p className="text-gray-700 text-sm md:text-base mb-4 line-clamp-2">
                                {item?.description}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-between">
                                <Link
                                    to={`/productinfo/${item?.id}`}
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 min-w-[130px]"
                                >
                                    Buy Now
                                </Link>
                                <button
                                    onClick={() => handleAddToCart(item)} // 🔥 token tekshiruvchi funksiya
                                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 min-w-[130px]"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

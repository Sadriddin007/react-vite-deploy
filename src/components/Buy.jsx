import { FaStar } from "react-icons/fa";
import { FilterProductsByCategory, GetSingleProduct } from "../api/action/action";
import { useContext, useEffect } from "react";
import { Context } from "../api/store/store";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";

export const Buy = ({ id }) => {
    const { state, dispatch } = useContext(Context);

    // Faqat mahsulotni olish
    useEffect(() => {
        GetSingleProduct(id, dispatch);
    }, [id]);

    // Mahsulot kelganidan so‘ng, shunga qarab related productlarni olish
    useEffect(() => {
        if (state?.singleProduct?.category) {
            FilterProductsByCategory(state.singleProduct.category, dispatch);
        }
    }, [state?.singleProduct?.category]);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-4 sm:px-10 md:px-[100px]">
                <div className="w-full md:w-1/2 pt-[100px] md:pt-[140px] flex justify-center">
                    <img
                        src={state?.singleProduct?.image}
                        alt="Product"
                        className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
                    />
                </div>
                <div className="md:w-1/2 px-4 sm:px-6 mb-16 mt-8 md:mt-0">
                    <p className="text-gray-500 text-xl sm:text-2xl md:text-3xl uppercase mb-2">
                        {state?.singleProduct?.category}
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">
                        {state?.singleProduct?.title}
                    </h1>
                    <div className="flex items-center text-lg sm:text-xl md:text-2xl text-gray-700 mb-4">
                        <span>{state?.singleProduct?.rating?.rate}</span>
                        <FaStar className="text-yellow-400 ml-2" />
                    </div>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4">
                        ${state?.singleProduct?.price}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl mb-6">
                        {state?.singleProduct?.description}
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
                            Add to Cart
                        </button>
                        <Link to='/card' className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Go to cart
                        </Link>
                    </div>
                </div>
            </div>
            <h1 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl pl-4 sm:pl-6 md:pl-10 lg:pl-[100px]">You may also like</h1>


            <Marquee speed={50} pauseOnHover={true} className="gap-[20px] px-[20px] py-10">
                {state?.products?.map((item) => (
                    <div key={item?.id} className="w-[280px] border rounded-lg p-4 shadow-md bg-white mx-2 flex-shrink-0">
                        <img
                            src={item?.image}
                            alt="Product"
                            className="w-full h-48 object-contain mb-4"
                            loading="lazy"
                        />
                        <h2 className="text-md md:text-lg font-semibold mb-2 line-clamp-1">
                            {item?.title}
                        </h2>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                            {item?.description}
                        </p>
                        <div className="flex gap-2">
                            <Link to={`/productinfo/${item?.id}`} className="flex-1 bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800 text-center text-sm">
                                Buy Now
                            </Link>
                            <button className="flex-1 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 text-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </Marquee>
        </>
    );
};

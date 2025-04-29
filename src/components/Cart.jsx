import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Context } from "../api/store/store";
import { Link, useNavigate } from "react-router-dom"; // <-- BU juda muhim
import { DecreamentQuantity, DeleteToCart, IncreamentQuantity } from "../api/action/action";
import { toast } from "react-toastify";


export const Cart = () => {
    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate() // <-- navigate hook

    const totalSum = state.cart.reduce((acc, curVal) => acc + curVal.qty * curVal.price, 0)

    return (
        <div className="p-4 px-[100px] mx-auto mt-[100px]">
            <h1 className="text-4xl font-medium text-center mb-6">Cart</h1>
            <hr className="pb-[60px]" />

            {state.cart.length === 0 ? (
                <div className="text-center py-[100px]">
                    <div className="text-[30px] font-semibold pb-[30px]">Cartga qo'shilgan productlar yo'q
                    </div>
                    <Link to="/" className="underline text-[20px] font-normal">Mahsulot tanlash</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-white p-[48px] rounded-2xl shadow">
                        <div className="flex justify-between pb-[48px]">
                            <h2 className="text-4xl font-bold mb-4">Shopping Cart</h2>
                            <h1>{state.cart.length} items</h1>
                        </div>

                        {state.cart.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 border-t pt-4 mb-4 border-2 p-[30px] rounded-lg justify-between">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[100px] h-[140px] object-cover rounded-lg"
                                />
                                <div className="">
                                    <h3
                                        className="text-lg font-medium text-gray-500 line-clamp-1 cursor-pointer hover:text-blue-500"
                                        onClick={() => navigate("/")} // <-- Title bosilganda home page
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-sm font-medium line-clamp-2 cursor-pointer hover:text-blue-500"
                                        onClick={() => navigate("/")} // <-- Description bosilganda home page
                                    >
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex items-center mt-2 gap-2">
                                    <button disabled={item.qty === 0} onClick={() => DecreamentQuantity(item.id, dispatch)} className="px-2 py-1 border rounded text-blue-600">-</button>
                                    <button className="px-2 py-1 border rounded">{item.qty}</button>
                                    <button onClick={() => IncreamentQuantity(item.id, dispatch)} className="px-2 py-1 border rounded text-blue-600">+</button>
                                </div>
                                <div className="text-lg font-semibold">${Number(item.qty * item.price).toFixed(2)}</div>
                                <button onClick={() => DeleteToCart(item.id, toast, dispatch)} className=" font-semibold text-xl px-[12px] py-1 rounded-lg border-2 border-black hover:bg-black hover:text-white">
                                    <FaTimes />
                                </button>
                            </div>
                        ))}

                        <div className="mt-6 text-lg">
                            <Link to="/" className="underline">
                                &larr; Back to shop
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow">
                        <h2 className="text-xl mb-4">Order Summary</h2>
                        <hr />
                        <div className="flex justify-between mb-2 text-lg">
                            <span>Products ({state.cart.length})</span>
                            <span>${Number(totalSum).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2 text-lg">
                            <span>Shipping</span>
                            <span>$20</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2 ">
                            <span>Total amount</span>
                            <span>${Number(totalSum + 20).toFixed(2)}</span>
                        </div>
                        <button className="border-black border-2 bg-black text-white rounded-lg p-2 text-xl mt-4 hover:bg-slate-700">Go to checkout</button>
                    </div>
                </div>
            )}
        </div>
    )
}

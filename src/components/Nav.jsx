import { useContext, useEffect, useState } from 'react';
import { FaUser, FaUserPlus, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router'; 
import { Context } from '../api/store/store';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { state, dispatch } = useContext(Context);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);

        if (!storedToken) {
            navigate('/register'); // token yo'q bo'lsa register sahifasiga redirect
        }
    }, [navigate]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-50 z-50 flex items-center justify-between px-6 md:px-[101px] py-4 shadow">
            <div className="text-xl md:text-2xl font-bold text-black">
                <Link to="/">My Ecommerce</Link>
            </div>
            <div className="md:hidden text-2xl" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className="hidden md:flex space-x-6 text-gray-700 text-lg">
                <Link to="/" className="hover:text-black">Home</Link>
                <Link to="/product" className="hover:text-black">Products</Link>
                <Link to="/about" className="hover:text-black">About</Link>
                <Link to="/contact" className="hover:text-black">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                {token ? (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl">
                        <FaUser />
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-100">
                            <FaUser className="mr-2" /> Login
                        </Link>
                        <Link to="/register" className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-100">
                            <FaUserPlus className="mr-2" /> Register
                        </Link>
                    </>
                )}
                <Link to="/card" className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-100">
                    <FaShoppingCart className="mr-2" /> Cart <span className="ml-1">{state?.cart.length}</span>
                </Link>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden shadow-md">
                    <Link to="/" className="hover:text-black w-full" onClick={toggleMenu}>Home</Link>
                    <Link to="/product" className="hover:text-black w-full" onClick={toggleMenu}>Products</Link>
                    <Link to="/about" className="hover:text-black w-full" onClick={toggleMenu}>About</Link>
                    <Link to="/contact" className="hover:text-black w-full" onClick={toggleMenu}>Contact</Link>

                    {token ? (
                        <div className="flex items-center w-full" onClick={toggleMenu}>
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl">
                                <FaUser />
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="flex items-center w-full" onClick={toggleMenu}>
                                <FaUser className="mr-2" /> Login
                            </Link>
                            <Link to="/register" className="flex items-center w-full" onClick={toggleMenu}>
                                <FaUserPlus className="mr-2" /> Register
                            </Link>
                        </>
                    )}

                    <Link to="/card" className="flex items-center w-full" onClick={toggleMenu}>
                        <FaShoppingCart className="mr-2" /> Cart <span className="ml-1">{state?.cart.length}</span>
                    </Link>
                </div>
            )}
        </nav>
    );
};

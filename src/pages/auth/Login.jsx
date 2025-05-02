import { useContext } from "react";
import { Context } from "../../api/store/store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginAction } from "../../api/action/action";

export const Login = () => {
    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleRegisterRedirect = () => {
        navigate('/register', { replace: true }); // 🔁 tarixni almashtiradi
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            phone: event.target.phone.value,
            password: event.target.password.value,
        };

        await LoginAction(formData, navigate, toast, dispatch);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-center">Login</h2>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </button>

                <p className="text-sm text-center text-gray-500">
                    Don't have an account?{" "}
                    <button onClick={handleRegisterRedirect} className="text-blue-600 hover:underline">
                        Register
                    </button>
                </p>
            </form>
        </div>
    );
};

import { useContext } from "react";
import { Context } from './../../api/store/store';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { RegisterAction } from "../../api/action/action";

export const Register = () => {
    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
            gender: "male",
            birthday: "2004-02-28",
            avatar: "default.png",
            region: "Toshkent",
            district: "Mirzo Ulug'bek",
            regKey: "ask-from-developer"
        };
        await RegisterAction(formData, toast, navigate, dispatch);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-center">Register</h2>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

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
                        placeholder="Create a strong password"
                        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Register
                </button>

                <p className="text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-green-600 hover:underline">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
};

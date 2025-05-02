import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export const Product = () => {
    return (
        <div>
            <Nav />
            <div className="mt-[90px]"><Header /></div>
            <Footer />
        </div>
    );
};
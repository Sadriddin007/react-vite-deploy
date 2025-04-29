import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Hero } from './../components/Hero';

export const Home = () => {

    return (
        <div>
            <Nav />
            <Hero/>
            <Header/>
            <Footer/>
        </div>
    );
};

import { useParams } from "react-router"
import { Buy } from "../components/Buy"
import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"

export const ProductInfo = () => {
    const { id } = useParams()
    return (
        <div>
            <Nav />
            <Buy id={id} />
            <Footer />
        </div>
    )
}
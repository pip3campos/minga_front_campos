import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Main ({ children }) {
    return (
        <>
        <NavBar />
        { children }
        <Footer />
        </>
    )
}
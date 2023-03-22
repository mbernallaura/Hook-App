import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            {/* Link= es un <a href=""/>, pero sin el refresh que hace este a */}
            {/* la etiqueta <a href=""/>, se utilizaria mejor para ir a paginas externas */}
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/login"}>Login</Link>
        </>
    )
}

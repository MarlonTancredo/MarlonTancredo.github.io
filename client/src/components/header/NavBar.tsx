import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <ul className="navbar__container">
                <li className="navbar__item">
                    <NavLink
                        to="/"
                        className="navbar__link"
                        style={pathname === "/" ? { color: "red" } : { color: "black" }}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/misdemeanours"
                        className="navbar__link"
                        style={pathname === "/misdemeanours" ? { color: "red" } : { color: "black" }}
                    >
                        Misdemeanours
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/confess-to-us"
                        className="navbar__link"
                        style={pathname === "/confess-to-us" ? { color: "red" } : { color: "black" }}
                    >
                        Confess to us
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default NavBar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = {
    isHomeActive: false,
    isMisdemeanoursActive: false,
    isConfessActive: false,
};

const NavBar = () => {
    const [isActive, setisActive] = useState(links);

    const handleHome = () => {
        setisActive({ ...links, isHomeActive: true });
    };

    const handleMisdemeanours = () => {
        setisActive({ ...links, isMisdemeanoursActive: true });
    };

    const handleConfess = () => {
        setisActive({ ...links, isConfessActive: true });
    };

    return (
        <>
            <ul className="navbar__container">
                <li className="navbar__item">
                    <NavLink
                        to="/"
                        className="navbar__link"
                        onClick={handleHome}
                        style={isActive.isHomeActive ? { color: "red" } : { color: "black" }}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/misdemeanours"
                        className="navbar__link"
                        onClick={handleMisdemeanours}
                        style={isActive.isMisdemeanoursActive ? { color: "red" } : { color: "black" }}
                    >
                        Misdemeanours
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/confess-to-us"
                        className="navbar__link"
                        onClick={handleConfess}
                        style={isActive.isConfessActive ? { color: "red" } : { color: "black" }}
                    >
                        Confess to us
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default NavBar;

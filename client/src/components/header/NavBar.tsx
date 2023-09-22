import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <>
            <ul className="navbar__container">
                <li className="navbar__item"><NavLink to="/" className="navbar__link">Home</NavLink></li>
                <li className="navbar__item"><NavLink to="/misdemeanours" className="navbar__link">Misdemeanours</NavLink></li>
                <li className="navbar__item"><NavLink to="/confess-to-us" className="navbar__link">Confess to us</NavLink></li>
            </ul >
        </>
    )
}

export default NavBar
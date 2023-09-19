import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/misdemeanours">Misdemeanours</NavLink></li>
                <li><NavLink to="/Confess-to-us">Confess to us</NavLink></li>
            </ul>
        </>
    )
}

export default NavBar
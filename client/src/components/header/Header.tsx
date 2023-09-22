import Title from "./Title"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <header style={{ display: "flex", border: "1px solid black", alignItems: "center", justifyContent: "center" }} >
            <Title />
            <NavBar />
        </header >
    )
}

export default Header
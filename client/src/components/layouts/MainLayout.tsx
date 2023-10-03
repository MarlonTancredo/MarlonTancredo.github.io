import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    width: "80vw",
                }}
            >
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;

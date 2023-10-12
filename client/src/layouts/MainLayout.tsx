import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { UserContextProvider } from "../providers/UserContextProvider";

const MainLayout = () => {
    return (
        <UserContextProvider>
            <div>
                <Header />
                <main
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Outlet />
                </main>
                <Footer />
            </div>
        </UserContextProvider>
    );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { UserContextProvider } from "../UserContextProvider";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "60vh",
                    width: "80vw",
                }}
            >
                <UserContextProvider key={null} type={""} props={undefined}>
                    <Outlet />
                </UserContextProvider>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

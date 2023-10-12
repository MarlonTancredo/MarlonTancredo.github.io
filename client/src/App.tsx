import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import "./App.css";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import MarketPlace from "./pages/MarketPlace";
import TechnicalTraining from "./pages/TechnicalTraining";
import Tutorial from "./pages/Tutorials";
import Contact from "./pages/Contact";

function App() {
    useEffect(() => {
        // console.log("hel");
    }, []);
    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: (
    //       <div>
    //         <Navbar />

    //         <Outlet />
    //       </div>
    //     ),

    //     children: [
    //       {
    //         path: "",
    //         element: <Home />,
    //       },
    //       {
    //         path: "/test",
    //         element: <div> test field</div>,
    //       },
    //     ],
    //   },
    // ]);

    //chekc
    return (
        <div>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/market-place" element={<MarketPlace />} />
                    <Route
                        path="/technical-traning"
                        element={<TechnicalTraining />}
                    />
                    <Route path="/tutorials" element={<Tutorial />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

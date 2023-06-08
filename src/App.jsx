import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import MarketPlace from "./pages/MarketPlace";
import TechnicalTraining from "./pages/TechnicalTraining";
import Tutorial from "./pages/Tutorials";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import Skills from "./pages/Skills";
import OnlineStore from "./pages/OnlineStore";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/about" element={<About />} />
          {/* <Route path="" element={<Contact />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:course" element={<CourseList />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/online" element={<OnlineStore />} />
          <Route path="/course/detail/:id" element={<CourseDetail />} />
          <Route path="" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/technical-traning" element={<TechnicalTraining />} />
          <Route path="/tutorials" element={<Tutorial />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

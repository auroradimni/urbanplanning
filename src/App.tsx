import VideoBg from "./VideoBg";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import logo from "./assets/logo.png";
import Modal from "./components/ModalProps";

function App() {
  return (
    <Router>
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <VideoBg />
      </div>

      <div className="fixed top-4 right-4 z-50">
        <img
          src={logo}
          alt="Urban Visionary Logo"
          className="h-24 pointer-events-auto"
        />
      </div>

      <div className="flex w-full h-screen ">
        <div className="w-full h-full "></div>

        <div className="content  p-10 items-center justify-center h-screen z-30  flex flex-col  absolute right-0 left-0">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route
              path="/modal"
              element={
                <Modal
                  isOpen={true}
                  onClose={() => {}}
                  project={{
                    title: "Project Title",
                    description: "Project Description",
                    images: [],
                    videos: [],
                  }}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  if (location.pathname === "/about" || location.pathname === "/contacts") {
    return null;
  }

  return (
    <nav
      className={`font-serif text-2xl z-40 flex flex-col absolute right-20 p-4 text-center ${
        location.pathname === "/projects" ? "hidden" : ""
      }`}
    >
      <ul className="space-y-20">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/about">Who are we?</Link>
        </li>
        <li>
          <Link to="/contacts">Reach with us</Link>
        </li>
        <li className="">
          <Link to="/projects">Our experience</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;

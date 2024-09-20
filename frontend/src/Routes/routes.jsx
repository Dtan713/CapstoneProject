import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";

function Navigation() {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Login">Login</Link>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} /> {/* Add a NotFound component if desired */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
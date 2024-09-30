import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./Pages/Login";
import Wheel from "./Pages/Wheel";
import NavBar from "./Navbar/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";
import Register from "./Pages/Register";
import Plans from "./Pages/Plans";
import EditPlan from "./Pages/EditPlan";
import Restaurant from "./Pages/Restaurants";

const backgrounds = {
  "/Wheel": {
    image:
      'url("https://img.freepik.com/premium-vector/vector-abstract-technology-background-dark-blue-background-with-blue-gear-wheels-various-cogwheels_250169-181.jpg")',
  },
  "/about": {
    image:
      'url("https://img.freepik.com/free-photo/bowl-mozzarella-balls-with-tomato-sauce-garlic-pasta-turquoise-background_23-2147922791.jpg")',
  },
  "/contact": {
    image:
      'url("https://img.freepik.com/premium-photo/food-background-with-sea-fish-blue_128650-1312.jpg")',
  },
  "/login": {
    image:
      'url("https://img.freepik.com/premium-photo/breakfast-buffet-bliss_1254967-49247.jpg")',
  },
  "/plans": {
    image:
      'url("https://cdn-proxy.slickplan.com/imgs/bg/note.webp")',
  },
  "/restaurants": {
    image:
      'url("https://static.vecteezy.com/system/resources/previews/004/870/602/non_2x/fast-food-modern-banners-set-labels-background-fast-food-template-frame-and-page-design-for-menu-design-modern-style-with-art-fast-food-icons-on-blue-color-background-illustration-free-vector.jpg")',
  },
  
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();
  const { image } = backgrounds[location.pathname] || {
    image: 'url("fallback-image-url")',
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: image,
        backgroundSize: "cover", // Make the background cover the whole div
        backgroundPosition: "center", // Center the image
        minHeight: "200vh", // Ensure the div takes full viewport height
      }}
    >
      <NavBar />
      <header className="text-black text-center p-8 bg-opacity-70">
        {/* Optional header content */}
      </header>
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/edit/:id" element={<EditPlan />} />
          <Route path="/wheel" element={<Wheel/>} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/plans" element={<Plans />} />
          <Route path="/plans/edit/:id" element={<EditPlan />} /> */}
          {/* <Route path="/restaurants" element={<Restaurant />} /> */}
          <Route path="/" element={<Navigate to="/about" />} />
        </Routes>
      </main>
      <footer className="text-yellow text-center p-4">
        <p className="font-bold text-lg">&copy; 2024 Heads or Tails</p>
      </footer>
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

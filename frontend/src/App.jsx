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
import NavBar from "./NavBar/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";
import SignUp from "./Pages/SignUp";  // Using absolute path
import Plans from "./Pages/Plans";
import EditPlan from "./Pages/EditPlan";
import Restaurant from "./Pages/Restaurants";

const backgrounds = {
  "/Wheel": {
    image:
      'url("https://static.vecteezy.com/system/resources/previews/000/583/718/original/abstract-cogs-wheel-background-vector.jpg")',
  },
  "/about": {
    image:
      'url("https://w0.peakpx.com/wallpaper/437/888/HD-wallpaper-the-magic-of-books-pages-reading-books-magic-blue-light.jpg")',
  },
  "/contact": {
    image:
      'url("https://st4.depositphotos.com/1008648/19637/i/450/depositphotos_196370936-stock-photo-big-contact-icons-bright-colorful.jpg")',
  },
  "/login": {
    image:
      'url("https://t4.ftcdn.net/jpg/02/76/25/21/360_F_276252107_rdV920MHGAdDfo49nJUcEoABp37xNak5.jpg")',
  },
  "/plans": {
    image:
      'url("https://media.istockphoto.com/id/1366763859/vector/floor-plan-of-house-on-blackboard-background-with-shadows.jpg?s=612x612&w=0&k=20&c=btU143_75FbwKFsoVXkni0evyfyLO1vgfUex6eS3z4g=")',
  },
  "/restaurants": {
    image:
      'url("https://img.freepik.com/premium-photo/fast-food-restaurant-background_1015293-45777.jpg")',
  },
  
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();
  const { image } = backgrounds[location.pathname] || {
    image: 'url("https://static.vecteezy.com/system/resources/previews/000/583/718/original/abstract-cogs-wheel-background-vector.jpg")',
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
          <Route path="/signup" element={<SignUp />} />  // Updated route
          <Route path="/login" element={<Login />} />
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
        <p className="font-bold text bg-yellow-300 text-lg">&copy; 2024 Heads or Tails</p>
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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Restaurant.css"; // Create a CSS file for styling

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch restaurant data from the API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8080/restaurants");
        setRestaurants(response.data); // Assuming API response is an array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const handleAddClick = (restaurant) => {
    // Navigate to the plans page with the selected restaurant
    navigate("/plans", { state: { restaurant }}); // Pass the restaurant data
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="restaurant-cards-container">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <h3 style={{ color: 'yellow', fontWeight: 'bold' }}>{restaurant.name}</h3> {/* Bold and yellow font */}
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="restaurant-card-image"
          />
          <p>
            <strong>Specialty:</strong> {restaurant.specialty}
          </p>
          <p>
            <strong>Address:</strong> {restaurant.address}
          </p>
          <p>{restaurant.description}</p>
          <button onClick={() => handleAddClick(restaurant)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default Restaurant;
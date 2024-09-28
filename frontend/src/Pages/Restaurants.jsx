import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Restaurant.css"; // Create a CSS file for styling

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <h3>{restaurant.name}</h3>
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
        </div>
      ))}
    </div>
  );
}

export default Restaurant;

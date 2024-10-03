import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Plans.css";
import { useNavigate } from "react-router-dom";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  let navigate = useNavigate();

  // Fetching plans from local storage and setting initial state
  useEffect(() => {
    const fetchPlans = () => {
      const storedPlans = JSON.parse(localStorage.getItem("plans")) || [];
      setPlans(storedPlans);
      setLoading(false);
    };

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/plans/users/1/restaurants"
        );
        setRestaurants(response.data); // Assuming API response is an array of restaurants
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlans();
    fetchRestaurants();
  }, []);

  const handleDelete = async (planId) => { 
    console.log("Attempting to delete plan with ID:", planId); // Corrected logging
    if (!planId) {
        console.error("No planId provided for deletion.");
        return; // Exit the function early
    }
    
    try {
      await axios.delete(`http://localhost:8080/plans/plan/delete/${planId}`);
      const updatedPlans = plans.filter((plan) => plan.id !== planId); // Ensure type consistency
      setPlans(updatedPlans);
      localStorage.setItem("plans", JSON.stringify(updatedPlans)); // Update local storage
      console.log("Plan deleted successfully:", planId);
    } catch (error) {
      console.error("Error deleting plan:", error);
      // Optional: Add user feedback here
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(plans);
  
  return (
    <div className="restaurant-cards-container">
      {plans.map((plan) => (
        <div key={plan.id} className="restaurant-card">
          <h3 style={{ color: 'yellow', fontWeight: 'bold' }}>{plan.name}</h3>
          <img
            src={plan.image}
            alt={plan.name}
            className="restaurant-card-image"
          />
          <p>
            <strong>Specialty:</strong> {plan.specialty}
          </p>
          <p>
            <strong>Address:</strong> {plan.address}
          </p>
          <p>{plan.description}</p>
          <div className="card-actions">
            <button
              className="edit-button"
              onClick={() => navigate(`/plans/edit/${plan.id}`)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(plan.id)} // Ensure you're using plan.id
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Plans;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Plans.css"; // Updated CSS file
import { useNavigate } from "react-router-dom";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
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

    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://localhost:8080/plans/user/1");
        setPlans(response.data); // Assuming API response is an array
      } catch (err) {
        setError(err.message);
      }
    };

    Promise.all([fetchRestaurants(), fetchPlans()])
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (planId) => {
    try {
      await axios.delete(`http://localhost:8080/plans/delete/${planId}`);
      setPlans(plans.filter((plan) => plan.id !== planId));
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="plan-cards-container">
      {plans.map((plan, i) => (
        <div key={plan.id} className="plan-card">
          <h3>{restaurants[i]?.name}</h3>
          <h4>{restaurants[i]?.address}</h4>
          <img src={restaurants[i]?.image} className="plan-card-image" alt={restaurants[i]?.name} />
          <p>
            <strong>Planned Date:</strong> {plan.plannedDate}
          </p>
          <p>
            <strong>Notes:</strong> {plan.notes}
          </p>
          <p>
            <strong>Visited:</strong> {plan.visited ? "Yes" : "No"}
          </p>
          <div className="card-actions">
            <button
              className="edit-button"
              onClick={() => navigate(`/plans/edit/${plan.id}`)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(plan.id)}
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
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
  // Fetch data from the API
  //   useEffect(() => {
  //     const fetchPlans = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:8080/plans/user/1");
  //         setPlans(response.data); // Assuming API response is an array
  //         setLoading(false);
  //         console.log(plans);
  //       } catch (err) {
  //         setError(err.message);
  //         setLoading(false);
  //       }
  //     };
  //     fetchPlans();
  //   }, []);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/plans/users/1/restaurants"
        );
        setRestaurants(response.data); // Assuming API response is an array of restaurants
        setLoading(false);
        console.log(restaurants);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://localhost:8080/plans/user/1");
        setPlans(response.data); // Assuming API response is an array
        setLoading(false);
        console.log(plans);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRestaurants().then(() => {
      fetchPlans();
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
          <h3>{restaurants[i].name}</h3>
          <h4>{restaurants[i].address}</h4>
          <img src={restaurants[i].image} className="plan-card-image" />
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

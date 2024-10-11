import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Plans.css";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const userId = localStorage.getItem("userid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user plans first
        const plansResponse = await axios.get(`http://localhost:8080/plans/user/${userId}`);
        const userPlans = plansResponse.data;
        

        // Fetch restaurants that user has plans for
        const restaurantIds = userPlans.map(plan => plan.restaurantId);
        const restaurantsResponse = await axios.get(`http://localhost:8080/restaurants?ids=${restaurantIds.join(",")}`);
        const restaurants = restaurantsResponse.data;

        // Combine plan and restaurant data
        const combinedPlans = userPlans.map(plan => {
          const restaurant = restaurants.find(r => r.id === plan.restaurantId);
          return {
            ...plan,
            name: restaurant?.name,
            image: restaurant?.image,
            specialty: restaurant?.specialty,
            address: restaurant?.address,
            description: restaurant?.description
          };
        });

        setPlans(userPlans);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
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

  const navigateToEdit = (planId, restaurantId) => {  
    console.log("Navigating to edit plan with ID:", restaurantId);
    localStorage.setItem("restaurantId", restaurantId);
    navigate(`/plans/edit/${planId}`);
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  console.log("Plans:", plans);
  // console.log("Restaurants:", JSON.stringify(plans));

  return (
    <div className="restaurant-cards-container">
      <h1>Your Planned Visits</h1>
      {plans.length === 0 ? (
        <p>No planned visits found.</p>
      ) : (
        plans.map((plan) => (
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
            <p>
              <strong>Planned Date:</strong> {plan.plannedDate}
            </p>
            <p>{plan.description}</p>
            <p>
              <strong>Notes:</strong> {plan.notes}
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
        ))
      )}
    </div>
  );
}

export default Plans;

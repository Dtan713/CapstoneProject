import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Restaurant.css"; 

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const [userId, setUserId] = useState(1);//change this later 
  const [plans, setPlans] = useState([]); // To hold plans

  // Fetch restaurant data from the API
  useEffect(() => {
    setUserId(localStorage.getItem("userid"));
    
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8080/restaurants");
        setRestaurants(response.data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    const fetchPlans = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/plans/user/${userId}`);
        setPlans(response.data);
      } catch (err) {
        console.error("Error fetching plans:", err);
      }
    };

    fetchRestaurants();
    fetchPlans();
  }, [userId]);

  const handleAddClick = (restaurant) => {
    console.log("Adding plan for restaurant:", restaurant);
    const { id, address, description,image } = restaurant;
    const addPlan = async () => {
      try {
        const response = await axios.post(`http://localhost:8080/plans/add/${userId}/${restaurant.id}`, {
          userId: userId,
          restaurantId: restaurant.id,
          plannedDate: "test",
          address: address,
          description: description,
          image: image,
          notes: "test",
          visited: false
        });
        
        // Update local state with the new plan
        setPlans((prevPlans) => [...prevPlans, response.data]); // Update state
      } catch (error) {
        console.error("Error adding plan:", error);
      }
    };
    
    addPlan();
    navigate("/plans");
  };

  const handleDeletePlan = async (planId) => {
    try {
      await axios.delete(`http://localhost:8080/plans/delete/${planId}`);
      // Remove the deleted plan from local state
      setPlans((prevPlans) => prevPlans.filter(plan => plan.id !== planId));
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  const handleUpdatePlan = async (planId, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:8080/plans/update/${planId}`, updatedData);
      setPlans((prevPlans) => prevPlans.map(plan => (plan.id === planId ? response.data : plan)));
    } catch (error) {
      console.error("Error updating plan:", error);
    }
  };

  return (
    <div className="restaurant-cards-container">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <h3 style={{ color: 'yellow', fontWeight: 'bold' }}>{restaurant.name}</h3>
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
          
          {/* Display user plans for this restaurant */}
          <h4>My Planned Visits:</h4>
          <ul>
            {plans
              .filter(plan => plan.restaurant_id === restaurant.id)
              .map(plan => (
                <li key={plan.id}>
                  {plan.title} on {plan.plannedDate} {plan.visited ? "(Visited)" : "(Not Visited)"}
                  <button onClick={() => handleDeletePlan(plan.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
                    Delete
                  </button>
                  {/* Add more controls for updating, e.g., a modal or form to edit */}
                </li>
              ))}
          </ul>

          <button onClick={() => handleAddClick(restaurant)} style={{ backgroundColor: 'orange', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Add to Plans
          </button>
        </div>
      ))}
    </div>
  );
}

export default Restaurant;

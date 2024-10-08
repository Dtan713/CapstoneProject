import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Restaurant.css"; 

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const [userId, setUserId] = useState(1);
  const [planId, setPlanId] = useState(null);

  // Predefined plans
  const predefinedPlans = [
    { id: 1, restaurant_id: 1, plannedDate: new Date(Date.now() + 10 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], title: "Birthday dinner", visited: false },
    { id: 2, restaurant_id: 2, plannedDate: new Date(Date.now() + 15 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], title: "Casual lunch", visited: false },
    { id: 3, restaurant_id: 3, plannedDate: new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], title: "Anniversary", visited: true },
    { id: 4, restaurant_id: 4, plannedDate: new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], title: "Dinner", visited: true },
    { id: 5, restaurant_id: 5, plannedDate: new Date(Date.now() + 3 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], title: "Lunch", visited: false },
    { id: 6, restaurant_id: 6, plannedDate: new Date(Date.now() + 4 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], title: "Dinner", visited: false },
  ];

  // Fetch restaurant data from the API
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    
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
    fetchRestaurants();
  }, []);

  const handleAddClick = (restaurant) => {
    // Add to database
    const addPlan = async () => {
      try {
        const data = await axios.post(`http://localhost:8080/plans/add/${userId}/${restaurant.id}`, {
          visited: false,
          restaurant_id: restaurant.id,
          user_id: userId,
          notes: "",
          plannedDate: "",
        });
        const id = data.data.id;
        setPlanId(id);
      } catch (error) {
        console.error("Error adding plan:", error);
      }
    };
    
    addPlan();
    
    // Get current plans from local storage
    const currentPlans = JSON.parse(localStorage.getItem("plans")) || [];
    
    // Check if restaurant is already in plans
    let exists = currentPlans.some((plan) => plan.restaurant_id === restaurant.id);
    
    if (exists) {
      console.log("Restaurant already added to plans");
    } else {
      const updatedRestaurant = { ...restaurant, planId };
      currentPlans.push(updatedRestaurant);
      localStorage.setItem("plans", JSON.stringify(currentPlans)); 
    }
    
    // Navigate to the plans page
    navigate("/plans");
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
          
          {/* Display predefined plans for this restaurant */}
          <h4>Planned Visits:</h4>
          <ul>
            {predefinedPlans
              .filter(plan => plan.restaurant_id === restaurant.id)
              .map(plan => (
                <li key={plan.id}>
                  {plan.title} on {plan.plannedDate} {plan.visited ? "(Visited)" : "(Not Visited)"}
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Restaurant.css"; 
import Plans from "./Plans";



function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const [userId, setUserId] = useState(1);
  const [planId, setPlanId] = useState(null);
  

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

    //Add to database
    const addPlan = async () => {
      try {
      const data =  await axios.post(`http://localhost:8080/plans/add/${userId}/${restaurant.id}`, {
          visited: false,
          restaurant_id: restaurant.id,
          user_id: userId,
          notes: "",
          plannedDate: "",
        });
        const id = await data.data.id;
        setPlanId(id);
      } catch (error) {
        console.error("Error adding plan:", error);
      }

    };
    
    addPlan();
    // Get current plans from local storage
    const currentPlans = JSON.parse(localStorage.getItem("plans")) || [];
    
    console.log(restaurant.id)
    // Add the new restaurant to the plans
    let exists = currentPlans.some((plan) => plan.id === restaurant.id);
    console.log(exists)
    if (exists) {
      console.log("Restaurant already added to plans");
    }else{
      const updatedRestuaraunt = {...restaurant, planId: planId};
      currentPlans.push(updatedRestuaraunt);
    }
    
  
    
    // Save the updated plans back to local storage
    localStorage.setItem("plans", JSON.stringify(currentPlans)); 

    //  Navigate to the plans page
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
          <button onClick={() => handleAddClick(restaurant)} style={{ backgroundColor: 'orange', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Add to Plans
          </button>
        </div>
      ))}
    </div>
  );
}

export default Restaurant;

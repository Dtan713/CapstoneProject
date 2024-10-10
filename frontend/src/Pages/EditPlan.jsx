import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./EditPlan.css"; // Updated CSS file

function EditPlan() {
  const { id } = useParams(); // Get the plan ID from the URL
  const [plan, setPlan] = useState(null);
  const [formData, setFormData] = useState({
    userId: localStorage.getItem("userId"),
    plannedDate: "",
    notes: "",
    visited: false,
  });
  const navigate = useNavigate();
  const {state} = useLocation();
  let rest = state
  console.log(rest);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        // const response2 = await axios.get(`http://localhost:8080/plans/${id}`);
        const response = await axios.get(
          `http://localhost:8080/plans/user/${id}`
        );
        console.log(response, "response   data", id);
        setPlan(response.data);
        setFormData({
          userId,
          restaurantId,
          plannedDate: response.data.plannedDate,
          notes: response.data.notes,
          visited: response.data.visited,
        });
      } catch (error) {
        console.error("Error fetching plan:", error);
      }
    };
    fetchPlan();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log (plan);
    try {
      await axios.put(`http://localhost:8080/plans/edit/${id}`, formData);
      
      // const combinedPlans = [
      //     ...rest,
      //     formData.plannedDate,
      //     formData.notes,
      //     formData.visited,
      // ]

      // console.log(rest);
 
      // Update local storage
      const currentPlans = JSON.parse(localStorage.getItem("plans")) || [];
      const updatedPlans = currentPlans.map((plan) => 
        plan.planId === parseInt(id) ? { ...plan, ...formData } : plan
      );
      localStorage.setItem("plans", JSON.stringify(updatedPlans));

      navigate("/plans"); // Navigate back to the plans page after editing
    } catch (error) {
      console.error("Error updating plan:", error);
    }
  };

  if (!plan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-plan-container">
      <h2>Edit Plan for Plan {plan.id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="plannedDate">Planned Date</label>
          <input
            type="text"
            id="plannedDate"
            name="plannedDate"
            value={formData.plannedDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="visited">Visited</label>
          <input
            type="checkbox"
            id="visited"
            name="visited"
            checked={formData.visited}
            onChange={(e) =>
              setFormData({ ...formData, visited: e.target.checked })
            }
          />
        </div>
        <button className="edit-button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPlan;

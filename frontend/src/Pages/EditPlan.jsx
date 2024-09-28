import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditPlan.css"; // Updated CSS file

function EditPlan() {
  const { id } = useParams(); // Get the plan ID from the URL
  const [plan, setPlan] = useState(null);
  const [formData, setFormData] = useState({
    plannedDate: "",
    notes: "",
    visited: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/plans/user/${id}`
        );
        setPlan(response.data);
        console.log(response.data);
        console.log(plan);
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
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/plans/edit/${id}`, formData);
      navigate("/plans"); // Navigate back to the home page after editing
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
            type="date"
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

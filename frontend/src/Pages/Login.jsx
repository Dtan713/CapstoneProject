import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Contact.css"; // Import the same CSS file for consistent styling

function Login() {
  const navigate = useNavigate();

  // Form state to hold the values
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // Function to handle form submission
  const loginRequest = async (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email: formValues.email,
        password: formValues.password,
      });

      if (response.data === "User is now logged") {
        localStorage.setItem("auth", "true");
        console.log(response.data)
        navigate("/");
        window.location.reload();
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to handle changes to input fields
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="contact-container"
      style={{
        backgroundColor: "#2c3e50",
        padding: "100px",
        borderRadius: "20px",
        color: "white",
        maxWidth: "1000px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        border: "4px solid yellow", // Added yellow border
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg9-2ci1Ts2HHas6wrAyO22of-Xfcvw7sYg&s"
        alt="Login Account"
        style={{
          width: "150%",
          maxWidth: "600px",
          borderRadius: "10px",
          marginBottom: "20px",
          border: "4px solid yellow",
        }}
      />

      <h2 style={{ color: "Yellow", fontWeight: "bold", fontSize: "3rem" }}>
        Login
      </h2>

      <form
        className="contact-form"
        onSubmit={loginRequest}
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="form-group" style={{ width: "100%" }}>
          <label
            htmlFor="email"
            style={{
              color: "Yellow",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
            style={{
              padding: "15px",
              marginTop: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "100%",
              fontSize: "1rem",
              color: "black",
            }}
          />
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <label
            htmlFor="password"
            style={{
              color: "Yellow",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
            style={{
              padding: "15px",
              marginTop: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "100%",
              fontSize: "1rem",
              color: "black",
            }}
          />
        </div>

        <div style={{ width: "200%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "15px 30px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1.2rem",
              hover: "blue",
            }}
          >
            Login
          </button>
        </div>
      </form>

      {/* Add a link to the signup page */}
    </div>
  );
}

export default Login;
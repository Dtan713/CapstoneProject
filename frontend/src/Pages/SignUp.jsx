import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Contact.css"; // Assuming you're using the same CSS file

function SignUp() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("handleSignUp started");
    setError("");
    setSuccess("");

    if (!formValues.name || !formValues.email || !formValues.password || !formValues.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/users/register",
        {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
        }
      );

      console.log("Server response:", response);
      localStorage.setItem("userId", response.data.id);

      if (response.data.id) {
        setSuccess("Account created successfully! Redirecting to login...");
        console.log("Account created successfully, redirecting to login");
        navigate("/login");
      } else {
        setError(response.data || "An error occurred during sign up");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setError(error.response?.data?.message || "A");
    }
  };

  return (
    <div
      className="contact-container"
      style={{
        backgroundColor: "#2c3e50",
        padding: "60px",
        borderRadius: "10px",
        color: "white",
        maxWidth: "600px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        border: "4px solid yellow",
      }}
    >
      <h2 style={{ color: "Yellow", fontWeight: "bold", fontSize: "3rem", marginBottom: "30px" }}>
        Create Account
      </h2>

      <form
        className="contact-form"
        onSubmit={handleSignUp}
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="form-group" style={{ width: "100%", marginBottom: "20px" }}>
          <label
            htmlFor="name"
            style={{
              color: "Yellow",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
        <div className="form-group" style={{ width: "100%", marginBottom: "20px" }}>
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
        <div className="form-group" style={{ width: "100%", marginBottom: "20px" }}>
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
        <div className="form-group" style={{ width: "100%", marginBottom: "20px" }}>
          <label
            htmlFor="confirmPassword"
            style={{
              color: "Yellow",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
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

        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
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
            }}
          >
            Create Account
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}
    </div>
  );
}

export default SignUp;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Contact.css";

function Register() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  };
  const register = async (e) => {
    e.preventDefault();

    if (e.target["password"].value != e.target["confirmPassword"].value) {
      console.log(e.target["password"]);
      console.log(e.target["confirmPassword"]);
      alert("Passwords do not match, please try again");
    } else {
      try {
        console.log(formValues);
        const response = await axios.post(
          "http://localhost:8080/users/register",
          {
            email: formValues.email,
            password: formValues.password,
          }
        );

        if (response.data.id) {
          console.log("User was created");
          localStorage.setItem("auth", "true");
          navigate("/");
          window.location.reload();
        } else {
          alert(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
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
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg9-2ci1Ts2HHas6wrAyO22of-Xfcvw7sYg&s"
        alt="Register Account"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          marginBottom: "20px",
          border: "4px solid yellow",
        }}
      />

      <h2 style={{ color: "Yellow", fontWeight: "bold", fontSize: "3rem" }}>
        Create Account
      </h2>

      <form
        className="contact-form"
        onSubmit={register}
        style={{ width: "100%" }}
      >
        <div className="form-group">
          <label
            htmlFor="newEmail"
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
            name="email"
            id="newEmail"
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
        <div className="form-group">
          <label
            htmlFor="newPassword"
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
            id="newPassword"
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
        <div className="form-group">
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
        <button
          type="submit"
          style={{
            marginTop: "20px",
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
      </form>

      <div className="mt-4 text-center">
        <p className="text-yellow-300" style={{ fontSize: "1.1rem" }}>
          Already have an account?
          <button
            onClick={() => navigate("/login")}
            className="text-blue-400 font-semibold hover:underline"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
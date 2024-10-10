Planner React Application
This project is ultimate planning companion designed to elevate you dining experiences and adventures!
Whether you're looking for the perfect restaurant to satisfy your cravings or seeking a fun way to make decisions, we've got you covered.
Project Setup and Configuration
	Project Initialization
	The project was initialized using Vite, a fast build tool for modern web development.
	Command used: npm create vite@latest my-react-app --template react
	Dependencies Installation
	Core dependencies: React, React DOM, React Router
	Dev dependencies: Vite, Tailwind CSS
	Routing Setup
	React Router was implemented for navigation between different views.
	State Management
	A custom Context API setup (ContextProvider) was used for global state management.
	Styling
	Tailwind CSS was integrated for utility-first styling.
	Custom color palette defined in tailwind.config.js
	Component Structure
	Components were organized in a modular structure under the src/components directory.
Key Technologies and Tools
	React: A JavaScript library for building user interfaces.
	Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
	React Router: Declarative routing for React applications.
	Context API: React's built-in state management system for sharing data across components.
	Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
	Web Crypto API: Used for client-side encryption/decryption of user passwords (Note: this is for demonstration purposes only and not recommended for production use).
Project Structure
Front End - src - Folder - Navbar - Files Navbar.css and Navbar.jsx
             Folder - Pages - Files, About.jsx, Contact.jsx, EditPlan.jsx, Login.jsx, Plans.jsx, Restaurants.jsx, SignUp.jsx, Wheel.jsx, App.jsx 

Back End -  Src - Folders - Common - Interface Files - PlanToGoRepo, RestaurantRepo, UserRepo
                            Config - Class Files - DatabaseCleanUp, WebCorsConfig
                            Controller - Class Files- PlanToGoController, RestaurantController, UserController
                            Model - Class Files - PlanToGo, Restaurant, User
                            Seed - Class Files - DataPopulator
                            Service - Class Files - PlanToGoService, RestaurantService, UserService
                            DTO - Class File - LoginRequest
                            Test - J-unit - Restaurant.java
Features
1.	User Authentication:
	Registration and Login functionality
	Restaurant Display:)
	Responsive navbar with conditional rendering based on login status
	React Router for seamless navigation between views
	State Management:
	Global state managed via Context API (ContextProvider)
    Development Process
1.	Initial Setup: Project initialized with Vite and React.
2.	Routing Implementation: Set up React Router for navigation in main.jsx and Routes.jsx.
3.	State Management: Implemented Context API for global state in ContextProvider.jsx.
4.	Component Development: Created individual components for different views and functionalities.
5.	Styling: Applied Tailwind CSS for responsive and consistent design, with custom color palette.).
	The current implementation of password handling (client-side encryption) is not secure for production use. In a real-world        application, authentication should be handled server-side with proper security measures.
    Future Enhancements
	Integrate with a backend API for dynamic product data

   This project serves as a foundation for an planner application and demonstrates the use of modern React practices and supporting technologies.
   How to Improve This Application
    Security Enhancements
	Backend Authentication:
	Implement a backend server (e.g., using Node.js and Express.js).
	Use bcrypt for password hashing on the server side instead of client-side encryption.
	Example bcrypt usage:
	const bcrypt = require("bcrypt");o	const saltRounds = 10;
	// Hashing a password
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	
	// Comparing a password
    const isMatch = await bcrypt.compare(password, hashedPassword);
	JWT (JSON Web Tokens) for Authentication:
	Implement JWT for secure authentication and authorization.
	Use libraries like jsonwebtoken in Node.js.
	Example JWT usage:
	const jwt = require("jsonwebtoken");
	
	// Creating a token
	const token = jwt.sign({ userId: user.id }, "your-secret-key", {
	  expiresIn: "1h",
	});
	
	// Verifying a token
const decoded = jwt.verify(token, "your-secret-key");
	HTTPS: Ensure the application is served over HTTPS to encrypt data in transit.
Styling Improvements
	Responsive Design: Enhance the responsive design for better mobile experience.
	Accessibility: Improve accessibility by adding ARIA attributes and ensuring proper color contrast.
	Dark Mode: Implement a dark mode option using Tailwind CSS.
	Animation: Add subtle animations for better user experience (e.g., using libraries like Framer Motion).
Additional Features
	User Profiles:
	Allow users to create and edit profiles.
    Wheel Feature to make a heads or tail decision.

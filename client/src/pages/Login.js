// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './FormStyles.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please fill in both fields.");
//       return;
//     }

//     if (email === "user@example.com" && password === "password") {
//       navigate("/predict");
//     } else {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="form-page">
//       <div className="form-card">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">Login</button>
//           {error && <p className="error-text">{error}</p>}
//         </form>
//         <p>
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './FormStyles.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please fill in both fields.");
//       return;
//     }

//     if (email === "user@example.com" && password === "password") {
//       navigate("/predict");
//     } else {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="page-fade">
//     <div className="form-page">
//       <div className="form-card">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-dark w-100">Login</button>
//           {error && <p className="error-text">{error}</p>}
//         </form>
//         <p>
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormStyles.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if email and password are filled
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, redirect to the desired page
        navigate("/predict"); // or any other page you want to redirect to
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred while logging in. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="page-fade">
      <div className="navbar-left">
        <span className="project-title" style={{color:"white"}}>ResearcHub</span>
      </div>
      <div className="form-page">
        
        <div className="form-card">

          <h2>Welcome Back!!</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>
            {error && <p className="error-text">{error}</p>}
          </form>
          <p style={{ textAlign: "center" }}>
  Don't have an account? <a href="/signup" style={{ color: "black" }}>Sign Up</a>
</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

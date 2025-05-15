// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './FormStyles.css';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (!fullName || !username || !email || !password || !confirmPassword) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     navigate("/login");
//   };

//   return (
//     <div className="page-fade">
//     <div className="form-page">
//       <div className="form-card">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="form-group">
//             <label>Full Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Username:</label>
//             <input
//               type="text"
//               className="form-control"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
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
//           <div className="form-group">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-dark w-100">Sign Up</button>
//           {error && <p className="error-text">{error}</p>}
//         </form>
//         <p>
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// };
 
// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormStyles.css';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!fullName || !username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userData = {
      name: fullName,  // This matches the backend model's 'name' field
      username,
      email,
      password
    };
    

    // Send data to backend using fetch
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        // Successful signup, redirect to login page
        navigate("/login");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while signing up. Please try again.");
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
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                className="form-control"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">Sign Up</button>
            {error && <p className="error-text">{error}</p>}
          </form>
          <p style={{ textAlign: "center" }}>
            Already have an account? <a href="/login" style={{ color: "black" }}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

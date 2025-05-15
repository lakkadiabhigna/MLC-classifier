// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Project Name</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav d-flex flex-row gap-4">
//             <li className="nav-item">
//               <ScrollLink to="about" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>About</ScrollLink>
//             </li>
//             <li className="nav-item">
//               <ScrollLink to="faqs" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>FAQs</ScrollLink>
//             </li>
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/signup" className="nav-link">Sign Up</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="project-title">ResearcHub</span>
      </div>
      <div className="navbar-right">
        <a href="#about" className="nav-link">About</a>
        <a href="#faq" className="nav-link">FAQs</a>
        <a href="#contact" className="nav-link">Contact</a>
        <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="nav-btn signup" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

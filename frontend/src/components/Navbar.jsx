import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
//import { NavLink, Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("cropcare_user");
  const handleLogout = () => {
  localStorage.removeItem("cropcare_user");
  localStorage.removeItem("cropcare_logged_in");

  navigate("/login");
};
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="brand">

          <div className="brand-icon">
            🌱
          </div>

          <div className="brand-text">
            <span>CropCare</span>
            <small>AI</small>
          </div>

        </Link>


        {/* NAVIGATION */}
        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/detect"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            AI Detect
          </NavLink>

          <NavLink
            to="/diseases"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Diseases
          </NavLink>

          <NavLink
            to="/remedies"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Remedies
          </NavLink>

          <NavLink
            to="/prevention"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Prevention
          </NavLink>

          <NavLink
            to="/farming-guide"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Farming Guide
          </NavLink>

          <NavLink
            to="/crop-management"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Crop Management
          </NavLink>
          <NavLink
  to="/history"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  History
</NavLink>
<NavLink to="/chatbot">AI Chatbot</NavLink>
<NavLink to="/chat-history">Chat History</NavLink>
        </nav>


        {/* CTA + LOGIN / LOGOUT */}
{/* USER + LOGOUT */}
<div className="navbar-user">
  <span className="user-name">👋 {username}</span>

  <button className="logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>

<Link to="/detect" className="navbar-cta">
  Check a Leaf
  <span>→</span>
</Link>

      </div>

    </header>
  );
}

export default Navbar;
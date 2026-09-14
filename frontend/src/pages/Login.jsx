import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter username and password.");
      return;
    }

    // Frontend demo authentication
    localStorage.setItem("cropcare_user", formData.username);
    localStorage.setItem("cropcare_logged_in", "true");

    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="login-brand">
          🌱 <span>CropCare AI</span>
        </div>

        <div className="login-message">
          <h1>
            Grow Smarter.
            <br />
            <span>Farm Better.</span>
          </h1>

          <p>
            Your intelligent farming companion for
            crop health, disease detection and
            better crop management.
          </p>

          <div className="login-features">
            <div>🤖 AI Disease Detection</div>
            <div>🌾 Smart Farming Guide</div>
            <div>🌱 Crop Management</div>
            <div>🛡️ Disease Prevention</div>
          </div>
        </div>

      </div>

      <div className="login-right">

        <div className="login-card">

          <div className="login-icon">
            🌿
          </div>

          <h2>Welcome Back</h2>

          <p className="login-subtitle">
            Sign in to continue to CropCare AI
          </p>

          {error && (
            <div className="login-error">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            <label>Username</label>

            <div className="input-box">
              <span>👤</span>

              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <span>🔒</span>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button className="login-button" type="submit">
              Login
              <span>→</span>
            </button>

          </form>

          <p className="login-note">
            🌱 Your smart farming journey starts here.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
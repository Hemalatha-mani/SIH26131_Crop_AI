import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>🌱</span>
            CropCare <b>AI</b>
          </Link>

          <p>
            AI-powered crop health assistance and practical
            farming guidance for smarter and healthier agriculture.
          </p>

          <div className="footer-tagline">
            🌾 Grow Better. Farm Smarter.
          </div>

        </div>


        <div className="footer-column">

          <h4>Explore</h4>

          <Link to="/">Home</Link>
          <Link to="/detect">AI Detect</Link>
          <Link to="/diseases">Diseases</Link>
          <Link to="/remedies">Remedies</Link>

        </div>


        <div className="footer-column">

          <h4>Farmer Resources</h4>

          <Link to="/prevention">Prevention</Link>
          <Link to="/farming-guide">Farming Guide</Link>
          <Link to="/crop-management">Crop Management</Link>

        </div>


        <div className="footer-column">

          <h4>AI Assistant</h4>

          <p>
            Upload a crop leaf and let CropCare AI
            identify possible diseases.
          </p>

          <Link to="/detect" className="footer-button">
            Check a Leaf →
          </Link>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 CropCare AI
        </span>

        <span>
          AI for smarter agriculture 🌱
        </span>

      </div>

    </footer>
  );
}

export default Footer;
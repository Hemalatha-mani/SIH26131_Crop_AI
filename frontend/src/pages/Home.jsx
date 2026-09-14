import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="home-hero">
        <div className="hero-content">

          <div className="hero-badge">
            <span>✦</span>
            AI-POWERED CROP HEALTH
          </div>

          <h1>
            Smarter farming.
            <br />
            <span>Healthier crops.</span>
          </h1>

          <p className="hero-description">
            CropCare AI helps farmers detect crop diseases early,
            understand their causes, find practical remedies and
            learn better crop management practices.
          </p>

          <div className="hero-buttons">
            <Link to="detect" className="primary-button">
              🔍 Check Your Crop
              <span>→</span>
            </Link>

            <Link to="/farming-guide" className="secondary-button">
              🌱 Explore Farming Guide
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>6+</strong>
              <span>Disease Classes</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>AI</strong>
              <span>Powered Detection</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>24/7</strong>
              <span>Farmer Guidance</span>
            </div>
          </div>

        </div>

        
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">

        <div className="section-heading">
          <span className="section-label">HOW CROPCARE AI HELPS</span>

          <h2>
            From a simple leaf photo
            <br />
            <span>to better farming decisions.</span>
          </h2>

          <p>
            Everything you need to understand crop health and
            make informed farming decisions in one place.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-number">01</div>
            <div className="feature-icon ai-icon">🤖</div>

            <h3>AI Detection</h3>

            <p>
              Upload a crop leaf image and let our AI model
              identify possible diseases.
            </p>

            <Link to="/ai-detect">
              Detect Disease →
            </Link>
          </div>


          <div className="feature-card">
            <div className="feature-number">02</div>
            <div className="feature-icon disease-icon">🔬</div>

            <h3>Understand Diseases</h3>

            <p>
              Learn about symptoms, causes and common signs
              of crop diseases.
            </p>

            <Link to="/diseases">
              Explore Diseases →
            </Link>
          </div>


          <div className="feature-card">
            <div className="feature-number">03</div>
            <div className="feature-icon remedy-icon">💊</div>

            <h3>Find Remedies</h3>

            <p>
              Get practical treatment and management suggestions
              for detected crop problems.
            </p>

            <Link to="/remedies">
              View Remedies →
            </Link>
          </div>


          <div className="feature-card">
            <div className="feature-number">04</div>
            <div className="feature-icon prevention-icon">🛡️</div>

            <h3>Prevent Problems</h3>

            <p>
              Learn preventive practices to reduce the risk
              of disease spreading in your crops.
            </p>

            <Link to="/prevention">
              Learn Prevention →
            </Link>
          </div>

        </div>

      </section>


      {/* ================= SUPPORTED CROPS ================= */}
      <section className="crops-section">

        <div className="crops-content">

          <div className="section-heading left-heading">
            <span className="section-label">SUPPORTED CROPS</span>

            <h2>
              Start with the crops
              <br />
              <span>you grow.</span>
            </h2>

            <p>
              CropCare AI currently focuses on common tomato
              and potato diseases. More crops can be added
              as the system grows.
            </p>

            <Link to="/ai-detect" className="text-button">
              Check a leaf image →
            </Link>
          </div>


          <div className="crop-cards">

            <div className="crop-card tomato-card">

              <div className="crop-image tomato-image">
                🍅
              </div>

              <div className="crop-info">
                <span>01</span>
                <h3>Tomato</h3>
                <p>
                  Disease detection and crop health guidance
                  for tomato plants.
                </p>
              </div>

            </div>


            <div className="crop-card potato-card">

              <div className="crop-image potato-image">
                🥔
              </div>

              <div className="crop-info">
                <span>02</span>
                <h3>Potato</h3>
                <p>
                  Identify common potato diseases and discover
                  management practices.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FARMING JOURNEY ================= */}
      <section className="journey-section">

        <div className="section-heading">
          <span className="section-label">YOUR FARMING JOURNEY</span>

          <h2>
            One platform.
            <br />
            <span>Complete crop guidance.</span>
          </h2>
        </div>


        <div className="journey">

          <div className="journey-step">
            <div className="journey-circle">📷</div>
            <h3>Detect</h3>
            <p>Upload a leaf image.</p>
          </div>

          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="journey-circle">🔬</div>
            <h3>Understand</h3>
            <p>Learn about the disease.</p>
          </div>

          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="journey-circle">💊</div>
            <h3>Treat</h3>
            <p>Explore practical remedies.</p>
          </div>

          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="journey-circle">🛡️</div>
            <h3>Prevent</h3>
            <p>Protect future crops.</p>
          </div>

        </div>

      </section>


      {/* ================= FARMER GUIDE CTA ================= */}
      <section className="guide-cta">

        <div className="guide-cta-content">

          <div className="guide-leaf">
            🌿
          </div>

          <div>
            <span className="section-label">FARMER RESOURCES</span>

            <h2>
              Better knowledge leads
              <br />
              to better harvests.
            </h2>

            <p>
              Explore farming ideas, fertilizer basics, irrigation,
              soil care, pest management and crop-specific guidance.
            </p>
          </div>

          <div className="guide-actions">

            <Link to="/farming-guide" className="guide-button">
              🌱 Farming Guide →
            </Link>

            <Link to="/crop-management" className="guide-outline">
              Crop Management
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="final-cta">

        <div className="final-cta-icon">
          🌱
        </div>

        <span className="section-label">READY TO GET STARTED?</span>

        <h2>
          Give your crops
          <br />
          <span>the care they deserve.</span>
        </h2>

        <p>
          Upload a crop leaf and let CropCare AI help you
          understand its health.
        </p>

        <Link to="/detect" className="final-button">
          Check a Leaf with AI →
        </Link>

      </section>

    </div>
  );
}

export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CropManagement.css";
//import cropManagement from "../assets/images/cropManagement.png";


const cropData = {
  Tomato: {
    emoji: "🍅",
    color: "tomato",
    subtitle: "Manage your tomato crop from seedling to harvest.",
    duration: "70–90 days",
    water: "Moderate",
    harvest: "70–90 days",
    stages: [
      {
        icon: "🌱",
        title: "Seedling",
        days: "0–20 Days",
        description:
          "Keep seedlings in healthy soil with sufficient sunlight and moderate moisture.",
      },
      {
        icon: "🌿",
        title: "Vegetative Growth",
        days: "20–40 Days",
        description:
          "Support healthy leaf and stem development with balanced nutrition and irrigation.",
      },
      {
        icon: "🌼",
        title: "Flowering",
        days: "40–55 Days",
        description:
          "Monitor flowering closely and maintain consistent watering without waterlogging.",
      },
      {
        icon: "🍅",
        title: "Fruiting",
        days: "55–75 Days",
        description:
          "Provide adequate nutrition and monitor fruits for pests and disease symptoms.",
      },
      {
        icon: "🧺",
        title: "Harvest",
        days: "70–90 Days",
        description:
          "Harvest mature fruits carefully and continue monitoring remaining plants.",
      },
    ],
  },

  Potato: {
    emoji: "🥔",
    color: "potato",
    subtitle: "Track potato growth and maintain healthy tuber development.",
    duration: "80–120 days",
    water: "Moderate",
    harvest: "80–120 days",
    stages: [
      {
        icon: "🌱",
        title: "Sprouting",
        days: "0–20 Days",
        description:
          "Plant healthy seed potatoes in well-drained soil and maintain suitable moisture.",
      },
      {
        icon: "🌿",
        title: "Vegetative Growth",
        days: "20–45 Days",
        description:
          "Encourage strong foliage growth and maintain weed-free soil.",
      },
      {
        icon: "🌼",
        title: "Tuber Formation",
        days: "45–70 Days",
        description:
          "Maintain consistent soil moisture and monitor plants for disease symptoms.",
      },
      {
        icon: "🥔",
        title: "Tuber Development",
        days: "70–100 Days",
        description:
          "Support tuber growth with appropriate nutrition and avoid excessive irrigation.",
      },
      {
        icon: "🧺",
        title: "Harvest",
        days: "80–120 Days",
        description:
          "Harvest when plants mature and allow tubers to dry before storage.",
      },
    ],
  },
};

function CropManagement() {
  const [selectedCrop, setSelectedCrop] = useState("Tomato");

  const crop = cropData[selectedCrop];

  return (
    <div className="crop-management-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="crop-management-hero">

        <div className="crop-hero-content">

          <div className="crop-badge">
            🌱 SMART CROP MANAGEMENT
          </div>

          <h1>
            Grow Better.
            <br />
            <span>Manage Smarter.</span>
          </h1>

          <p>
            Plan every stage of your crop journey — from planting
            and watering to nutrition, monitoring and harvesting.
          </p>

          <div className="crop-hero-buttons">

            <Link to="/ai-detect" className="crop-primary-btn">
              🤖 Check Crop Health
              <span>→</span>
            </Link>

            <Link to="/farming-guide" className="crop-secondary-btn">
              🌾 Farming Guide
            </Link>

          </div>

          <div className="crop-stat-row">

            <div className="crop-stat">
              <strong>01</strong>
              <span>Select Crop</span>
            </div>

            <div className="crop-stat">
              <strong>02</strong>
              <span>Track Growth</span>
            </div>

            <div className="crop-stat">
              <strong>03</strong>
              <span>Harvest Better</span>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE IMAGE */}

        <div className="crop-hero-image">

          <div className="image-glow"></div>

          <img
  src="/images/crop-management-farm.png"
  alt="Healthy crop field"
/>

          <div className="image-floating-card">
            <span>🌿</span>
            <div>
              <strong>Healthy Growth</strong>
              <small>Monitor every stage</small>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          CROP SELECTOR
      ====================================================== */}

      <section className="crop-selector-section">

        <div className="crop-selector-header">

          <div>
            <span className="section-label">
              YOUR CROP
            </span>

            <h2>
              Choose a crop to manage
            </h2>
          </div>

          <div className="crop-select-wrapper">

            <span>{crop.emoji}</span>

            <select
              value={selectedCrop}
              onChange={(event) =>
                setSelectedCrop(event.target.value)
              }
            >
              {Object.keys(cropData).map((cropName) => (
                <option key={cropName} value={cropName}>
                  {cropName}
                </option>
              ))}
            </select>

          </div>

        </div>


        <div className="selected-crop-banner">

          <div className="selected-crop-icon">
            {crop.emoji}
          </div>

          <div className="selected-crop-info">
            <span>CURRENTLY MANAGING</span>
            <h3>{selectedCrop} Crop</h3>
            <p>{crop.subtitle}</p>
          </div>

          <div className="crop-quick-stats">

            <div>
              <strong>{crop.duration}</strong>
              <span>Growth Period</span>
            </div>

            <div>
              <strong>{crop.water}</strong>
              <span>Water Need</span>
            </div>

            <div>
              <strong>{crop.harvest}</strong>
              <span>Harvest</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GROWTH TIMELINE
      ====================================================== */}

      <section className="growth-section">

        <div className="section-heading-center">

          <span className="section-label">
            CROP LIFE CYCLE
          </span>

          <h2>
            From <span>seed</span> to harvest
          </h2>

          <p>
            Understand what your crop needs at each important
            growth stage.
          </p>

        </div>


        <div className="growth-timeline">

          {crop.stages.map((stage, index) => (

            <div
              className="growth-stage"
              key={stage.title}
            >

              <div className="stage-number">
                0{index + 1}
              </div>

              <div className="stage-icon">
                {stage.icon}
              </div>

              <div className="stage-content">

                <span>{stage.days}</span>

                <h3>{stage.title}</h3>

                <p>{stage.description}</p>

              </div>

              {index !== crop.stages.length - 1 && (
                <div className="stage-line"></div>
              )}

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          MANAGEMENT CARDS
      ====================================================== */}

      <section className="management-section">

        <div className="section-heading-center">

          <span className="section-label">
            DAILY CROP CARE
          </span>

          <h2>
            Manage the <span>essentials</span>
          </h2>

          <p>
            Small improvements in everyday crop management can
            make a big difference.
          </p>

        </div>


        <div className="management-grid">

          {/* WATER */}

          <div className="management-card water-card">

            <div className="management-icon">
              💧
            </div>

            <span className="management-number">
              01
            </span>

            <h3>Water Management</h3>

            <p>
              Maintain consistent soil moisture and avoid both
              drought stress and waterlogging.
            </p>

            <ul>
              <li>✓ Water near the plant base</li>
              <li>✓ Check soil moisture regularly</li>
              <li>✓ Avoid unnecessary irrigation</li>
            </ul>

            <Link to="/farming-guide">
              Learn irrigation tips →
            </Link>

          </div>


          {/* FERTILIZER */}

          <div className="management-card fertilizer-card">

            <div className="management-icon">
              🧪
            </div>

            <span className="management-number">
              02
            </span>

            <h3>Nutrition & Fertilizer</h3>

            <p>
              Provide balanced nutrition according to crop
              growth stage and soil requirements.
            </p>

            <ul>
              <li>✓ Prefer soil-based recommendations</li>
              <li>✓ Use organic matter where suitable</li>
              <li>✓ Avoid excessive fertilizer</li>
            </ul>

            <Link to="/farming-guide">
              Explore fertilizer guide →
            </Link>

          </div>


          {/* WEED */}

          <div className="management-card weed-card">

            <div className="management-icon">
              🌿
            </div>

            <span className="management-number">
              03
            </span>

            <h3>Weed Management</h3>

            <p>
              Control weeds early so your crop gets sufficient
              water, nutrients and sunlight.
            </p>

            <ul>
              <li>✓ Inspect the field regularly</li>
              <li>✓ Remove competing weeds</li>
              <li>✓ Keep planting areas clean</li>
            </ul>

            <Link to="/prevention">
              Prevention tips →
            </Link>

          </div>


          {/* MONITORING */}

          <div className="management-card monitoring-card">

            <div className="management-icon">
              🔍
            </div>

            <span className="management-number">
              04
            </span>

            <h3>Health Monitoring</h3>

            <p>
              Check leaves, stems, flowers and fruits regularly
              to identify problems early.
            </p>

            <ul>
              <li>✓ Look for unusual spots</li>
              <li>✓ Check for insect damage</li>
              <li>✓ Use AI disease detection</li>
            </ul>

            <Link to="/ai-detect">
              Scan a leaf →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FARMER CHECKLIST
      ====================================================== */}

      <section className="checklist-section">

        <div className="checklist-content">

          <span className="section-label">
            FARMER CHECKLIST
          </span>

          <h2>
            Your weekly crop
            <br />
            <span>health checklist</span>
          </h2>

          <p>
            Use this simple checklist while walking through your
            field.
          </p>

          <Link
            to="/prevention"
            className="checklist-button"
          >
            View Prevention Guide →
          </Link>

        </div>


        <div className="checklist">

          <div className="check-item">
            <div className="check-circle">✓</div>
            <div>
              <strong>Inspect leaves</strong>
              <span>Check for spots, yellowing or unusual growth.</span>
            </div>
          </div>

          <div className="check-item">
            <div className="check-circle">✓</div>
            <div>
              <strong>Check soil moisture</strong>
              <span>Make sure plants receive suitable moisture.</span>
            </div>
          </div>

          <div className="check-item">
            <div className="check-circle">✓</div>
            <div>
              <strong>Look for pests</strong>
              <span>Inspect the underside of leaves and stems.</span>
            </div>
          </div>

          <div className="check-item">
            <div className="check-circle">✓</div>
            <div>
              <strong>Remove damaged parts</strong>
              <span>Clean up severely affected plant material.</span>
            </div>
          </div>

          <div className="check-item">
            <div className="check-circle">✓</div>
            <div>
              <strong>Record crop progress</strong>
              <span>Track flowering, fruiting and harvest stages.</span>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          AI CTA
      ====================================================== */}

      <section className="crop-management-cta">

        <div className="cta-leaf">
          🌿
        </div>

        <div>

          <span>
            CROPCARE AI
          </span>

          <h2>
            Not sure what is affecting
            <br />
            your crop?
          </h2>

          <p>
            Upload a leaf image and let AI help identify
            possible crop diseases.
          </p>

        </div>

        <Link
          to="/ai-detect"
          className="cta-check-button"
        >
          🤖 Check a Leaf
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default CropManagement;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Prevention.css";
import preventionPlant from "../assets/images/prevention-plant.png";

const preventionData = {
  Healthy: {
    icon: "🌿",
    name: "Healthy Plants",
    color: "green",
    tips: [
      "Continue regular crop monitoring",
      "Maintain proper soil moisture",
      "Provide adequate sunlight",
      "Keep weeds under control",
      "Use balanced nutrition",
    ],
  },

  Potato_Early_blight: {
    icon: "🥔",
    name: "Potato Early Blight",
    color: "orange",
    tips: [
      "Avoid prolonged leaf wetness",
      "Maintain sufficient spacing between plants",
      "Remove infected leaves and crop debris",
      "Avoid excessive nitrogen application",
      "Monitor older leaves regularly",
    ],
  },

  Potato_Late_blight: {
    icon: "🥔",
    name: "Potato Late Blight",
    color: "red",
    tips: [
      "Monitor crops during cool and humid weather",
      "Avoid prolonged moisture on foliage",
      "Remove infected plant material",
      "Improve air circulation",
      "Follow local disease warnings",
    ],
  },

  Tomato_Bacterial_spot: {
    icon: "🍅",
    name: "Tomato Bacterial Spot",
    color: "yellow",
    tips: [
      "Use clean and healthy planting material",
      "Avoid working with wet plants",
      "Maintain good field sanitation",
      "Provide adequate plant spacing",
      "Remove infected plant debris",
    ],
  },

  Tomato_Early_blight: {
    icon: "🍅",
    name: "Tomato Early Blight",
    color: "orange",
    tips: [
      "Water plants at the base",
      "Remove infected lower leaves",
      "Use mulch to reduce soil splash",
      "Maintain good air circulation",
      "Inspect plants regularly",
    ],
  },

  Tomato_Late_blight: {
    icon: "🍅",
    name: "Tomato Late Blight",
    color: "red",
    tips: [
      "Avoid overhead irrigation",
      "Monitor plants during wet weather",
      "Remove infected leaves quickly",
      "Maintain proper plant spacing",
      "Keep the growing area clean",
    ],
  },
};

function Prevention() {
  const [selectedDisease, setSelectedDisease] =
    useState("Tomato_Early_blight");

  const [checkedItems, setCheckedItems] = useState([]);

  const disease = preventionData[selectedDisease];

  const preventionPillars = [
    {
      icon: "🔍",
      title: "Early Detection",
      text: "Inspect leaves and plants regularly so problems can be identified before they spread.",
    },
    {
      icon: "💧",
      title: "Smart Watering",
      text: "Avoid unnecessary leaf wetness and provide water according to crop needs.",
    },
    {
      icon: "🌱",
      title: "Healthy Soil",
      text: "Maintain soil fertility, organic matter and proper drainage for stronger plants.",
    },
    {
      icon: "🧹",
      title: "Field Hygiene",
      text: "Remove infected plant material, weeds and crop debris from the growing area.",
    },
    {
      icon: "🌬️",
      title: "Good Airflow",
      text: "Maintain proper spacing to improve air circulation and reduce excess humidity.",
    },
    {
      icon: "🛡️",
      title: "Safe Protection",
      text: "Use crop protection products only when needed and always follow local recommendations.",
    },
  ];

  const checklist = [
    "I inspected my plants today",
    "Soil moisture is under control",
    "There are no infected leaves nearby",
    "The crop area is clean",
    "Plants have enough spacing",
    "I checked for new symptoms",
  ];

  const toggleChecklist = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(
        checkedItems.filter((item) => item !== index)
      );
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const progress =
    Math.round((checkedItems.length / checklist.length) * 100);

  return (
    <div className="prevention-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      
      <section className="prevention-hero">

  {/* LEFT CONTENT */}
  <div className="prevention-hero-content">

    <div className="prevention-badge">
      🛡️ SMART CROP PROTECTION
    </div>

    <h1>
      Prevent Today,
      <br />
      <span>Harvest Better</span>
    </h1>

    <p>
      Healthy crops begin with good prevention.
      Learn simple and practical ways to protect
      your plants from diseases, pests and crop stress.
    </p>

    <div className="prevention-buttons">

      <Link to="/ai-detect" className="prevention-primary-btn">
        🤖 Check Your Crop
        <span>→</span>
      </Link>

      <Link to="/diseases" className="prevention-secondary-btn">
        🦠 Learn About Diseases
      </Link>

    </div>

    {/* SMALL BENEFITS */}
    <div className="prevention-features">

      <div className="prevention-feature">
        <div className="feature-icon">🌱</div>
        <div>
          <strong>Healthy Plants</strong>
          <span>Better growth</span>
        </div>
      </div>

      <div className="prevention-feature">
        <div className="feature-icon">💧</div>
        <div>
          <strong>Smart Watering</strong>
          <span>Right moisture</span>
        </div>
      </div>

      <div className="prevention-feature">
        <div className="feature-icon">☀️</div>
        <div>
          <strong>Proper Sunlight</strong>
          <span>Strong crops</span>
        </div>
      </div>

    </div>

  </div>


  {/* RIGHT IMAGE */}
  <div className="prevention-hero-visual">

    <div className="sun-glow"></div>

    <div className="plant-image-card">

      <img
        src={preventionPlant}
        alt="Healthy plant growing in sunlight"
        className="prevention-plant-image"
      />

      {/* Floating information cards */}

      <div className="floating-card floating-top">

        <span className="floating-icon">☀️</span>

        <div>
          <strong>Good Sunlight</strong>
          <small>Supports healthy growth</small>
        </div>

      </div>


      <div className="floating-card floating-bottom">

        <span className="floating-icon">🌿</span>

        <div>
          <strong>Healthy Growth</strong>
          <small>Prevention starts early</small>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* =====================================================
          PREVENTION PILLARS
      ===================================================== */}

      <section className="pillars-section">

        <div className="prevention-section-heading">

          <span>THE SIX PILLARS</span>

          <h2>
            Build a stronger
            <br />
            <span>crop defense.</span>
          </h2>

          <p>
            Simple farming practices can significantly reduce
            the conditions that allow crop diseases to develop
            and spread.
          </p>

        </div>


        <div className="pillars-grid">

          {preventionPillars.map((pillar, index) => (

            <div
              className="pillar-card"
              key={pillar.title}
              style={{
                "--delay": `${index * 0.08}s`,
              }}
            >

              <div className="pillar-number">
                0{index + 1}
              </div>

              <div className="pillar-icon">
                {pillar.icon}
              </div>

              <h3>{pillar.title}</h3>

              <p>{pillar.text}</p>

              <div className="pillar-arrow">
                →
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          DISEASE-SPECIFIC PREVENTION
      ===================================================== */}

      <section className="disease-prevention-section">

        <div className="prevention-section-heading centered">

          <span>DISEASE-SPECIFIC CARE</span>

          <h2>
            Protect your crop from
            <br />
            <span>common diseases.</span>
          </h2>

          <p>
            Select a disease to see practical prevention
            steps for that crop problem.
          </p>

        </div>


        <div className="disease-prevention-container">

          {/* DISEASE LIST */}

          <div className="disease-list">

            {Object.keys(preventionData).map((key) => (

              <button
                key={key}
                className={`disease-option ${
                  selectedDisease === key ? "selected" : ""
                }`}
                onClick={() => setSelectedDisease(key)}
              >

                <span className="disease-option-icon">
                  {preventionData[key].icon}
                </span>

                <span>
                  {preventionData[key].name}
                </span>

                <span className="disease-option-arrow">
                  →
                </span>

              </button>

            ))}

          </div>


          {/* SELECTED DISEASE */}

          <div className={`selected-disease-card ${disease.color}`}>

            <div className="selected-disease-top">

              <div className="selected-disease-icon">
                {disease.icon}
              </div>

              <div>

                <small>
                  PREVENTION PLAN
                </small>

                <h3>
                  {disease.name}
                </h3>

              </div>

            </div>


            <div className="prevention-tip-list">

              {disease.tips.map((tip, index) => (

                <div
                  className="prevention-tip"
                  key={tip}
                >

                  <div className="tip-check">
                    ✓
                  </div>

                  <div>

                    <span>
                      TIP {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{tip}</p>

                  </div>

                </div>

              ))}

            </div>


            <Link
              to="/remedies"
              className="view-remedies-btn"
            >
              View Remedies
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FARMER CHECKLIST
      ===================================================== */}

      <section className="checklist-section">

        <div className="checklist-intro">

          <div className="checklist-icon">
            📋
          </div>

          <span>
            DAILY CROP CHECK
          </span>

          <h2>
            How healthy is your
            <br />
            field today?
          </h2>

          <p>
            Take a quick check. Complete the simple tasks
            below to keep your crop care routine on track.
          </p>

        </div>


        <div className="checklist-card">

          <div className="checklist-header">

            <div>
              <span>Today's progress</span>

              <strong>
                {progress}%
              </strong>
            </div>

            <div className="progress-circle">
              {checkedItems.length}/{checklist.length}
            </div>

          </div>


          <div className="checklist-progress">

            <div
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>


          <div className="checklist-items">

            {checklist.map((item, index) => (

              <button
                key={item}
                className={`check-item ${
                  checkedItems.includes(index)
                    ? "completed"
                    : ""
                }`}
                onClick={() => toggleChecklist(index)}
              >

                <span className="check-box">
                  {checkedItems.includes(index) ? "✓" : ""}
                </span>

                <span>{item}</span>

              </button>

            ))}

          </div>


          {progress === 100 && (

            <div className="checklist-complete">

              🌿 Excellent!
              <span>
                Your crop care checklist is complete.
              </span>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          PREVENTION RULE
      ===================================================== */}

      <section className="prevention-rule">

        <div className="rule-decoration">
          🌱
        </div>

        <div className="rule-content">

          <span>THE CROPCARE RULE</span>

          <h2>
            Observe early.
            <br />
            Act wisely.
            <br />
            <em>Grow confidently.</em>
          </h2>

          <p>
            Prevention is not one action. It is a daily habit
            of observing your crops, maintaining healthy growing
            conditions and responding quickly to unusual symptoms.
          </p>

        </div>


        <div className="rule-points">

          <div>
            <strong>01</strong>
            <span>Observe</span>
            <p>Check your plants regularly.</p>
          </div>

          <div>
            <strong>02</strong>
            <span>Protect</span>
            <p>Reduce conditions that support disease.</p>
          </div>

          <div>
            <strong>03</strong>
            <span>Respond</span>
            <p>Take timely action when symptoms appear.</p>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="prevention-final-cta">

        <div className="cta-leaf">
          🌿
        </div>

        <div>

          <span>
            NOT SURE ABOUT YOUR PLANT?
          </span>

          <h2>
            Let CropCare AI
            <br />
            take a closer look.
          </h2>

          <p>
            Upload a crop leaf and get an AI-powered
            disease prediction.
          </p>

        </div>

        <Link
          to="/ai-detect"
          className="final-check-btn"
        >
          Check a Leaf
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default Prevention;
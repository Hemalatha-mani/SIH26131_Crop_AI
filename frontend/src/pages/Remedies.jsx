import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Remedies.css";
import farmerWateringTomato from "../assets/images/farmer-watering-tomato.png";

const diseaseData = {
  Healthy: {
    icon: "🌿",
    title: "Healthy Plant",
    description:
      "Your plant appears healthy. Continue regular monitoring and good crop care.",
    organic: [
      "Use compost or well-decomposed organic manure.",
      "Maintain proper soil moisture.",
      "Use neem-based products as preventive care when appropriate.",
    ],
    chemical: [
      "No disease treatment is required.",
      "Avoid unnecessary pesticide application.",
      "Use fertilizers based on soil requirements.",
    ],
    care: [
      "Provide adequate sunlight.",
      "Maintain proper irrigation.",
      "Remove weeds regularly.",
    ],
  },

  Potato_Early_blight: {
    icon: "🥔",
    title: "Potato Early Blight",
    description:
      "Early blight commonly causes dark spots and concentric ring patterns on potato leaves.",
    organic: [
      "Remove and destroy severely affected leaves.",
      "Maintain good field sanitation.",
      "Use compost to support overall plant health.",
      "Avoid overhead irrigation whenever possible.",
    ],
    chemical: [
      "Use a fungicide recommended for early blight in your region.",
      "Follow the product label for dosage and application frequency.",
      "Rotate fungicides with different modes of action.",
    ],
    care: [
      "Avoid excessive leaf wetness.",
      "Maintain adequate spacing between plants.",
      "Monitor plants regularly for new symptoms.",
    ],
  },

  Potato_Late_blight: {
    icon: "🥔",
    title: "Potato Late Blight",
    description:
      "Late blight can spread rapidly under cool and humid conditions and may cause dark lesions on leaves.",
    organic: [
      "Remove severely infected plant material.",
      "Keep the field clean from infected debris.",
      "Improve air circulation around plants.",
    ],
    chemical: [
      "Use locally approved late-blight fungicides when necessary.",
      "Start treatment according to local disease warnings.",
      "Always follow label instructions and safety precautions.",
    ],
    care: [
      "Avoid prolonged leaf wetness.",
      "Inspect plants frequently during humid weather.",
      "Do not leave infected crop residues in the field.",
    ],
  },

  Tomato_Bacterial_spot: {
    icon: "🍅",
    title: "Tomato Bacterial Spot",
    description:
      "Bacterial spot can produce small dark lesions on leaves and fruit, especially in warm and wet conditions.",
    organic: [
      "Remove badly infected leaves.",
      "Keep foliage as dry as possible.",
      "Maintain good field sanitation.",
      "Use clean seeds and healthy planting material.",
    ],
    chemical: [
      "Use only locally approved bacterial-spot products.",
      "Copper-based products may be recommended in some production systems.",
      "Follow all product label instructions.",
    ],
    care: [
      "Avoid working with wet plants.",
      "Provide sufficient spacing.",
      "Remove infected plant debris after harvest.",
    ],
  },

  Tomato_Early_blight: {
    icon: "🍅",
    title: "Tomato Early Blight",
    description:
      "Early blight causes dark lesions on older leaves and can gradually reduce plant growth and yield.",
    organic: [
      "Remove infected lower leaves.",
      "Improve air circulation.",
      "Apply compost to maintain soil health.",
      "Use mulch to reduce soil splash onto leaves.",
    ],
    chemical: [
      "Use a fungicide approved for tomato early blight.",
      "Apply according to the recommended schedule.",
      "Rotate fungicide groups to reduce resistance risk.",
    ],
    care: [
      "Water at the base of the plant.",
      "Avoid excessive moisture on foliage.",
      "Remove heavily infected leaves early.",
    ],
  },

  Tomato_Late_blight: {
    icon: "🍅",
    title: "Tomato Late Blight",
    description:
      "Late blight can develop quickly under cool, wet conditions and requires early attention.",
    organic: [
      "Remove infected leaves and plant material.",
      "Improve ventilation between plants.",
      "Keep the field free from infected crop debris.",
    ],
    chemical: [
      "Use locally approved late-blight fungicides.",
      "Begin treatment according to local recommendations.",
      "Follow label dosage and safety instructions carefully.",
    ],
    care: [
      "Avoid overhead irrigation.",
      "Monitor crops frequently during wet weather.",
      "Remove severely infected plants when necessary.",
    ],
  },
};

function Remedies() {
  const [selectedDisease, setSelectedDisease] =
    useState("Tomato_Early_blight");

  const [treatmentStep, setTreatmentStep] = useState(0);

  const disease = diseaseData[selectedDisease];

  useEffect(() => {
    const timer = setInterval(() => {
      setTreatmentStep((previous) => (previous + 1) % 4);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Disease Detected",
      text: "Identify symptoms early.",
    },
    {
      number: "02",
      icon: "💧",
      title: "Treatment Applied",
      text: "Apply the recommended treatment.",
    },
    {
      number: "03",
      icon: "🌱",
      title: "Recovery Begins",
      text: "Monitor the plant closely.",
    },
    {
      number: "04",
      icon: "🌿",
      title: "Plant Recovers",
      text: "Healthy growth gradually returns.",
    },
  ];

  return (
  <div className="remedies-page">

    {/* =====================================================
        HERO
    ====================================================== */}

    <section className="remedies-hero">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <div className="hero-badge">
          <span>🌱</span>
          SMART CROP CARE
        </div>

        <h1>
          Smart Remedies,
          <br />
          <span>Healthier Crops</span>
        </h1>

        <p>
          Get practical treatment guidance for your crops.
          Understand the cause, choose suitable remedies,
          and help your plants recover.
        </p>

        <div className="hero-buttons">

          <Link
            to="/ai-detect"
            className="primary-btn"
          >
            🤖 Detect a Disease
            <span>→</span>
          </Link>

          <Link
            to="/prevention"
            className="secondary-btn"
          >
            🛡️ Prevention Tips
          </Link>

        </div>

        <div className="hero-features">

          <div className="hero-feature">
            <div>🌿</div>
            <span>Natural Care</span>
          </div>

          <div className="hero-feature">
            <div>🧑‍🌾</div>
            <span>Farmer Friendly</span>
          </div>

          <div className="hero-feature">
            <div>📈</div>
            <span>Better Crop Health</span>
          </div>

        </div>

      </div>


      {/* =================================================
          RIGHT SIDE - FARMER WATERING TOMATO PLANT
      ================================================= */}

      <div className="hero-illustration">

        <div className="illustration-glow"></div>

        <img
          src={farmerWateringTomato}
          alt="Farmer watering a tomato plant"
          className="farmer-image"
        />

        <div className="illustration-label">
          <span>💧</span>
          Caring for healthier crops
        </div>

      </div>

    </section>


    {/* =====================================================
        DISEASE SELECTOR
    ====================================================== */}

    <section className="disease-selector-section">

      <div className="selector-card">

        <div className="selector-title">

          <span className="selector-icon">
            {disease.icon}
          </span>

          <div>
            <small>SELECT DETECTED DISEASE</small>
            <h2>Choose a disease</h2>
          </div>

        </div>

        <select
          value={selectedDisease}
          onChange={(event) =>
            setSelectedDisease(event.target.value)
          }
          className="disease-select"
        >

          {Object.keys(diseaseData).map((key) => (
            <option key={key} value={key}>
              {diseaseData[key].title}
            </option>
          ))}

        </select>

      </div>

    </section>

      {/* =====================================================
          DISEASE OVERVIEW
      ====================================================== */}

      <section className="disease-overview">

        <div className="section-heading">

          <span className="section-label">
            UNDERSTAND THE PROBLEM
          </span>

          <h2>
            About <span>{disease.title}</span>
          </h2>

          <p>
            {disease.description}
          </p>

        </div>


        <div className="overview-grid">

          <div className="overview-card cause-card">

            <div className="card-icon">🦠</div>

            <h3>Possible Cause</h3>

            <p>
              Disease development can be influenced by
              weather, moisture, soil conditions, infected
              plant material and poor field sanitation.
            </p>

            <div className="cause-tags">
              <span>💧 Moisture</span>
              <span>🌡️ Weather</span>
              <span>🌱 Crop Stress</span>
            </div>

          </div>


          <div className="overview-card symptom-card">

            <div className="card-icon">🔎</div>

            <h3>What to Observe</h3>

            <ul>

              <li>
                <span>✓</span>
                Spots or lesions on leaves
              </li>

              <li>
                <span>✓</span>
                Yellowing or drying leaves
              </li>

              <li>
                <span>✓</span>
                Reduced plant growth
              </li>

              <li>
                <span>✓</span>
                Changes in fruit or tubers
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* =====================================================
          TREATMENT JOURNEY
      ====================================================== */}

      <section className="treatment-section">

        <div className="section-heading">

          <span className="section-label">
            TREATMENT JOURNEY
          </span>

          <h2>
            From <span>disease</span> to recovery
          </h2>

          <p>
            Follow a simple treatment and monitoring process.
          </p>

        </div>


        <div className="treatment-animation">

          <div className="treatment-plant-area">

            <div
              className={`big-treatment-plant step-${treatmentStep}`}
            >

              <div className="big-stem"></div>

              <div className="big-leaf big-left">
                {treatmentStep < 2 ? "🍂" : "🌿"}
              </div>

              <div className="big-leaf big-right">
                {treatmentStep < 2 ? "🍂" : "🌿"}
              </div>

              <div className="big-leaf big-left-two">
                {treatmentStep < 2 ? "🍂" : "🌿"}
              </div>

              <div className="big-leaf big-right-two">
                {treatmentStep < 2 ? "🍂" : "🌿"}
              </div>

              <div className="plant-pot">
                🌱
              </div>

            </div>

            {treatmentStep === 1 && (
              <div className="treatment-spray">
                💧 💧 💧
              </div>
            )}

          </div>


          <div className="treatment-info">

            <div className="current-treatment">

              <span className="current-icon">
                {steps[treatmentStep].icon}
              </span>

              <div>

                <small>
                  STEP {treatmentStep + 1} OF 4
                </small>

                <h3>
                  {steps[treatmentStep].title}
                </h3>

                <p>
                  {steps[treatmentStep].text}
                </p>

              </div>

            </div>


            <div className="progress-bar">

              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={
                    index <= treatmentStep
                      ? "progress-item active"
                      : "progress-item"
                  }
                >
                  <span>{step.number}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          REMEDIES
      ====================================================== */}

      <section className="recommended-section">

        <div className="section-heading">

          <span className="section-label">
            RECOMMENDED CARE
          </span>

          <h2>
            Treatment options for <span>your crop</span>
          </h2>

          <p>
            Use the following guidance as a starting point.
            Always follow local agricultural recommendations
            and product labels.
          </p>

        </div>


        <div className="remedy-grid">

          {/* ORGANIC */}

          <div className="remedy-card organic">

            <div className="remedy-icon">
              🌿
            </div>

            <div className="remedy-heading">

              <h3>Organic Remedies</h3>

              <span>Natural care</span>

            </div>

            <ul>

              {disease.organic.map((item, index) => (
                <li key={index}>
                  <span>✓</span>
                  {item}
                </li>
              ))}

            </ul>

            <div className="remedy-footer">
              🌱 Eco-friendly approach
            </div>

          </div>


          {/* CHEMICAL */}

          <div className="remedy-card chemical">

            <div className="remedy-icon">
              🧪
            </div>

            <div className="remedy-heading">

              <h3>Chemical Treatment</h3>

              <span>Targeted control</span>

            </div>

            <ul>

              {disease.chemical.map((item, index) => (
                <li key={index}>
                  <span>✓</span>
                  {item}
                </li>
              ))}

            </ul>

            <div className="remedy-footer warning">
              ⚠️ Follow label instructions
            </div>

          </div>


          {/* CARE */}

          <div className="remedy-card care">

            <div className="remedy-icon">
              💧
            </div>

            <div className="remedy-heading">

              <h3>Care & Nutrition</h3>

              <span>Support recovery</span>

            </div>

            <ul>

              {disease.care.map((item, index) => (
                <li key={index}>
                  <span>✓</span>
                  {item}
                </li>
              ))}

            </ul>

            <div className="remedy-footer">
              💚 Improve plant health
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TREATMENT SCHEDULE
      ====================================================== */}

      <section className="schedule-section">

        <div className="schedule-content">

          <span className="section-label">
            SIMPLE ROUTINE
          </span>

          <h2>
            A simple treatment routine
          </h2>

          <p>
            Consistent monitoring is just as important as
            treatment. Follow your local crop advisory
            recommendations for timing and dosage.
          </p>

          <div className="schedule-list">

            <div>
              <strong>01</strong>
              <span>Inspect your crop regularly</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Remove severely affected plant material</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Apply suitable treatment when required</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Monitor recovery and new symptoms</span>
            </div>

          </div>

        </div>


        <div className="calendar-card">

          <div className="calendar-icon">
            📅
          </div>

          <h3>
            Don't miss your next check
          </h3>

          <p>
            Regular crop inspection helps identify
            problems before they spread.
          </p>

          <Link to="/crop-management">
            Crop Management →
          </Link>

        </div>

      </section>


      {/* =====================================================
          FARMER TIPS
      ====================================================== */}

      <section className="farmer-tips">

        <div className="tips-character">
          👨‍🌾
        </div>

        <div className="tips-content">

          <span className="section-label">
            FARMER TIPS
          </span>

          <h2>
            Small actions can make a big difference 🌱
          </h2>

          <div className="tips-grid">

            <div>
              <span>✓</span>
              Identify diseases early
            </div>

            <div>
              <span>✓</span>
              Keep your field clean
            </div>

            <div>
              <span>✓</span>
              Avoid unnecessary pesticide use
            </div>

            <div>
              <span>✓</span>
              Maintain healthy soil
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="remedies-cta">

        <div>

          <span>🌿 CROPCARE AI</span>

          <h2>
            Healthy plants start with
            <br />
            timely care.
          </h2>

          <p>
            Detect a disease and get practical guidance
            for your crop.
          </p>

        </div>


        <Link to="/ai-detect" className="cta-button">
          Check a Leaf
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default Remedies;
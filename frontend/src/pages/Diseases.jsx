import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Diseases.css";

const diseases = [
  {
    id: "healthy",
    crop: "General",
    cropIcon: "🌿",
    name: "Healthy Leaf",
    shortName: "Healthy",
    category: "Healthy",
    severity: "Low Risk",
    severityClass: "low",
    icon: "🌱",
    description:
      "The leaf shows healthy characteristics with no major visible disease symptoms.",
    symptoms: [
      "Natural green leaf color",
      "No major spots or lesions",
      "Normal leaf structure",
      "Healthy plant appearance",
    ],
    cause:
      "No visible disease symptoms were detected. Good crop care should be continued.",
    remedy:
      "Continue proper irrigation, nutrition and regular crop monitoring.",
    prevention:
      "Maintain field hygiene, balanced nutrition, proper spacing and regular inspection.",
  },

  {
    id: "potato-early",
    crop: "Potato",
    cropIcon: "🥔",
    name: "Potato Early Blight",
    shortName: "Early Blight",
    category: "Potato",
    severity: "Moderate",
    severityClass: "moderate",
    icon: "🥔",
    description:
      "A common fungal disease of potato that produces characteristic leaf spots and may reduce crop productivity.",
    symptoms: [
      "Dark circular leaf spots",
      "Concentric ring patterns",
      "Yellowing around affected areas",
      "Premature leaf loss",
    ],
    cause:
      "Commonly associated with the fungus Alternaria solani. Warm conditions, moisture and plant stress can favor infection.",
    remedy:
      "Remove severely infected leaves, improve field sanitation and follow locally recommended fungicide practices.",
    prevention:
      "Use healthy planting material, rotate crops, maintain proper spacing and avoid prolonged leaf wetness.",
  },

  {
    id: "potato-late",
    crop: "Potato",
    cropIcon: "🥔",
    name: "Potato Late Blight",
    shortName: "Late Blight",
    category: "Potato",
    severity: "High",
    severityClass: "high",
    icon: "🥔",
    description:
      "A potentially destructive disease that can spread rapidly under cool and wet conditions.",
    symptoms: [
      "Dark irregular leaf lesions",
      "Brown or black patches",
      "Rapid leaf damage",
      "White growth may appear under humid conditions",
    ],
    cause:
      "Caused by Phytophthora infestans and strongly favored by cool, wet weather.",
    remedy:
      "Remove severely affected plant material and follow locally recommended late-blight management practices.",
    prevention:
      "Use disease-free seed, monitor weather conditions, maintain airflow and reduce prolonged leaf wetness.",
  },

  {
    id: "tomato-bacterial",
    crop: "Tomato",
    cropIcon: "🍅",
    name: "Tomato Bacterial Spot",
    shortName: "Bacterial Spot",
    category: "Tomato",
    severity: "Moderate",
    severityClass: "moderate",
    icon: "🍅",
    description:
      "A bacterial disease that can affect tomato leaves, stems and fruits and may reduce crop quality.",
    symptoms: [
      "Small dark leaf spots",
      "Yellowing around lesions",
      "Leaf damage",
      "Dark spots may appear on fruits",
    ],
    cause:
      "Associated with Xanthomonas bacteria. Wet weather and contaminated plant material can increase spread.",
    remedy:
      "Remove heavily affected material, avoid handling wet plants and follow locally recommended management practices.",
    prevention:
      "Use clean seeds and seedlings, maintain field hygiene and avoid unnecessary overhead irrigation.",
  },

  {
    id: "tomato-early",
    crop: "Tomato",
    cropIcon: "🍅",
    name: "Tomato Early Blight",
    shortName: "Early Blight",
    category: "Tomato",
    severity: "Moderate",
    severityClass: "moderate",
    icon: "🍅",
    description:
      "A common fungal disease that produces leaf spots and may cause premature leaf loss in tomato plants.",
    symptoms: [
      "Brown circular spots",
      "Concentric ring patterns",
      "Yellowing leaves",
      "Lower leaves affected first",
    ],
    cause:
      "Commonly associated with Alternaria solani. Warm temperatures, moisture and plant stress can favor disease development.",
    remedy:
      "Remove infected leaves, improve airflow and use appropriate fungicide recommendations when required.",
    prevention:
      "Practice crop rotation, maintain plant spacing, remove crop debris and reduce prolonged leaf wetness.",
  },

  {
    id: "tomato-late",
    crop: "Tomato",
    cropIcon: "🍅",
    name: "Tomato Late Blight",
    shortName: "Late Blight",
    category: "Tomato",
    severity: "High",
    severityClass: "high",
    icon: "🍅",
    description:
      "A rapidly spreading disease that can seriously affect tomato crops during cool and humid weather.",
    symptoms: [
      "Large dark leaf patches",
      "Rapid browning of leaves",
      "Water-soaked appearance",
      "Rapid plant deterioration",
    ],
    cause:
      "Caused by Phytophthora infestans and favored by cool, wet conditions.",
    remedy:
      "Remove severely affected material and follow locally recommended late-blight management practices.",
    prevention:
      "Maintain good airflow, monitor weather, avoid prolonged leaf wetness and use healthy planting material.",
  },
];

function Diseases() {
  const navigate = useNavigate();
  const location = useLocation();

  const detectedDisease = location.state?.disease || "";

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(
    detectedDisease.includes("Potato")
      ? "Potato"
      : detectedDisease.includes("Tomato")
        ? "Tomato"
        : "All"
  );

  const [selectedDisease, setSelectedDisease] = useState(null);

  const filteredDiseases = useMemo(() => {
    return diseases.filter((disease) => {
      const matchesFilter =
        filter === "All" ||
        disease.category === filter ||
        (filter === "Healthy" && disease.category === "Healthy");

      const searchText = search.toLowerCase();

      const matchesSearch =
        disease.name.toLowerCase().includes(searchText) ||
        disease.crop.toLowerCase().includes(searchText) ||
        disease.description.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [search, filter]);

  const openDetails = (disease) => {
    setSelectedDisease(disease);
  };

  const closeDetails = () => {
    setSelectedDisease(null);
  };

  return (
    <div className="diseases-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="diseases-hero">

        <div className="hero-content">

          <span className="hero-eyebrow">
            🌿 CROP HEALTH LIBRARY
          </span>

          <h1>
            Know the disease.
            <br />
            <span>Protect your crop.</span>
          </h1>

          <p>
            Explore common crop diseases detected by our AI model.
            Learn their symptoms, causes, remedies and prevention
            methods to make better farming decisions.
          </p>

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>06</strong>
              <span>AI Diseases</span>
            </div>

            <div className="stat-divider"></div>

            <div className="hero-stat">
              <strong>02</strong>
              <span>Major Crops</span>
            </div>

            <div className="stat-divider"></div>

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Knowledge Access</span>
            </div>

          </div>

        </div>

        <div className="hero-decoration">
          <div className="hero-circle circle-one"></div>
          <div className="hero-circle circle-two"></div>
          <div className="hero-leaf">🌿</div>
          <div className="hero-tomato">🍅</div>
          <div className="hero-potato">🥔</div>
        </div>

      </section>


      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}

      <section className="disease-library">

        <div className="library-header">

          <div>
            <span className="section-label">
              DISEASE LIBRARY
            </span>

            <h2>
              Explore crop diseases
            </h2>

            <p>
              Select a crop or search for a specific disease.
            </p>
          </div>

          <div className="search-box">

            <span>🔎</span>

            <input
              type="text"
              placeholder="Search disease..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button onClick={() => setSearch("")}>
                ×
              </button>
            )}

          </div>

        </div>


        {/* FILTERS */}

        <div className="filter-row">

          <button
            className={filter === "All" ? "filter active" : "filter"}
            onClick={() => setFilter("All")}
          >
            🌎 All
          </button>

          <button
            className={filter === "Tomato" ? "filter active" : "filter"}
            onClick={() => setFilter("Tomato")}
          >
            🍅 Tomato
          </button>

          <button
            className={filter === "Potato" ? "filter active" : "filter"}
            onClick={() => setFilter("Potato")}
          >
            🥔 Potato
          </button>

          <button
            className={filter === "Healthy" ? "filter active" : "filter"}
            onClick={() => setFilter("Healthy")}
          >
            🌱 Healthy
          </button>

        </div>


        {/* DETECTED MESSAGE */}

        {detectedDisease && (
          <div className="detected-message">

            <div className="detected-icon">
              🤖
            </div>

            <div>
              <strong>AI Detection Result</strong>

              <p>
                Your AI analysis detected{" "}
                <b>
                  {detectedDisease.replaceAll("_", " ")}
                </b>
                . Related information is highlighted below.
              </p>
            </div>

            <button
              onClick={() => setSearch(detectedDisease.replaceAll("_", " "))}
            >
              Find Disease
            </button>

          </div>
        )}


        {/* =================================================
            DISEASE CARDS
        ================================================= */}

        {filteredDiseases.length > 0 ? (

          <div className="disease-grid">

            {filteredDiseases.map((disease) => (

              <article
                className="disease-card"
                key={disease.id}
              >

                <div className="disease-card-top">

                  <div className="crop-icon">
                    {disease.icon}
                  </div>

                  <span
                    className={`severity ${disease.severityClass}`}
                  >
                    {disease.severity}
                  </span>

                </div>


                <div className="crop-name">
                  {disease.cropIcon} {disease.crop}
                </div>


                <h3>
                  {disease.name}
                </h3>


                <p className="card-description">
                  {disease.description}
                </p>


                <div className="symptoms">

                  <span>
                    👀 Common symptoms
                  </span>

                  <ul>

                    {disease.symptoms
                      .slice(0, 2)
                      .map((symptom, index) => (
                        <li key={index}>
                          {symptom}
                        </li>
                      ))}

                  </ul>

                </div>


                <div className="card-footer">

                  <button
                    className="details-button"
                    onClick={() => openDetails(disease)}
                  >
                    View Details
                    <span>→</span>
                  </button>

                  <button
                    className="remedy-mini"
                    onClick={() =>
                      navigate("/remedies", {
                        state: {
                          disease: disease.name,
                        },
                      })
                    }
                  >
                    💊
                  </button>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div>🌱</div>

            <h3>No diseases found</h3>

            <p>
              Try searching for tomato, potato or another disease.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
            >
              Show All Diseases
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          FARMER TIP
      ===================================================== */}

      <section className="disease-tip">

        <div className="tip-icon">
          💡
        </div>

        <div className="tip-content">

          <span>FARMER TIP</span>

          <h2>
            Early detection can make a difference
          </h2>

          <p>
            Regularly inspect the leaves, stems and fruits of
            your crops. If you notice unusual spots, discoloration
            or rapid changes, use the AI Detect feature to get
            an initial assessment.
          </p>

        </div>

        <button
          onClick={() => navigate("/ai-detect")}
        >
          Analyze a Leaf →
        </button>

      </section>


      {/* =====================================================
          DETAILS MODAL
      ===================================================== */}

      {selectedDisease && (

        <div
          className="modal-overlay"
          onClick={closeDetails}
        >

          <div
            className="disease-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closeDetails}
            >
              ×
            </button>


            <div className="modal-heading">

              <div className="modal-icon">
                {selectedDisease.icon}
              </div>

              <div>

                <span>
                  {selectedDisease.crop}
                </span>

                <h2>
                  {selectedDisease.name}
                </h2>

                <div
                  className={`severity ${selectedDisease.severityClass}`}
                >
                  {selectedDisease.severity}
                </div>

              </div>

            </div>


            <p className="modal-description">
              {selectedDisease.description}
            </p>


            <div className="modal-section">

              <div className="modal-section-icon">
                👀
              </div>

              <div>
                <h3>Symptoms</h3>

                <ul>
                  {selectedDisease.symptoms.map(
                    (symptom, index) => (
                      <li key={index}>
                        {symptom}
                      </li>
                    )
                  )}
                </ul>
              </div>

            </div>


            <div className="modal-section">

              <div className="modal-section-icon">
                🔬
              </div>

              <div>
                <h3>Cause</h3>

                <p>
                  {selectedDisease.cause}
                </p>
              </div>

            </div>


            <div className="modal-section remedy-modal">

              <div className="modal-section-icon">
                💊
              </div>

              <div>
                <h3>Remedy</h3>

                <p>
                  {selectedDisease.remedy}
                </p>
              </div>

            </div>


            <div className="modal-section prevention-modal">

              <div className="modal-section-icon">
                🛡️
              </div>

              <div>
                <h3>Prevention</h3>

                <p>
                  {selectedDisease.prevention}
                </p>
              </div>

            </div>


            <div className="modal-actions">

              <button
                onClick={() =>
                  navigate("/remedies", {
                    state: {
                      disease: selectedDisease.name,
                    },
                  })
                }
              >
                💊 Explore Remedies
              </button>

              <button
                onClick={() =>
                  navigate("/prevention", {
                    state: {
                      disease: selectedDisease.name,
                    },
                  })
                }
              >
                🛡️ Prevention Guide
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Diseases;
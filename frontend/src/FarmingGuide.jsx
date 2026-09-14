import React from "react";

function FarmingGuide() {
  const farmingTopics = [
    {
      icon: "🌱",
      title: "Choose the Right Crop",
      text: "Select crops based on soil type, season, water availability and local climate.",
      tips: [
        "Check soil condition before planting",
        "Consider the current growing season",
        "Choose varieties suitable for your region"
      ]
    },
    {
      icon: "🧪",
      title: "Fertilizer Management",
      text: "Use fertilizers carefully according to crop requirements and soil conditions.",
      tips: [
        "Prefer soil testing before fertilizer application",
        "Avoid excessive fertilizer use",
        "Combine organic matter with appropriate nutrients"
      ]
    },
    {
      icon: "💧",
      title: "Water Management",
      text: "Efficient irrigation helps crops grow while reducing unnecessary water usage.",
      tips: [
        "Water according to crop growth stage",
        "Avoid waterlogging",
        "Use drip or other efficient irrigation methods where suitable"
      ]
    },
    {
      icon: "🌿",
      title: "Organic Farming",
      text: "Organic practices can improve soil health and support sustainable agriculture.",
      tips: [
        "Use compost and well-decomposed organic matter",
        "Practice crop rotation",
        "Maintain soil cover where practical"
      ]
    },
    {
      icon: "🐛",
      title: "Pest Management",
      text: "Regular monitoring helps identify pest problems before they become severe.",
      tips: [
        "Inspect leaves regularly",
        "Remove heavily affected plant parts when appropriate",
        "Use integrated pest management practices"
      ]
    },
    {
      icon: "🌾",
      title: "Crop Rotation",
      text: "Rotating different crops can help maintain soil productivity and reduce some pest and disease pressure.",
      tips: [
        "Avoid growing the same crop repeatedly",
        "Include suitable legumes where appropriate",
        "Plan rotation according to local conditions"
      ]
    },
    {
      icon: "☀️",
      title: "Season Planning",
      text: "Good planning before sowing can reduce risks and improve crop management.",
      tips: [
        "Consider seasonal weather patterns",
        "Plan irrigation requirements",
        "Keep seeds and inputs ready before planting"
      ]
    },
    {
      icon: "📦",
      title: "Harvest & Storage",
      text: "Proper harvesting and storage can reduce post-harvest losses.",
      tips: [
        "Harvest at the appropriate maturity stage",
        "Handle crops carefully",
        "Keep storage areas clean and dry"
      ]
    }
  ];

  return (
    <div className="farming-page">

      {/* HERO */}
      <section className="farming-hero">
        <div className="farming-badge">
          🌾 FARMER'S GUIDE
        </div>

        <h1>
          Grow Smarter.
          <br />
          Farm Better.
        </h1>

        <p>
          Practical farming knowledge to help you manage crops,
          soil, water, fertilizers and common agricultural challenges.
        </p>
      </section>

      {/* QUICK IDEAS */}
      <section className="quick-section">

        <div className="section-heading">
          <span>SMART FARMING</span>
          <h2>Simple ideas for better farming</h2>
          <p>
            Use these basic practices as a starting point for planning
            and managing your crops.
          </p>
        </div>

        <div className="farming-grid">

          {farmingTopics.map((topic, index) => (
            <div className="farming-card" key={index}>

              <div className="topic-icon">
                {topic.icon}
              </div>

              <h3>{topic.title}</h3>

              <p>
                {topic.text}
              </p>

              <ul>
                {topic.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>
                    ✓ {tip}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </section>

      {/* FERTILIZER SECTION */}
      <section className="fertilizer-section">

        <div className="fertilizer-content">

          <div className="fertilizer-icon">
            🧪
          </div>

          <div>
            <span className="small-title">
              FERTILIZER BASICS
            </span>

            <h2>
              Understand NPK
            </h2>

            <p>
              Fertilizers commonly provide nutrients such as Nitrogen,
              Phosphorus and Potassium. The correct nutrient requirement
              depends on the crop, soil and growth stage.
            </p>

            <div className="npk-grid">

              <div>
                <strong>N</strong>
                <h4>Nitrogen</h4>
                <p>
                  Supports leafy and vegetative growth.
                </p>
              </div>

              <div>
                <strong>P</strong>
                <h4>Phosphorus</h4>
                <p>
                  Supports root development and reproductive growth.
                </p>
              </div>

              <div>
                <strong>K</strong>
                <h4>Potassium</h4>
                <p>
                  Supports overall plant strength and development.
                </p>
              </div>

            </div>

            <div className="important-note">
              ⚠️ Always consider soil-test recommendations,
              crop requirements and the fertilizer label before application.
            </div>

          </div>

        </div>

      </section>

      {/* FARMER CHECKLIST */}
      <section className="checklist-section">

        <div className="section-heading">
          <span>FARMER CHECKLIST</span>
          <h2>Before planting your crop</h2>
        </div>

        <div className="checklist">

          <div>✓ Check soil condition</div>
          <div>✓ Select suitable seeds</div>
          <div>✓ Plan irrigation</div>
          <div>✓ Prepare organic matter</div>
          <div>✓ Monitor pests regularly</div>
          <div>✓ Keep farm records</div>
          <div>✓ Plan harvesting</div>
          <div>✓ Prepare storage facilities</div>

        </div>

      </section>

    </div>
  );
}

export default FarmingGuide;
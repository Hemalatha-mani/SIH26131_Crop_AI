import React from "react";
import { Link } from "react-router-dom";
import "./FarmingGuide.css";
import farmingImage from "../assets/images/farming-guide.png";

function FarmingGuide() {
  return (
    <div className="farming-page">

      {/* ================= HERO ================= */}

      <section className="farming-hero">

        {/* LEFT CONTENT */}
        <div className="farming-hero-content">

          <span className="farming-badge">
            🌱 SMART FARMING GUIDE
          </span>

          <h1>
            Grow Better.
            <br />
            <span>Farm Smarter.</span>
          </h1>

          <p>
            Practical farming knowledge for healthier crops,
            better soil, efficient fertilizer use and improved
            farm productivity.
          </p>

          <div className="farming-buttons">

            <Link to="/crop-management" className="farming-primary-btn">
              🌾 Manage Your Crops
              <span>→</span>
            </Link>

            <Link to="/prevention" className="farming-secondary-btn">
              🛡️ Prevention Tips
            </Link>

          </div>

          {/* SMALL FEATURES */}

          <div className="farming-mini-features">

            <div className="mini-feature">
              
              <div>
                <strong>Healthy Soil</strong>
                <span>Build soil fertility</span>
              </div>
            </div>

            <div className="mini-feature">
              <div className="mini-icon">💧</div>
              <div>
                <strong>Smart Watering</strong>
                <span>Use water efficiently</span>
              </div>
            </div>

            <div className="mini-feature">
              <div className="mini-icon">🌾</div>
              <div>
                <strong>Better Yield</strong>
                <span>Improve crop growth</span>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="farming-hero-image">

          <div className="image-glow"></div>

          <img
            src={farmingImage}
            alt="Farmer working in a green agricultural field"
          />

          <div className="image-info-card">
            <span className="info-icon">🌿</span>

            <div>
              <strong>Smart Agriculture</strong>
              <p>Healthy crops • Healthy soil</p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= QUICK GUIDE ================= */}

      <section className="quick-guide">

        <div className="guide-heading">
          <span>FARMER'S TOOLKIT</span>

          <h2>
            Everything you need to
            <br />
            <strong>grow with confidence.</strong>
          </h2>

          <p>
            Follow simple farming practices throughout the
            crop cycle to maintain healthy and productive plants.
          </p>
        </div>


        <div className="guide-cards">

          {/* SOIL */}

          <div className="guide-card">

            <div className="guide-card-icon soil">
              🌱
            </div>

            <h3>Prepare Your Soil</h3>

            <p>
              Start with healthy soil. Remove weeds, add
              suitable organic matter and maintain good soil
              structure.
            </p>

            <ul>
              <li>✓ Test soil when possible</li>
              <li>✓ Add organic manure</li>
              <li>✓ Maintain soil moisture</li>
            </ul>

          </div>


          {/* SEEDS */}

          <div className="guide-card">

            <div className="guide-card-icon seed">
              🌾
            </div>

            <h3>Choose Good Seeds</h3>

            <p>
              Select healthy, quality seeds suitable for your
              local climate, soil and growing season.
            </p>

            <ul>
              <li>✓ Use healthy seeds</li>
              <li>✓ Select suitable varieties</li>
              <li>✓ Check seed quality</li>
            </ul>

          </div>


          {/* WATER */}

          <div className="guide-card">

            <div className="guide-card-icon water">
              💧
            </div>

            <h3>Water Wisely</h3>

            <p>
              Provide adequate water according to crop needs
              while avoiding excessive irrigation.
            </p>

            <ul>
              <li>✓ Water near the root zone</li>
              <li>✓ Avoid waterlogging</li>
              <li>✓ Monitor soil moisture</li>
            </ul>

          </div>


          {/* FERTILIZER */}

          <div className="guide-card">

            <div className="guide-card-icon fertilizer">
              🧪
            </div>

            <h3>Use Fertilizers Carefully</h3>

            <p>
              Apply fertilizers according to crop requirements
              and soil conditions instead of overusing them.
            </p>

            <ul>
              <li>✓ Prefer soil-based recommendations</li>
              <li>✓ Apply correct quantities</li>
              <li>✓ Avoid unnecessary application</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= CROP CYCLE ================= */}

      <section className="crop-cycle-section">

        <div className="cycle-text">

          <span className="section-label">
            CROP GROWTH CYCLE
          </span>

          <h2>
            Care for your crop at
            <br />
            <span>every stage.</span>
          </h2>

          <p>
            Different stages of crop growth need different
            types of care. Keep monitoring your plants from
            seedling to harvest.
          </p>

        </div>


        <div className="crop-cycle">

          <div className="cycle-item">

            <div className="cycle-number">01</div>

            <div className="cycle-icon">
              🌱
            </div>

            <h3>Seedling</h3>

            <p>
              Protect young plants and provide suitable
              moisture and sunlight.
            </p>

          </div>


          <div className="cycle-line"></div>


          <div className="cycle-item">

            <div className="cycle-number">02</div>

            <div className="cycle-icon">
              🌿
            </div>

            <h3>Vegetative</h3>

            <p>
              Support healthy leaves and stems with proper
              nutrition and irrigation.
            </p>

          </div>


          <div className="cycle-line"></div>


          <div className="cycle-item">

            <div className="cycle-number">03</div>

            <div className="cycle-icon">
              🌼
            </div>

            <h3>Flowering</h3>

            <p>
              Monitor plants carefully and protect them from
              pests and diseases.
            </p>

          </div>


          <div className="cycle-line"></div>


          <div className="cycle-item">

            <div className="cycle-number">04</div>

            <div className="cycle-icon">
              🍅
            </div>

            <h3>Fruiting</h3>

            <p>
              Maintain balanced crop care until fruits reach
              the appropriate harvest stage.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FERTILIZER GUIDE ================= */}

      <section className="fertilizer-section">

        <div className="fertilizer-heading">

          <span className="section-label">
            FERTILIZER GUIDE
          </span>

          <h2>
            Feed your crops,
            <br />
            <span>not your problems.</span>
          </h2>

          <p>
            Fertilizers provide nutrients needed for plant
            growth. The right product and quantity depend
            on the crop and soil.
          </p>

        </div>


        <div className="fertilizer-cards">

          <div className="nutrient-card nitrogen">

            <div className="nutrient-symbol">
              N
            </div>

            <div>
              <h3>Nitrogen</h3>

              <p>
                Supports leafy and vegetative growth.
              </p>

              <span>
                🌿 Leaf growth
              </span>
            </div>

          </div>


          <div className="nutrient-card phosphorus">

            <div className="nutrient-symbol">
              P
            </div>

            <div>
              <h3>Phosphorus</h3>

              <p>
                Supports roots, flowering and plant development.
              </p>

              <span>
                🌱 Root development
              </span>
            </div>

          </div>


          <div className="nutrient-card potassium">

            <div className="nutrient-symbol">
              K
            </div>

            <div>
              <h3>Potassium</h3>

              <p>
                Supports overall plant strength and crop quality.
              </p>

              <span>
                🍅 Crop quality
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SMART FARMING TIPS ================= */}

      <section className="smart-tips">

        <div className="tips-title">

          <span className="section-label">
            SMART FARMING
          </span>

          <h2>
            Simple habits.
            <br />
            <span>Better farming.</span>
          </h2>

        </div>


        <div className="tips-list">

          <div className="smart-tip">
            <span>01</span>
            <div>
              <h3>Inspect crops regularly</h3>
              <p>
                Look for unusual spots, insects, yellowing,
                wilting or changes in plant growth.
              </p>
            </div>
          </div>


          <div className="smart-tip">
            <span>02</span>
            <div>
              <h3>Keep the field clean</h3>
              <p>
                Remove weeds and severely affected plant
                material to reduce possible disease spread.
              </p>
            </div>
          </div>


          <div className="smart-tip">
            <span>03</span>
            <div>
              <h3>Record your crop activities</h3>
              <p>
                Keep track of planting, irrigation, fertilizer
                application and disease observations.
              </p>
            </div>
          </div>


          <div className="smart-tip">
            <span>04</span>
            <div>
              <h3>Use AI when you need help</h3>
              <p>
                Upload a crop leaf to CropCare AI when you
                notice suspicious symptoms.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="farming-cta">

        <div>

          <span>🌱 CROPCARE AI</span>

          <h2>
            Your farm.
            <br />
            Your knowledge.
            <br />
            Better crops.
          </h2>

          <p>
            Combine practical farming knowledge with
            AI-powered crop disease detection.
          </p>

        </div>


        <div className="cta-actions">

          <Link to="/ai-detect" className="cta-main">
            🤖 Check a Leaf
            <span>→</span>
          </Link>

          <Link to="/crop-management" className="cta-outline">
            Crop Management
          </Link>

        </div>

      </section>

    </div>
  );
}

export default FarmingGuide;
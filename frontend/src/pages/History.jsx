import React, { useEffect, useState } from "react";
import axios from "axios";
import "./History.css";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/history`);
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="history-page">

      <div className="history-header">
        <span className="section-label">YOUR ACTIVITY</span>

        <h1>
          Detection <span>History</span>
        </h1>

        <p>
          View your previous crop disease detection results
          and track crop health over time.
        </p>
      </div>

      {loading ? (
        <div className="history-loading">
          Loading your detection history...
        </div>
      ) : history.length === 0 ? (
        <div className="empty-history">
          <div className="empty-icon">🌱</div>

          <h2>No detections yet</h2>

          <p>
            Upload a crop leaf image using AI Detect to see
            your results here.
          </p>
        </div>
      ) : (
        <div className="history-list">

          {history.map((item) => (
            <div className="history-card" key={item.id}>

              <div className="history-icon">
                {item.disease === "Healthy" ? "🌿" : "🦠"}
              </div>

              <div className="history-info">
                <h3>
                  {item.disease.replaceAll("_", " ")}
                </h3>

                <p>
                  {item.image_name || "Leaf image"}
                </p>
              </div>

              <div className="history-confidence">
                <strong>
                  {Number(item.confidence).toFixed(2)}%
                </strong>

                <span>Confidence</span>
              </div>

              <div className="history-date">
                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : "-"}
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default History;

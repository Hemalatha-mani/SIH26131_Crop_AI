import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChatHistory.css";

function ChatHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/chat-history"
      );

      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-history-page">

      <div className="chat-history-header">
        <span className="section-label">
          YOUR ACTIVITY
        </span>

        <h1>
          Chat <span>History</span>
        </h1>

        <p>
          View your previous questions and CropCare AI responses.
        </p>
      </div>

      {loading ? (
        <div className="chat-history-loading">
          Loading your chat history...
        </div>
      ) : history.length === 0 ? (
        <div className="empty-chat-history">

          <div className="empty-chat-icon">
            💬
          </div>

          <h2>No chat history yet</h2>

          <p>
            Ask a question to CropCare AI and your conversation
            will appear here.
          </p>

        </div>
      ) : (
        <div className="chat-history-list">

          {history.map((item) => (

            <div
              className="chat-history-card"
              key={item.id}
            >

              <div className="question-section">

                <div className="chat-icon">
                  👤
                </div>

                <div>
                  <span className="chat-label">
                    YOUR QUESTION
                  </span>

                  <p className="question-text">
                    {item.question}
                  </p>
                </div>

              </div>

              <div className="answer-section">

                <div className="chat-icon bot-icon">
                  🌱
                </div>

                <div>
                  <span className="chat-label">
                    CROPCARE AI
                  </span>

                  <p className="answer-text">
                    {item.answer}
                  </p>
                </div>

              </div>

              <div className="chat-history-date">
                {item.created_at
                  ? new Date(
                      item.created_at
                    ).toLocaleString()
                  : "-"}
              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default ChatHistory;
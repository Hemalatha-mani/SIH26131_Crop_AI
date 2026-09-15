import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! 🌱 I am CropCare AI. Ask me about crop diseases, prevention, watering, plant health, or farming guidance."
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sendQuestion = async (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    const userQuestion = question.trim();

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userQuestion
      }
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/chat`,
        {
          question: userQuestion
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: response.data.answer
        }
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Sorry, I could not connect to the CropCare AI server. Please make sure the backend is running."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-page">

      <div className="chatbot-header">
        <span className="section-label">CROPCARE AI</span>

        <h1>
          AI <span>Chatbot</span>
        </h1>

        <p>
          Get simple guidance about crop diseases, prevention,
          watering and plant health.
        </p>
      </div>

      <div className="chatbot-container">

        <div className="chatbot-top">
          <div className="bot-avatar">🌱</div>

          <div>
            <h2>CropCare Assistant</h2>
            <span className="online-status">
              ● Online
            </span>
          </div>
        </div>

        <div className="chat-messages">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${message.type}`}
            >

              {message.type === "bot" && (
                <div className="small-avatar">
                  🌱
                </div>
              )}

              <div className="message">
                {message.text}
              </div>

            </div>
          ))}

          {loading && (
            <div className="message-row bot">
              <div className="small-avatar">
                🌱
              </div>

              <div className="message typing">
                CropCare AI is typing...
              </div>
            </div>
          )}

        </div>

        <form
          className="chat-input-area"
          onSubmit={sendQuestion}
        >
          <input
            type="text"
            placeholder="Ask about crop diseases..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !question.trim()}
          >
            Send
          </button>
        </form>

      </div>

      <div className="suggestions">

        <button
          onClick={() =>
            setQuestion("How can I prevent crop diseases?")
          }
        >
          🛡️ Disease prevention
        </button>

        <button
          onClick={() =>
            setQuestion("How should I water my crops?")
          }
        >
          💧 Crop watering
        </button>

        <button
          onClick={() =>
            setQuestion("What is early blight?")
          }
        >
          🍃 Early blight
        </button>

        <button
          onClick={() =>
            setQuestion("How can I keep my crops healthy?")
          }
        >
          🌱 Plant health
        </button>

      </div>

    </div>
  );
}

export default Chatbot;

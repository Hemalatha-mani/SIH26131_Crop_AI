import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import AIDetect from "./pages/AIDetect";
import Diseases from "./pages/Diseases";
import Remedies from "./pages/Remedies";
import Prevention from "./pages/Prevention";
import FarmingGuide from "./pages/FarmingGuide";
import CropManagement from "./pages/CropManagement";
import History from "./pages/History";
import Chatbot from "./pages/Chatbot";
import ChatHistory from "./pages/ChatHistory";
import "./App.css";


// Protect all pages except Login
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("cropcare_logged_in");

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Routes>

          {/* ================= LOGIN ================= */}
          <Route
            path="/login"
            element={<Login />}
          />


          {/* ================= HOME / DASHBOARD ================= */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <Home />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />


          {/* ================= AI DETECT ================= */}
          <Route
            path="/detect"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <AIDetect />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />


          {/* ================= DISEASES ================= */}
          <Route
            path="/diseases"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <Diseases />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />


          {/* ================= REMEDIES ================= */}
          <Route
            path="/remedies"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <Remedies />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />


          {/* ================= PREVENTION ================= */}
          <Route
            path="/prevention"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <Prevention />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />


          {/* ================= FARMING GUIDE ================= */}
          <Route
            path="/farming-guide"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <FarmingGuide />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />


          {/* ================= CROP MANAGEMENT ================= */}
          <Route
            path="/crop-management"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <CropManagement />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
{/* ================= HISTORY ================= */}
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />

                  <main className="app-main">
                    <History />
                  </main>

                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
{/* ================= CHATBOT ================= */}
          <Route
  path="/chatbot"
  element={
    <ProtectedRoute>
      <>
        <Navbar />
        <main className="app-main">
          <Chatbot />
        </main>
        <Footer />
      </>
    </ProtectedRoute>
  }
/>
{/* ================= CHATBOT HISTORY ================= */}
<Route
  path="/chat-history"
  element={
    <ProtectedRoute>
      <>
        <Navbar />
        <main className="app-main">
          <ChatHistory />
        </main>
        <Footer />
      </>
    </ProtectedRoute>
  }
/>

          {/* ================= UNKNOWN URL ================= */}
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />

        </Routes>
        

      </div>

    </BrowserRouter>
  );
}

export default App;
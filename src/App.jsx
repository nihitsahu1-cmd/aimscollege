import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Popup from "./components/Popup";

function App() {
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("aimcollege-theme") === "dark";
  });

  // Dark / Light Mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);

    localStorage.setItem(
      "aimcollege-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  // Theme Toggle
  const toggleTheme = () => {
    setIsDarkMode((current) => !current);
  };

  // Popup sirf main website par show hoga
  const showPopup = location.pathname === "/";

  return (
    <div className="app-shell">

      {/* Admission Popup */}
      {showPopup && <Popup />}

      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <Home
              isDarkMode={isDarkMode}
              onToggleTheme={toggleTheme}
            />
          }
        />

        {/* ================= LOGIN ================= */}
        <Route
          path="/login"
          element={
            <Login
              isDarkMode={isDarkMode}
              onToggleTheme={toggleTheme}
            />
          }
        />

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route
          path="/admin"
          element={
            <AdminDashboard
              isDarkMode={isDarkMode}
              onToggleTheme={toggleTheme}
            />
          }
        />

        {/* ================= 404 / OTHER URL ================= */}
        <Route
          path="*"
          element={
            <Home
              isDarkMode={isDarkMode}
              onToggleTheme={toggleTheme}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;


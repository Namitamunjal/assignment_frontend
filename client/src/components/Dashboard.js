import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import RepositoryList from "./RepositoryList";
import "./Dashboard.css";

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen width and adjust the sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
        setIsSidebarVisible(false); // Hide sidebar in mobile view by default
      } else {
        setIsMobileView(false);
        setIsSidebarVisible(true); // Show sidebar in normal view
      }
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="dashboard-container">
        {/* Hamburger Menu */}
        {isMobileView && (
          <button className="hamburger-menu" onClick={toggleSidebar}>
            {isSidebarVisible ? "✖" : "☰"}
          </button>
        )}

        {/* Sidebar */}
        {isSidebarVisible && <Sidebar />}

        {/* Main Content */}
        <div className={`dashboard-content ${isSidebarVisible && isMobileView ? "blurred" : ""}`}>
          <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route path="/repositories" element={<RepositoryList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;

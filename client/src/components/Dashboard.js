import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import RepositoryList from "./RepositoryList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route path="/repositories" element={<RepositoryList />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;

import React from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <Icon icon="mdi:ant-outline" className="sidebar-icon" />
        <span className="sidebar-title">CodeAnt AI</span>
      </div>

      {/* Dropdown Section */}
      <div className="sidebar-dropdown">
        <select
          name="userSelection"
          id="userSelection"
          className="dropdown-select"
        >
          <option value="namita">Namita Munjal</option>
        </select>
      </div>

      {/* Navigation Section */}
      <nav className="sidebar-nav">
        <a href="/" className="nav-link nav-active">
          <Icon icon="mdi:home-outline" className="nav-icon" />
          <span>Repositories</span>
        </a>
        <a href="/code-review" className="nav-link">
          <Icon icon="mdi:code-braces" className="nav-icon" />
          <span>AI Code Review</span>
        </a>
        <a href="/cloud-security" className="nav-link">
          <Icon icon="mdi:cloud-outline" className="nav-icon" />
          <span>Cloud Security</span>
        </a>
        <a href="/how-to-use" className="nav-link">
          <Icon icon="mdi:help-circle-outline" className="nav-icon" />
          <span>How to Use</span>
        </a>
        <a href="/settings" className="nav-link">
          <Icon icon="mdi:cog-outline" className="nav-icon" />
          <span>Settings</span>
        </a>
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <a href="/support" className="nav-link">
          <Icon icon="mdi:phone-outline" className="nav-icon" />
          <span>Support</span>
        </a>
        <a href="/logout" className="nav-link">
          <Icon icon="mdi:logout" className="nav-icon" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

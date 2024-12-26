import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.css";
import logo from "../assets/Picture1.png"
import { FaBook } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to control the hamburger menu

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };
  return (
    <div className={`sidebar-container ${isMenuOpen ? "open" : "closed"}`}>
      {/* Logo Section */}
      <div className="sidebar-logo">
        <Icon icon="mdi:ant-outline" className="sidebar-icon" />
        <img src={logo} alt="logo" style={{ height: '50px' }} />
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
      <NavLink
        to="/"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        }
      >
        <Icon icon="mdi:home-outline" className="nav-icon" />
        <span>Repositories</span>
      </NavLink>

      <NavLink
        to="/code-review"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        }
      >
        <Icon
          icon="material-symbols:code"
          className="nav-icon"
          style={{ fontSize: "24px" }}
        />
        <span>AI Code Review</span>
      </NavLink>

      <NavLink
        to="/cloud-security"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        }
      >
        <Icon icon="mdi:cloud-outline" className="nav-icon" />
        <span>Cloud Security</span>
      </NavLink>

      <NavLink
        to="/how-to-use"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        }
      >
        <FaBook />
        <span>How to Use</span>
      </NavLink>

      <NavLink
        to="/settings"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        }
      >
        <Icon icon="mdi:cog-outline" className="nav-icon" />
        <span>Settings</span>
      </NavLink>
    </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <a href="/support"  onClick={handleLinkClick} className="nav-link">
          <Icon icon="mdi:phone-outline" className="nav-icon" />
          <span>Support</span>
        </a>
        <a href="/logout"  onClick={handleLinkClick} className="nav-link">
          <Icon icon="mdi:logout" className="nav-icon" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

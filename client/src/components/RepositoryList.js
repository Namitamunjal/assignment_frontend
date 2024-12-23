import React from "react";
import "./RepositoryList.css";
import { Icon } from "@iconify/react";

const repositories = [
  { name: "design-system", type: "Public", language: "React", size: "7320 KB", updated: "1 day ago" },
  { name: "codeant-ci-app", type: "Private", language: "Javascript", size: "5871 KB", updated: "2 days ago" },
  { name: "analytics-dashboard", type: "Private", language: "Python", size: "4521 KB", updated: "5 days ago" },
  { name: "mobile-app", type: "Public", language: "Swift", size: "3096 KB", updated: "3 days ago" },
  { name: "e-commerce-platform", type: "Private", language: "Java", size: "6210 KB", updated: "6 days ago" },
  { name: "blog-website", type: "Public", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
  { name: "social-network", type: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
];

const RepositoryList = () => {
  const handleRefresh = () => {
    alert("Repositories refreshed!");
  };
  return (
    <div className="repository-list-container">
      <div className="repository-header">
        <h1 className="repository-title">Repositories</h1>
        <button className="btn-refresh" onClick={handleRefresh}>
          <Icon icon="mdi:refresh" className="btn-icon" /> Refresh All
        </button>       <button className="add-repository-button">+ Add Repository</button>
      </div>
      <p className="repository-count">{repositories.length} total repositories</p>
      <input
        type="text"
        placeholder="Search Repositories"
        className="repository-search"
      />
      <div className="repository-list">
        {repositories.map((repo, index) => (
          <div key={index} className="repository-item">
            <div>
              <h2 className="repository-name">{repo.name}</h2>
              <p className="repository-details">
                {repo.language} • {repo.size} • Updated {repo.updated}
              </p>
            </div>
            <span
              className={`repository-badge ${repo.type === "Public" ? "badge-public" : "badge-private"
                }`}
            >
              {repo.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;

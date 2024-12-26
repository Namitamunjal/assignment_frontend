import React from "react";
import "./RepositoryList.css";
import { Icon } from "@iconify/react";
import { LuRefreshCcw } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineCircleStack } from "react-icons/hi2";

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
        <div className="flexing">
          <button className="btn-refresh" onClick={handleRefresh}>
            <LuRefreshCcw />
            Refresh All
          </button>

          <button className="add-repository-button">+ Add Repository</button>

        </div>

      </div>
      <p className="repository-count">{repositories.length} total repositories</p>
      <div className="search-container">
        <IoIosSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="repository-search"
        />
      </div>

      <div className="repository-list">
        {repositories.map((repo, index) => (
          <div key={index} className="repository-item">
            <div>
              <div className="forflex">
                <h2 className="repository-name">{repo.name}</h2>
                <span
                  className={`repository-badge ${repo.type === "Public" ? "badge-public" : "badge-private"
                    }`}
                >
                  {repo.type}
                </span>
              </div>

              <p className="repository-details">
                {repo.language}
                <span className="blue-dot"></span>
                {repo.size}
                <HiOutlineCircleStack className="size-icon" />
                Updated {repo.updated}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default RepositoryList;

import { useState } from "react";
import "./Header.css";

function Header({ onCourseChange, onLimitChange }) {
  const [activeButton, setActiveButton] = useState("beginner");
  const [activeFilter, setActiveFilter] = useState("5");

  const handleLevelClick = (course) => {
    setActiveButton(course);
    onCourseChange(course); // Send to parent
  };

  const handleFilterClick = (limit) => {
    setActiveFilter(limit);
    onLimitChange(limit); // Send to parent
  };

  return (
    <div className="header">
      <h1>PROJECTS</h1>
      <h2>
        Welcome to the project library. You can use the filters on the left to
        help you search for specific projects.
      </h2>

      <div className="levels">
        <button
          className={`btn-level ${activeButton === "beginner" ? "active" : ""}`}
          onClick={() => handleLevelClick("beginner")}
        >
          BEGINNER
        </button>
        <button
          className={`btn-level ${activeButton === "intermediate" ? "active" : ""}`}
          onClick={() => handleLevelClick("intermediate")}
        >
          INTERMEDIATE
        </button>
        <button
          className={`btn-level ${activeButton === "advanced" ? "active" : ""}`}
          onClick={() => handleLevelClick("advanced")}
        >
          ADVANCED
        </button>
      </div>

      <div className="filter-btns">
        <span className="filter-show">SHOW</span>
        <button
          className={`filter-btn ${activeFilter === "5" ? "active" : ""}`}
          onClick={() => handleFilterClick("5")}
        >
          5
        </button>
        <button
          className={`filter-btn ${activeFilter === "10" ? "active" : ""}`}
          onClick={() => handleFilterClick("10")}
        >
          10
        </button>
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
      </div>
    </div>
  );
}

export default Header;
import { useState, useEffect } from "react";
import "./Filter.css";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    subscription: [],
    activityType: [],
    yearLevel: [],
    subject: [],
  });

  
  function handleCheckboxChange(event) {
    const { name, value, checked } = event.target;

    setFilters((previousFilters) => {
      const update = checked
        ? [...previousFilters[name], value]
        : previousFilters[name].filter((item) => item !== value);
      
      const newFilters = {
        ...previousFilters,
        [name]: update,
      };
      
      // ✅ Don't call onFilterChange here anymore!
      return newFilters;
    });
  }
  
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]); // This runs after filters update


  return (
    <div className="filter-panel">
      
      {/* Subscription */}
      <div className="subscription">
        <h3>Subscription</h3>
        <hr />
        <label>
          <input
            type="checkbox"
            name="subscription"
            value="Free"
            onChange={handleCheckboxChange}
          />
          Free
        </label>
        <label>
          <input
            type="checkbox"
            name="subscription"
            value="Premium"
            onChange={handleCheckboxChange}
          />
          Premium
        </label>
      </div>
      <br />
      <br />

      {/* Activity Type */}
      <div className="activity-type">
        <h3>Activity Type</h3>
        <hr />
        <label>
          <input
            type="checkbox"
            name="activityType"
            value="Animation"
            onChange={handleCheckboxChange}
          />
          Animation
        </label>
        <label>
          <input
            type="checkbox"
            name="activityType"
            value="Game"
            onChange={handleCheckboxChange}
          />
          Game
        </label>
        <label>
          <input
            type="checkbox"
            name="activityType"
            value="Chatbot"
            onChange={handleCheckboxChange}
          />
          Chatbot
        </label>
        <label>
          <input
            type="checkbox"
            name="activityType"
            value="Augmented Reality"
            onChange={handleCheckboxChange}
          />
          Augmented Reality
        </label>
      </div>
      
      <br />
      <br />

      {/* Year Level */}
      <div className="year-level">
        <h3>Year Level</h3>
        <hr />
        <label>
          <input
            type="checkbox"
            name="yearLevel"
            value="1-4"
            onChange={handleCheckboxChange}
          />
          1 - 4
        </label>
        <label>
          <input
            type="checkbox"
            name="yearLevel"
            value="5-6"
            onChange={handleCheckboxChange}
          />
          5 - 6
        </label>
        <label>
          <input
            type="checkbox"
            name="yearLevel"
            value="7-8"
            onChange={handleCheckboxChange}
          />
          7 - 8
        </label>
        <label>
          <input
            type="checkbox"
            name="yearLevel"
            value="9-13"
            onChange={handleCheckboxChange}
          />
          9 - 13
        </label>
      </div>
      
      <br />
      <br />

      {/* Subject Matter */}
      <div className="subject-matter">
        <h3>Subject Matter</h3>
        <hr />
        <label>
          <input
            type="checkbox"
            name="subject"
            value="Computer Science"
            onChange={handleCheckboxChange}
          />
          Computer Science
        </label>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="Maths"
            onChange={handleCheckboxChange}
          />
          Maths
        </label>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="Science"
            onChange={handleCheckboxChange}
          />
          Science
        </label>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="Language"
            onChange={handleCheckboxChange}
          />
          Language
        </label>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="Art"
            onChange={handleCheckboxChange}
          />
          Art
        </label>
        <label>
          <input
            type="checkbox"
            name="subject"
            value="Music"
            onChange={handleCheckboxChange}
          />
          Music
        </label>
      </div>
    </div>
  );
}

export default Filter;

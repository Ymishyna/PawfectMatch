import React, { useState } from "react";
import "../pages/Home.css";

export const Home = () => {
  // State for search values
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const [searchValue3, setSearchValue3] = useState("");

  // Handler for search submit
  const handleSearchSubmit = () => {
    // Implement your search logic here using the search values
    console.log("Search submitted:", searchValue1, searchValue2, searchValue3);
  };

  return (
    <div className="home">
      <div>
        <img className="logo" src="./src/assets/Logo.png" alt="" />
      </div>
      <div className="home-text">
        <h1>Find your new best friend!</h1>
        <div>
          {/* Search Box with Dropdowns */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue1}
              onChange={(e) => setSearchValue1(e.target.value)}
            />
            <select
              value={searchValue2}
              onChange={(e) => setSearchValue2(e.target.value)}
            >
              <option value="">Select Option 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select
              value={searchValue3}
              onChange={(e) => setSearchValue3(e.target.value)}
            >
              <option value="">Select Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <button onClick={handleSearchSubmit}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

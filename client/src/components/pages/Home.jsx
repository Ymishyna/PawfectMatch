import React, { useState } from "react";
import "./Home.css";

export const Home = () => {
  // State for search values and errors
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const [searchValue3, setSearchValue3] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  // Handler for search submit
  const handleSearchSubmit = () => {
    // Reset errors
    setError1("");
    setError2("");
    setError3("");

    // Validate search values
    if (searchValue1 === "") {
      setError1("Please select a dog or cat");
    }

    if (searchValue2 === "") {
      setError2("Please select an age range");
    }

    if (searchValue3 === "") {
      setError3("Please select animal's sex");
    }

    // If no errors, proceed with search logic
    if (!error1 && !error2 && !error3) {
      console.log(
        "Search submitted:",
        searchValue1,
        searchValue2,
        searchValue3
      );
      // Implement search logic here using the search values
    }
  };

  return (
    <div className="home">
      <div className="search-box">
        <div className="q1">
          <h3>Cat or Dog?</h3>
          <select
            value={searchValue1}
            onChange={(e) => setSearchValue1(e.target.value)}
          >
            <option value="">Choose one</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
          {error1 && <p className="error">{error1}</p>}
        </div>
        <div className="q2">
          <h3>Age range?</h3>
          <select
            value={searchValue2}
            onChange={(e) => setSearchValue2(e.target.value)}
          >
            <option value="">Choose one</option>
            <option value="< 5 years">Less than 5 years</option>
            <option value="> 5 years">More than 5 years</option>
          </select>
          {error2 && <p className="error">{error2}</p>}
        </div>
        <div className="q3">
          <h3>Male or Female?</h3>
          <select
            value={searchValue3}
            onChange={(e) => setSearchValue3(e.target.value)}
          >
            <option value="">Choose one</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {error3 && <p className="error">{error3}</p>}
        </div>
        <button className="searchButton" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
      <div className="logo">
        <img src="./src/assets/Logo.png" alt="Logo" />
      </div>
      <div className="flip-card">
        <div className="container">
          <div className="card">
            <div className="front"></div>
            <div className="back">
              <h1>back of card</h1>
              <p>info on back of card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

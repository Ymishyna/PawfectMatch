import React, { useState } from "react";
import "./Home.css";
import ReactCardFlip from "react-card-flip";
import { savedPets } from "./savedPets";

const pets = [
  {
    name: "Astro",
    image:
      "https://th.bing.com/th/id/R.be2739bdbf12662f392535182938cbab?rik=YKD9aOCvaaq7SA&riu=http%3a%2f%2ffallinpets.com%2fwp-content%2fuploads%2f2016%2f12%2fBoxer-puppy.jpg&ehk=dKGgrkgYxM754jHdkFdVLwRLb14TkJefLrXc8xv%2b4kU%3d&risl=&pid=ImgRaw&r=0",
    bio: "Astro loves to be outside",
    breed: "Boxer",
    age: "4 months",
    gender: "Male",
    location:
      "Orange County Animal Services, 2769 Conroy Rd, Orlando, FL 32839",
  },
  {
    name: "MeowMeowFuzzyFace",
    image:
      "https://lh6.googleusercontent.com/proxy/vRaecxcZhidxRU85sVE-DI4OIwpEE723HEvyhZ8BSxWeqjj_QIOKqPT8Y_P8LhAFXn-srvAGtJxrz6OT0aJU1R4XypC-4bQSB95bBLC9-0NqB-d7YO6UX1Ync6NOyNacTMDwON7EIkg4Cq-iHkopM_o=s0-d",
    bio: "MeowMewoFuzzyFace is a lovable kitten",
    breed: "Calico",
    age: "2 months",
    gender: "Female",
    location: "777 W Central Blvd, Orlando, FL 32805",
  },
  {
    name: "Bobby",
    image:
      "https://talktodogs.com/wp-content/uploads/2020/12/Labrador-Puppy-Golden-683x1024.jpg",
    bio: "Astro loves to be outside",
    breed: "Labrador",
    age: "5 months",
    gender: "Male",
    location:
      "Orange County Animal Services, 2769 Conroy Rd, Orlando, FL 32839",
  },
];

export const Home = () => {
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const [searchValue3, setSearchValue3] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [flipped, setFlipped] = useState([]);

  const flipOnHover = (index, value) => {
    return () => {
      setFlipped((prev) => {
        const next = Array.from(prev);
        next[index] = value;
        return next;
      });
    };
  };

  const handleSearchSubmit = () => {
    setError1("");
    setError2("");
    setError3("");

    if (searchValue1 === "") {
      setError1("Please select a dog or cat");
    }

    if (searchValue2 === "") {
      setError2("Please select an age range");
    }

    if (searchValue3 === "") {
      setError3("Please select animal's sex");
    }

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
        <div className="selections">
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
      </div>

      <div className="card-container">
        {pets.map((pet, i) => (
          <div className="card" onMouseLeave={flipOnHover(i, false)} key={i}>
            <ReactCardFlip isFlipped={flipped[i]} flipDirection="horizontal">
              <div onMouseEnter={flipOnHover(i, true)}>
                <div>{pet.name}</div>
                <img src={pet.image} alt={pet.name} />
              </div>
              <div className="back-of-card">
                <p>{pet.bio}</p>
                <ul>
                  <li>{pet.age}</li>
                  <li>{pet.breed}</li>
                  <li>{pet.gender}</li>
                  <li>{pet.location}</li>
                </ul>
              </div>
            </ReactCardFlip>
          </div>
        ))}
      </div>
    </div>
  );
};
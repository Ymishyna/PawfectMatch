import React from "react";
import "./profileCard.css";
import { profilesData } from "./data";

export const ProfileCard = ({ profileIndex }) => {
  const { name, imageSrc, githubLink } = profilesData[profileIndex];

  const visitGithub = () => {
    window.open(githubLink);
  }

  return (
    <div className="card">
      <img className="profilePic" src={imageSrc} alt={name} />
      <h1>{name}</h1>
        <button onClick={visitGithub}>Github</button>
    </div>
  );
};

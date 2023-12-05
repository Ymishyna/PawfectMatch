import React from "react";
import "./ProfileCard.css";
import { profilesData } from "./data";

export const ProfileCard = ({ profileIndex }) => {
  const { name, imageSrc, githubLink } = profilesData[profileIndex];

  const visitGithub = () => {
    window.open(githubLink);
  };

  return (
      <div class="card">
        <img class="profilePic" src={imageSrc} alt={name} />
        <div class="card-body">
          <h1>{name}</h1>
          <a classname="github-button" onClick={visitGithub}>
            <img
              src="./src/assets/GitHub-logo.png"
              className="githubLogo"
              alt="Github Link"
            />
          </a>
        </div>
      </div>
  );
};

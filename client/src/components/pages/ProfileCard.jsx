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
      <img className="profilePic" src={imageSrc} alt={name} />
      <div className="card-body">
        <h1>{name}</h1>
        <a className="github-button" onClick={visitGithub}>
          <img
            src="https://drive.google.com/uc?export=view&id=1eyY_-HjejtpQAC01ZiDWByymhaOa8jbv"
            className="githubLogo"
            alt="Github Link"
          />
        </a>
      </div>
    </div>
  );
};

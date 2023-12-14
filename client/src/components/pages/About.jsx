import React from "react";
import { ProfileCard } from "./ProfileCard";

export const About = () => {
  return (
    <>
      <div
        className="bio"
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "20px",
          color: "navy",
          fontSize: "1.5rem",
        }}
      >
        <p style={{textAlign: "center"}}>
          "A team of five devoted to securing caring homes for
          every cat and dog. With a passion for shelter advocacy and expertise
          in guiding and rehabilitating animals, they work tirelessly to make a
          positive impact on the lives of our furry friends. Their commitment
          reflects a shared goal of providing a loving and secure home for every
          cat and dog, regardless of their background or circumstance."
        </p>
      </div>
      <div className="profile-cards" style={{margin: "2rem"}}>
        {/* Use ProfileCard with different profileIndex values to display different profiles */}
        <ProfileCard profileIndex={0} />
        <ProfileCard profileIndex={1} />
        <ProfileCard profileIndex={2} />
        <ProfileCard profileIndex={3} />
        <ProfileCard profileIndex={4} />
      </div>
    </>
  );
};

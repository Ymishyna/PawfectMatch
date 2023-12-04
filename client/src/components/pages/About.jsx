import React from "react";
import { ProfileCard } from "./profileCard";

export const About = () => {
  return (
    <>
      <div>
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
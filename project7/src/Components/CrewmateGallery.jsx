import React from "react";
import { useLocation } from "react-router-dom";
import CrewCard from "./CrewCard";

function CrewmateGallery() {
  const location = useLocation();
  const data = location.state;
  console.log("Data", data);

  return (
    <div className="mt-14 text-center">
      <h1 className="text-5xl">Your Crewmate Gallery!</h1>
      <div className="mt-11 m-10 flex flex-wrap gap-8 justify-center">
        {data.map((crewmate, index) => {
          return <CrewCard key={index} crewmate={crewmate} />;
        })}
      </div>
    </div>
  );
}

export default CrewmateGallery;

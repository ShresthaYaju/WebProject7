import React from "react";
import { Link } from "react-router-dom";

function CremateGalleryEmpty() {
  return (
    <div className="text-center mt-40 mb-auto h-1/2 ">
      <h1 className="text-5xl font-bold mb-12">Your Crewmate Gallery!</h1>
      <h3 className="text-2xl font-semibold mb-12">
        You haven't made a crewmate yet!
      </h3>
      <Link
        to="/CreateCrew"
        className=" p-3 bg-teal-600 rounded-xl text-xl font-bold hover:scale-105 cursor-pointer"
      >
        Create a Crewmate!
      </Link>
    </div>
  );
}

export default CremateGalleryEmpty;

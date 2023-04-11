import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";

function Details() {
  const location = useLocation();
  const data = location.state;
  const { id } = useParams();
  console.log("Data", data);
  const ID = id.split("+");
  const name = ID[0],
    speed = ID[1],
    color = ID[2];

  const supabaseUrl = "https://sjiuwfikoktxayqxbwgt.supabase.co";
  const superbaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqaXV3Zmlrb2t0eGF5cXhid2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMDk2NTcsImV4cCI6MTk5NjY4NTY1N30.8byNsXBBxX24xjUOXdLrum-BRnoafthu_40fFybJxC0";

  const deleteCrewmate = async () => {
    const supabase = createClient(supabaseUrl, superbaseKey);
    const { data, error } = await supabase
      .from("Project 7")
      .delete()
      .eq("Name", name);
    alert("Crewmate Deleted! Go back to see the changes");
  };

  const supabase = createClient(supabaseUrl, superbaseKey);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-center text-center mt-24 mb-10 h-1/2">
        Crewmate: {name}
      </h1>
      <h2 className="text-3xl font-bold mb-6">Stats:</h2>
      <ul>
        <li className="text-2xl mb-6">Speed: {speed}mph</li>
        <li className="text-2xl mb-6">Color: {color}</li>
      </ul>
      <img
        src="https://thumbs.gfycat.com/PassionateDangerousAmazonparrot-max-1mb.gif"
        alt=""
        className="block ml-auto mr-auto w-1/2 max-w-[12rem]"
        height={100}
        width="200"
      />

      <div>
        <button className="bg-teal-600 hover:scale-105 text-white font-semibold text-xl py-2 px-4 rounded-full mt-10 mr-11">
          <Link to="/UpdateCrewmate">Update</Link>
        </button>
        <button
          className="bg-red-600 hover:scale-105 text-white font-semibold text-xl py-2 px-4 rounded-full mt-10"
          onClick={deleteCrewmate}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Details;

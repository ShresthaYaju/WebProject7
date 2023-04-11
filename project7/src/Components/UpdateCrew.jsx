import React from "react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

function UpdateCrew() {
  const [crewmate, setCrewmate] = useState({ Name: "", Speed: "", Color: "" });
  const supabaseUrl = "https://sjiuwfikoktxayqxbwgt.supabase.co";
  const superbaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqaXV3Zmlrb2t0eGF5cXhid2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMDk2NTcsImV4cCI6MTk5NjY4NTY1N30.8byNsXBBxX24xjUOXdLrum-BRnoafthu_40fFybJxC0";

  const supabase = createClient(supabaseUrl, superbaseKey);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setCrewmate({ ...crewmate, [name]: value });
  };

  const formUpdate = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Project 7")
      .update([
        { Name: crewmate.Name, Speed: crewmate.Speed, Color: crewmate.Color },
      ])
      .match({ Name: crewmate.Name });
    // console.log(data, error);
    alert("Crewmate Update! Go Back to Home Page to see the changes.");
  };

  return (
    <div className=" text-center mt-20 mb-auto h-1/2 ">
      <h1 className="text-5xl font-bold">Update Your Crewmate:D</h1>
      <img
        src="https://www.pngmart.com/files/21/Among-Us-PNG-Isolated-Transparent.png"
        alt=""
        className="block ml-auto mr-auto w-1/2"
        height={10}
      />

      <form onSubmit={formUpdate}>
        <div className="flex gap-8 justify-center">
          <div className=" bg-slate-700 p-9 rounded-xl">
            <label className="block text-2xl mb-2"> Name</label>
            <input
              type="text"
              value={crewmate.Name}
              name="Name"
              onChange={handelChange}
              className="border-2 border-gray-400 rounded-xl"
            />
          </div>

          <div className=" bg-slate-700 p-9 rounded-xl">
            <label className="block text-2xl mb-2"> Speed</label>
            <input
              type="text"
              value={crewmate.Speed}
              name="Speed"
              onChange={handelChange}
              className="border-2 border-gray-400 rounded-xl"
            />
          </div>

          <div className=" bg-slate-700 p-9 rounded-xl text-left">
            <label className="block text-2xl mb-2"> Color</label>

            <ul>
              <li>
                <input
                  type="radio"
                  onChange={handelChange}
                  id="red"
                  name="Color"
                  value="red"
                  className="mr-2"
                />
                Red
              </li>
              <li>
                <input
                  type="radio"
                  onChange={handelChange}
                  id="blue"
                  name="Color"
                  value="blue"
                  className="mr-2"
                />
                blue
              </li>
              <li>
                <input
                  type="radio"
                  onChange={handelChange}
                  id="green"
                  name="Color"
                  value="green"
                  className="mr-2"
                />
                Green
              </li>
              <li>
                <input
                  type="radio"
                  onChange={handelChange}
                  id="pink"
                  name="Color"
                  value="pink"
                  className="mr-2"
                />
                Pink
              </li>
            </ul>

            {/* {console.log(crewmate)} */}
          </div>
        </div>
        <button
          type="submit"
          className="p-4 bg-teal-600 rounded-xl mt-3 cursor-pointer hover:scale-105 transition-all"
        >
          Update Crewmate
        </button>
      </form>
    </div>
  );
}

export default UpdateCrew;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";

function Home() {
  const supabaseUrl = "https://sjiuwfikoktxayqxbwgt.supabase.co";
  const superbaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqaXV3Zmlrb2t0eGF5cXhid2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMDk2NTcsImV4cCI6MTk5NjY4NTY1N30.8byNsXBBxX24xjUOXdLrum-BRnoafthu_40fFybJxC0";

  const supabase = createClient(supabaseUrl, superbaseKey);
  const [crewmate, setCrewmate] = useState({ Name: "", Speed: "", Color: "" });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, error } = await supabase.from("Project 7").select("*");
    // console.log(data, error);
    setCrewmate(data);
  };

  console.log("crewMate", crewmate);
  return (
    <div className="flex flex-1 relative">
      <div className="w-1/6 bg-slate-700 h-screen text-center pt-14">
        <div className="p-4 text-2xl font-semibold">
          <ul>
            <li className="hover:scale-105 mb-5 border-2 border-teal-600 rounded-xl hover:bg-teal-600 duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:scale-105 mb-5 border-2 border-teal-600 rounded-xl  hover:bg-teal-600 duration-500">
              <Link to="/CreateCrew">Create a Crewmate!</Link>
            </li>
            <li className="hover:scale-105 mb-5 border-2 border-teal-600 rounded-xl hover:bg-teal-600 duration-500">
              <Link
                to={
                  crewmate.length == 0
                    ? "/CrewmateGalleryEmpty"
                    : "/CrewmateGallery"
                }
                state={crewmate}
              >
                Crewmate Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse h-3/5 items-end justify-start">
          <Link to="/">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/5d7564664b84a832897129b17d3d2ff2-1613763577/Attachment_1613763560/create-personalized-among-us-gif-and-png-for-you.gif"
              alt=""
              width={250}
            />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

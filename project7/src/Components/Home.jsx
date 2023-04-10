import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-1 relative">
      <div className="w-1/6 bg-slate-700 h-screen text-center ">
        <div className="p-4 text-2xl font-semibold">
          <ul>
            <li className="hover:scale-105 mb-3">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:scale-105 mb-3">
              <Link to="/CreateCrew">Create a Crewmate!</Link>
            </li>
            <li className="hover:scale-105 mb-3">
              <Link to="/CrewmateGallery">Crewmate Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse h-3/4 items-center">
          <Link to="/">
            <img
              src="https://assets.stickpng.com/images/61d183263a856e0004c6334a.png"
              alt=""
              width={150}
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

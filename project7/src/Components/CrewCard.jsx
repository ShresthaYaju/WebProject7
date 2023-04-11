import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CrewCard(props) {
  const crewMate = props.crewmate;
  const key = props.index;
  const [color, setColor] = useState(crewMate.Color);
  console.log("Crewmate", crewMate.Color);

  useEffect(() => {
    console.log("Color", crewMate.Color);
    setColor(crewMate.Color);
  }, [crewMate.Color]);

  const handelClick = () => {};

  return (
    <div
      className={`bg-${color}-600 bg-${color}-200 bg-${color}-100 w-1/4 text-center text-white p-6 rounded-xl hover:scale-105 duration-300 border-2`}
      color={`${crewMate.Color}`}
      onClick={handelClick}
    >
      <Link
        to={`${crewMate.Name}+${crewMate.Speed}+${crewMate.Color}`}
        state={props}
      >
        <img
          src="https://pbs.twimg.com/media/EhsX4ABU8AEY8kB.png"
          className="block ml-auto mr-auto"
          width={200}
        />
        <h1 className="text-3xl font-semibold">Name: {crewMate.Name}</h1>
        <h3 className="text-2xl">Speed: {crewMate.Speed}</h3>
        <h3 className={`text-2xl text-${crewMate.color}-600`}>
          Color: {crewMate.Color}
        </h3>
      </Link>
    </div>
  );
}

export default CrewCard;

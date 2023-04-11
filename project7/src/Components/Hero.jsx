import React from "react";

function Hero() {
  return (
    <div className=" text-center mt-40 mb-auto h-1/2 ">
      <h1 className="text-5xl font-bold">Welcome to the Crewmate Creator!</h1>
      <p className="text-lg">
        Here is where you can create your very own set of Crewmate before
        sending them off into space!
      </p>
      <img
        src="https://www.pngmart.com/files/21/Among-Us-PNG-Isolated-Transparent.png"
        alt=""
        className="block ml-auto mr-auto w-1/2"
        width={800}
      />
    </div>
  );
}

export default Hero;

import React from "react";
import logo from "../assets/Logo.png";

const GameImg = () => {
  return (
    <div className="border-r border-black h-screen/2 w-40 ml-6 ">
      {" "}
      <img className="h-32 w-36 mt-6" src={logo} alt="" />
    </div>
  );
};

export default GameImg;

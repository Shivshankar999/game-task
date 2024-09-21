import React from "react";
import home from "../assets/home.png";
const Header = () => {
  return (
    <div className="flex">
      <button className="p-[14px] m-4 rounded-xl bg-white">
        <img className="h-6 w-6" src={home} alt="" />
      </button>
      <h1 className="text-2xl font-bold text-white p-6">
        Math fill in the blanks
      </h1>
    </div>
  );
};

export default Header;

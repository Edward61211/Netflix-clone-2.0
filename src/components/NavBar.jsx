import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ buttonText = "Sign In", redirectPath = "/login" }) => {
  return (
    <div className="main flex justify-between lg:justify-between md:justify-around py-5 px-5 items-center lg:mb-28 md:mb-28 mb-10">
      {/* left */}
      <div className="left">
        <div className="logo lg:w-52 md:w-44 w-32">
          {/* <img src="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico" /> */}
          <a href="https://www.netflix.com" target="_blank">
            <img
              className="cursor-pointer hover:opacity-80"
              src="assets/logo.png"
            />
          </a>
        </div>
      </div>
      {/* right */}
      <div className="">
        <div className="main flex items-center justify-center">
          <div className="hidden md:flex items-center justify-center selctor bg-[#181515] text-white ml-4 mr-1 md:mr-4 px-3 py-1 rounded-md border-[1.5px] border-red-500 hover:ring-2 hover:ring-red-300 opacity-70">
            <img src="assets/worldwide.png" className="w-3.5 h-3.5 mr-1 " />
            <select className="cursor-pointer p-0 bg-[#181515] border-none">
              <option value="English">English</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>
          <Link to={redirectPath}>
            <button
              type="button"
              className="bg-[#E50914] text-white px-2 py-1 rounded-lg font-bold text-nowrap md:px-4 hover:ring-2 hover:ring-red-300"
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const SelectUser = () => {
  return (
    <div className="h-full">
      <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-gray-200 text-3xl sm:text-4xl md:text-5xl mt-5">
          Who's watching?
        </h1>

        <div className="flex flex-col md:flex-row gap-5 mt-8">
          <div className="flex flex-col items-center group gap-2">
            <Link to={"/MainPage"}>
              <img
                className="w-[184px] h-[184px] rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
                src="src/assets/u2.jpg"
                alt="Azrael"
              />
              <p className="text-gray-500 group-hover:text-gray-300 text-center">
                Azrael
              </p>
            </Link>
          </div>

          <div className="flex flex-col items-center group gap-2">
            <Link to={"/MainPage"}>
              <img
                className="w-[184px] h-[184px] rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
                src="src/assets/u3.jpg"
                alt="Jessica"
              />
              <p className="text-gray-500 group-hover:text-gray-300 text-center">
                {" "}
                Jessica{" "}
              </p>
            </Link>
          </div>

          <div className="flex flex-col items-center group gap-2">
            <Link to={"/MainPage"}>
              <img
                className="w-[184px] h-[184px] rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
                src="src/assets/u4.jpg"
                alt="Monica"
              />
              <p className="text-gray-500 text-center group-hover:text-gray-300">
                {" "}
                Monica{" "}
              </p>
            </Link>
          </div>

          <div className="flex flex-col items-center group gap-2">
            <Link to={"/MainPage"}>
              <img
                className="w-[184px] h-[184px] rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
                src="src/assets/u1.jpg"
                alt="Veronica"
              />
              <p className="text-gray-500 text-center group-hover:text-gray-300">
                {" "}
                Veronica{" "}
              </p>
            </Link>
          </div>

          <a href="#" className="flex flex-col items-center group gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[180px] w-[180px] group-hover:bg-gray-300 border-2 border-transparent"
              viewBox="0 0 20 20"
              fill="#6b7280"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-500 group-hover:text-gray-100">
              {" "}
              Add Profile{" "}
            </p>
          </a>
        </div>

        <button className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-12 mb-9 hover:border-gray-400 hover:text-gray-400">
          Manage Profiles
        </button>
      </div>
    </div>
  );
};

export default SelectUser;

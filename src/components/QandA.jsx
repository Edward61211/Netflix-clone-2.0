import React, { useState } from "react";
import { SlArrowDownCircle, SlArrowUpCircle } from "react-icons/sl";

const QandA = ({ title, desc }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="QandA_main container mx-auto lg:max-w-6xl md:max-w-6xl text-gray-200 px-3">
        <div className="mb-2">
          <div
            className="main top bg-slate-800 flex items-center justify-between px-5 py-4 rounded-md cursor-pointer hover:bg-slate-700"
            onClick={() => setShow(!show)}
          >
            {/* left */}
            <div className="left">
              <h1 className="lg:text-2xl md:text-2xl text-xl">{title}</h1>
            </div>
            {/* right */}
            <div className="right">
              {show ? (
                <button type="button">
                  <SlArrowUpCircle className="cursor-pointer lg:text-4xl md:text-4xl text-2xl mt-1" />
                </button>
              ) : (
                <button type="button">
                  <SlArrowDownCircle className="cursor-pointer lg:text-4xl md:text-4xl text-2xl mt-1" />
                </button>
              )}
            </div>
          </div>

          {show && (
            <div className="main bottom bg-slate-800 px-5 py-4 my-[1px] rounded-md">
              <p className="text-2xl cursor-pointer text-justify lg:text-start md:text-start">
                {desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QandA;

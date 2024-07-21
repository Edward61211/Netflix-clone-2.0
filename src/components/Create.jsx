import React from "react";

const Create = () => {
  return (
    <>
      <div className="bg-black">
        <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10">
          {/* left  */}
          <div className="left order-last md:order-first lg:order-first">
            <img
              className="lg:w-[35em] md:w-[35em] w-[25em]"
              src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            />
          </div>
          {/* right  */}
          <div className="right text-center md:text-start mb-5 lg:mb-0 md:mb-0 sm:mb-0">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-white">
              Create profiles for kids
              <br className="" />
              and get started
            </h1>
            <h3 className="lg:text-xl md:text-lg text-xs md:font-semibold text-white mt-5 min-[897]:mt-0">
              Send children on adventures with their favourite
              <br className="block" />
              characters and create profiles for kids.
            </h3>
          </div>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default Create;

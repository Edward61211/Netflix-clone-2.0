import React from "react";

const Watch = () => {
  return (
    <>
      <div className="bg-black">
        <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10">
          {/* left  */}
          <div className="left text-center md:text-start mb-5 lg:mb-0 md:mb-0 sm:mb-0">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-white mb-5">
              Watch everywhere
            </h1>
            <h3 className="lg:text-xl md:text-lg text-xs md:font-semibold text-white mb-5 min-[897]:mb-0">
              Stream unlimited movies and TV shows on your
              <br className="block" />
              phone, tablet, laptop, and TV.
            </h3>
          </div>

          {/* right  */}
          <div className="right">
            <video
              className="lg:w-[30em] md:w-[30em] w-[20em] rounded-lg"
              autoPlay={true}
              muted
              loop
            >
              <source src="src/assets/v3.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default Watch;

import React from "react";

const Enjoy = () => {
  return (
    <>
      <div className="bg-black">
        <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10">
          {/* left  */}
          <div className="left text-center md:text-start mb-5 lg:mb-0 md:mb-0 sm:mb-0">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-white mb-5">
              Enjoy on your TV
            </h1>
            <h3 className="lg:text-xl md:text-lg text-xs md:font-semibold text-white mb-5 min-[897]:mb-0">
              Watch on Smart TVs, Playstation, Xbox,
              <br className="block" />
              Chromecast, Apple TV, Blu-ray players, and more.
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
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
            </video>
          </div>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default Enjoy;

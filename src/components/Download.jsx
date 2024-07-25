import React from "react";

const Download = () => {
  return (
    <>
      <div className="bg-black">
        <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10">
          {/* left  */}
          <div className="left order-last md:order-first lg:order-first">
            <video
              className="lg:w-[20em] md:w-[20em] w-[20em] rounded-lg"
              autoPlay={true}
              muted
              loop
            >
              <source src="assets/v2.mp4" type="video/mp4" />
            </video>
          </div>
          {/* right  */}
          <div className="right text-center md:text-start mb-5 lg:mb-0 md:mb-0 sm:mb-0">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-white">
              Download your shows
              <br className="" />
              to watch offline
            </h1>
            <h3 className="lg:text-xl md:text-lg text-xs md:font-semibold text-white mt-5 min-[897]:mt-0">
              Save your favourites easily and always have
              <br className="block" />
              something to watch.
            </h3>
          </div>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default Download;

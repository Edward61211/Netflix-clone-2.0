import React, { useEffect, useState } from "react";
import requests from "../Request";
import NavBar from "../components/NavBar.jsx";
import Row from "../components/Row.jsx";
import axios from "axios";

const MainPage = () => {
  const [movie, setMovie] = useState([]);
  const [randomHeroSection, setRandomHeroSection] = useState(null);
  const [imageloading, setImageLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    axios
      .get(requests.requestPopular)
      .then((response) => {
        if (isMounted) {
          setMovie(response.data.results);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.log(error);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (randomHeroSection?.backdrop_path) {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/original/${randomHeroSection.backdrop_path}`;
      img.onload = () => setImageLoading(false);
    }
  }, [randomHeroSection]);

  useEffect(() => {
    if (movie.length > 0) {
      const randomMovie = movie[Math.floor(Math.random() * movie.length)];
      setRandomHeroSection(randomMovie);
    }
  }, [movie]);

  if (randomHeroSection) {
    console.log(JSON.stringify(randomHeroSection, null, 2));
  }

  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      {/* hero section */}
      <div
        className="lg:h-[44.5em] md:h-[44em] h-[34em] object-contain w-full mb-1"
        style={{
          backgroundImage: imageloading
            ? "none"
            : `linear-gradient(80deg, black, transparent), url(https://image.tmdb.org/t/p/original/${randomHeroSection?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onLoad={() => setImageLoading(false)}
      >
        {imageloading && (
          <div className="absolute inset-0 bg-gray-300">
            <div
              className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-400 to-gray-800 animate-shimmer"
              style={{ backgroundSize: "200% 100%" }}
            />
          </div>
        )}
        {!imageloading && (
          <>
            <NavBar buttonText="Sign Out" redirectPath="/" />

            <div className="px-5 py-2 mt-[270px] md:mt-64">
              <h1 className="text-white font-bold text-3xl md:text-5xl mb-4">
                {randomHeroSection?.title}
              </h1>
              <button className="btn btn-outline btn-error mr-4">Play</button>
              <button className="btn btn-outline text-white">
                Watch Later
              </button>
              <p className="text-white my-2">
                Release: {randomHeroSection?.release_date}
              </p>
              <p className="hidden md:flex">
                {truncate(randomHeroSection?.overview, 150)}
              </p>
            </div>
          </>
        )}
      </div>

      {/* row */}
      <Row id="1" title="TrendingNow" fetchUrl={requests.requestTrending} />
      <Row id="2" title="TopRated" fetchUrl={requests.requestTopRated} />
      <Row id="3" title="Action" fetchUrl={requests.requestAction} />
      <Row id="4" title="Adventure" fetchUrl={requests.requestAdventure} />
      <Row id="5" title="SciFi" fetchUrl={requests.requestSciFi} />
      <Row id="6" title="Comedy" fetchUrl={requests.requestComedy} />
      <Row id="7" title="Horror" fetchUrl={requests.requestHorror} />
      <Row id="8" title="Romance" fetchUrl={requests.requestRomance} />
      <Row id="9" title="Animation" fetchUrl={requests.requestAnimation} />
    </>
  );
};

export default MainPage;

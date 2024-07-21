import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, id }) => {
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const youtubeVideo = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setTrailerUrl(data.results[0]?.key);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addLike = (movieId) => {
    setLikedMovies((prevLikedMovies) => ({
      ...prevLikedMovies,
      [movieId]: !prevLikedMovies[movieId],
    }));
  };

  useEffect(() => {
    if (fetchUrl) {
      axios
        .get(fetchUrl)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    }
  }, [fetchUrl]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const defaultImage = "src/assets/cat.jpeg";

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaArrowAltCircleLeft
          onClick={slideLeft}
          className="hidden group-hover:block z-10 absolute left-1 text-white cursor-pointer opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-300"
          size={30}
        />
        <div
          className="w-full h-full overflow-x-scroll overscroll-y-auto whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider" + id}
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              onClick={() => youtubeVideo(item)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
                }}
                className="w-full h-auto block"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-wrap text-center">
                  {item?.title}
                </p>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    addLike(item.id);
                  }}
                >
                  {likedMovies[item.id] ? (
                    <FaHeart className="absolute top-4 left-4 text-fuchsia-500" />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-fuchsia-500" />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <FaArrowAltCircleRight
          onClick={slideRight}
          className="hidden group-hover:block z-10 absolute right-0 text-white cursor-pointer opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-300"
          size={30}
        />
      </div>
      {trailerUrl && (
        <div className="relative w-full pt-[56.25%]">
          <YouTube
            videoId={trailerUrl}
            opts={opts}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      )}
    </>
  );
};

export default Row;

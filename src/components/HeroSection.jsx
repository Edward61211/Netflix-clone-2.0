import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <>
      <div
        className="lg:h-[44.5em] md:h-[44em] h-[34em]"
        style={{
          backgroundImage:
            "linear-gradient(80deg, black, transparent),  url(https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        {/* HeroSection */}
        <div className="containter flex items-center justify-center h-96 mx-auto">
          <div className="">
            <h1 className="text-white text-center lg:text-5xl md:text-5xl text-3xl px-5 font-bold mb-5">
              Stream Your Favorites Anytime.&nbsp; Discover endless series,
              movies, and more.
            </h1>
            <p className="text-white text-center lg:text-2xl md:text-2xl text-xl mb-5">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-white text-center lg:text-lg md:text-lg text-lg mb-5">
              Explore the interface with fictional demo profiles.
            </p>
            <div className="flex justify-center items-center">
              <Link
                to="/login"
                className="bg-red-600 px-5 py-2 flex items-center justify-center rounded-lg hover:bg-red-500"
              >
                <p className="text-white font-bold text-lg">Get Started</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default HeroSection;

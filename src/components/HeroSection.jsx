import React, { useState } from "react";
import NavBar from "./NavBar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const mySwal = withReactContent(Swal);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleEmailSubmit = () => {
    if (email.trim() !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(email)) {
        mySwal.fire({
          icon: "success",
          title: "Email submitted successfully.",
        });
        setEmail("");
      } else {
        mySwal.fire({
          icon: "error",
          title: "Please enter a valid email address.",
          text: "example: cat888@gmail.com",
          footer:
            '<a href="https://www.cat-gpt.com/">Why do I have this issue?</a>',
        });
      }
    } else {
      mySwal.fire({
        icon: "question",
        title: "Please enter an email address.",
        text: "example: cat888@gmail.com",
        footer:
          '<a href="https://www.cat-gpt.com/">Why do I have this issue?</a>',
      });
    }
  };
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
              Ready to watch? Enter your email.
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                name="email"
                className="w-80 lg:w-96 md:w-96 mb-0 max-[491px]:mb-5 bg-slate-100 text-black text-lg py-2 px-3 rounded-md opacity-50 border border-red-600 hover:ring-1 hover:ring-red-300 outline-none"
                placeholder="Email"
              />
              <button
                type="button"
                onClick={handleEmailSubmit}
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
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default HeroSection;

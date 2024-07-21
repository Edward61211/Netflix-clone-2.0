import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Enjoy from "../components/Enjoy.jsx";
import Download from "../components/Download.jsx";
import Watch from "../components/Watch.jsx";
import Create from "../components/Create.jsx";
import QandA from "../components/QandA.jsx";
import { QandAData } from "../Data/QandAData.jsx";
import Footer from "../components/Footer.jsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const mySwal = withReactContent(Swal);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleEmailSubmit = () => {
    if (email.trim() !== "") {
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
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500">
      <HeroSection />
      <Enjoy />
      <Download />
      <Watch />
      <Create />
      <div className="bg-gradient-to-bl from-teal-400 via-fuchsia-400 to-purple-400 ">
        <h2 className="text-black text-center lg:text-5xl md:text-5xl text-3xl font-bold py-10">
          Frequently Asked <br className="block md:hidden" /> Questions
        </h2>
        <div className="mt-5 mb-10">
          {QandAData.map((item, index) => {
            const { title, desc } = item;
            return <QandA key={index} title={title} desc={desc} />;
          })}
        </div>
        <div className="lg:mb-14 md:mb-14 mb-10">
          <p className="text-white text-center lg:text-lg md:text-lg text-lg mb-5">
            Ready to watch? Enter your email.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
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
        <div className="line" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

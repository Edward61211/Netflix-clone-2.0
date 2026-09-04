import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Enjoy from "../components/Enjoy.jsx";
import Download from "../components/Download.jsx";
import Watch from "../components/Watch.jsx";
import Create from "../components/Create.jsx";
import QandA from "../components/QandA.jsx";
import { QandAData } from "../Data/QandAData.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <aside className="bg-amber-300 px-4 py-2 text-center text-sm font-semibold text-black">
        Portfolio demo by Edward Hung. This project is not affiliated with
        Netflix and does not collect account or payment information.
      </aside>
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
            Continue with fictional profiles created for this portfolio demo.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="/login"
              className="bg-red-600 px-5 py-2 flex items-center justify-center rounded-lg hover:bg-red-500"
            >
              <p className="text-white font-bold text-lg">Enter Demo</p>
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
        <div className="line" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

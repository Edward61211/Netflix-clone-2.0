import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="bg-black container mx-auto max-w-6xl lg:py-20 md:py-20 py-10 px-5">
        <div className="main text-gray-200 md:flex md:flex-wrap flexcol md:justify-between justify-center text-center md:text-start mb-4">
          <div className="one mb-5 md:mb-0">
            <ul>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                About
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Copyright
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Creators
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Advertising
              </li>
            </ul>
          </div>
          <div className="two mb-5 md:mb-0">
            <ul>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Jobs
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Policy
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Help Center
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Cookies
              </li>
            </ul>
          </div>
          <div className="three mb-5 md:mb-0">
            <ul>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Account
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                tech News
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Meet Us
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Careers
              </li>
            </ul>
          </div>
          <div className="four mb-5 md:mb-0">
            <ul>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Media
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Terms of Use
              </li>
              <li className="font-bold cursor-pointer mb-2 hover:underline">
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[130px] flex items-center justify-center selctor bg-slate-200 text-gray-800 max-md:mx-auto px-1.5 py-1 rounded-md border-[1.5px] border-red-500 hover:ring-2 hover:ring-red-300 opacity-60">
          <img src="/src/assets/worldwide.png" className="w-3.5 h-3.5 mr-1 " />
          <select className="cursor-pointer bg-slate-200 p-0 border-none hidden lg:block">
            <option value="English">English</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
        <div className="text-center md:text-start mt-5 md:mt-3 cursor-pointer">
          <a href="https://www.netflix.com" target="_blank">
            © 1997-2024 Netflix, Inc.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

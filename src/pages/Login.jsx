import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    validate(e.target.value, email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    validate(password, e.target.value);
  };
  const validate = (password, email) => {
    if (email.trim() !== "" && password.trim() !== "") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(80deg, black, transparent),  url(https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="main flex justify-center items-center h-screen">
        <div className="bg-black bg-opacity-70 p-20 text-white w-96">
          <h2 className="text-white font-bold text-3xl mb-7">Sign In</h2>
          <div className="mb-7">
            <label htmlFor="email" className="sr-only">
              Email or phone number
            </label>
            <input
              id="email"
              type="email"
              onChange={handleEmail}
              value={email}
              placeholder="Email or phone number"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
            />
          </div>
          <div className="mb-7">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="Password"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none"
            />
          </div>
          <div className="mb-2">
            <Link to={disableButton ? "#" : "/SelectUser"}>
              <button
                type="button"
                disabled={disableButton}
                className={`w-full px-5 py-2 flex items-center justify-center rounded-lg ${
                  disableButton
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-500"
                }`}
              >
                Sign In
              </button>
            </Link>
          </div>
          <div className="mb-9">
            <div className="flex items-center justify-between">
              {/* left */}
              <div className="flex items-center gap-1">
                <input type="checkbox" id="remember-me" className="w-4 h-4" />
                <label
                  htmlFor="remember-me"
                  className="text-gray-300 font-light text-sm"
                >
                  Remember me
                </label>
              </div>
              {/* right */}
              <div className="text-gray-300 font-light text-sm">
                <a href="https://help.netflix.com/en" target="_blank">
                  Need Help?
                </a>
              </div>
            </div>
          </div>
          <div className="mb-9">
            <p>
              <a
                className="font-light text-gray-300"
                href="https://help.netflix.com/en/node/102377"
                target="_blank"
              >
                New to Netflix?
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="font-light hover:underline cursor-pointer">
                Sign up now
              </span>
            </p>
          </div>
          <div className="mb-16">
            <p className="text-gray-300 text-xs">
              This page is using Google reCAPTCHA{" "}
              <a
                href="https://support.google.com/recaptcha/?hl=en"
                target="_blank"
                className="text-blue-500"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

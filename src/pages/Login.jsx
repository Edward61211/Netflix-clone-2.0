import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(80deg, black, transparent), url("/Netflix-clone-2.0/assets/blonde.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="main flex justify-center items-center h-screen">
        <div className="bg-black bg-opacity-70 p-20 text-white w-96">
          <h2 className="text-white font-bold text-3xl mb-7">
            Portfolio Demo Access
          </h2>
          <p className="mb-7 text-sm leading-6 text-gray-200">
            This unofficial interface demo uses fictional profiles. No account,
            credential, or payment information is requested or stored.
          </p>
          <div className="mb-2">
            <Link to="/SelectUser">
              <span className="w-full px-5 py-2 flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-500">
                Continue to Demo Profiles
              </span>
            </Link>
          </div>
          <div className="mt-7 text-center">
            <Link className="text-sm text-gray-300 hover:underline" to="/">
              Return to demo home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

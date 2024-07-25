// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./components/HomePage.jsx";
// import Login from "./pages/Login.jsx";
// import SelectUser from "./pages/SelectUser.jsx";
// import MainPage from "./pages/MainPage.jsx";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/selectuser" element={<SelectUser />} />
//           <Route path="/mainpage" element={<MainPage />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Login from "./pages/Login.jsx";
import SelectUser from "./pages/SelectUser.jsx";
import MainPage from "./pages/MainPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectuser" element={<SelectUser />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

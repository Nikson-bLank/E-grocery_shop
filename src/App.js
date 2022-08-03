import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import MobileNavbar from "./components/common/navbar/MobileNavbar";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./pages/Home";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="MainDiv">
      <Header />
      <Navbar />
      <MobileNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="*"
          element={
            <h2 className="text-center">
              Oops! No page found
              <br />
              <button className="site-btn" onClick={() => navigate("/")}>
                Go back to Homepage
              </button>
            </h2>
          }
        ></Route> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

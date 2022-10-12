import React from "react";
import Lottie from "lottie-react";
import reader from "../assests/reader.json";
import "./Home.css";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-7 col-md-7">
          <h1 className="display-3 fw-semibold">
            Want to cark the <span className="cl-1">interview?</span>
          </h1>
          <h2 className="fw-semibold display-5">
            Check your <span className="cl-2">Skill</span> today!!!
          </h2>
        </div>
        <div className="col-lg-5 col-md-5">
          <Lottie animationData={reader} loop={true}></Lottie>
        </div>
      </div>
      
    </div>
  );
};

export default Home;

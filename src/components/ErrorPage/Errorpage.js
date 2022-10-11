import React from "react";
import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../assests/error404.json";

const Errorpage = () => {
  const error = useRouteError();
  return (
    <div className="container">
      <div>
        <Lottie animationData={error404} loop={true}></Lottie>
      </div>

      <div>
        <p className="fw-bold fs-4">{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default Errorpage;

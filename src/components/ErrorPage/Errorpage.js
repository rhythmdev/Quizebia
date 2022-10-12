import React from "react";
import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../assests/error404.json";
import "./ErrorPage.css";

const Errorpage = () => {
  const error = useRouteError();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="error-anime w-50 h-50 mx-auto">
            <Lottie animationData={error404} loop={true}></Lottie>
          </div>
        </div>

        <div>
          <p className="fw-bold fs-4 text-danger">{error.statusText || error.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;

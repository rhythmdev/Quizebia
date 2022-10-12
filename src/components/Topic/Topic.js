import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import "./Topic.css";

const Topic = ({ topic }) => {
  const {id, name, logo, total } = topic;
  return (
    <div className="container">
      {/* <div className="product">
        <div className="imgbox">
          <img src={logo} alt="" />
        </div>
        <div className="specifies">
          <h2>
            {name} <br /> <span>{total}</span>
          </h2>

          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div> */}

      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    
 
  </div>
 
  
</div> */}

<div className="card-container shadow p-2">
  <img src={logo} alt=""/>
  <div className="d-flex justify-content-around align-items-center py-4">
  <h5 className="fw-bold ">{name}</h5>
        <h5 className="fw-bold"> Total: {total}</h5>
  </div>
  <Link to={`../topic/${id}`}><button className="star-quiz-btn">Start Quiz <ArrowRightIcon className="right-arrow"></ArrowRightIcon></button></Link>
</div>
{/* <div className="card bg-secondary ">
      <img src={logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> Total: {total}</p>
      </div>
      <div className="card-footer">
      <Link to={`../topic/${id}`}><button className="btn btn-primary">Start Quiz</button></Link>
    
      </div>
    </div> */}
     
    </div>
  );
};

export default Topic;
// onClick={<Link to={`../topic/${id}`}></Link>}






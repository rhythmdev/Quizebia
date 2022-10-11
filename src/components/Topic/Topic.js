import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
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

<div className="card h-100 bg-secondary">
      <img src={logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> Total: {total}</p>
      </div>
      <div className="card-footer">
       <button className="btn btn-primary">Start Quiz</button>
      </div>
    </div>
     
    </div>
  );
};

export default Topic;

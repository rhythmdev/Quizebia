import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";
const Topics = () => {
  const loaderData = useLoaderData();
  const topicsData = loaderData.data;
  
//   console.log(topicsData);

  return (
    <div className="container  d-flex justify-content-center align-items-center mt-5">
      <div className="cards">
      {topicsData.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
      </div>
      
      {/* <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
         
        </div>
      </div> */}
    </div>
  );
};

export default Topics;

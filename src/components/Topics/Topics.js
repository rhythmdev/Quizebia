import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";


const Topics = () => {
  const loaderData = useLoaderData();
  const topicsData = loaderData.data;
  
//   console.log(topicsData);

  return (
    <div className="container  d-flex justify-content-center align-items-center my-5">
      
      <div className="cards">
      {topicsData.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
      </div>
      
     
    </div>
  );
};

export default Topics;

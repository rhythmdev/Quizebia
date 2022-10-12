import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import "./Quizdetails.css";
import Option from "../Option/Option";

const QuizDetails = ({ quiz }) => {
  const { question, options } = quiz;
  return (
    <div>
        <div className="container">
      <div className="row">
        <div className="col  shadow-lg bg-light rounded p-5 fw-semibold g-4">
          <div className=" d-flex justify-content-center align-items-center">
            {question.slice(3, -4)}
            <div className="ms-3">
              <EyeIcon className=" text-dark eye-icon " />
            </div>
          </div>

          <div>
            {
                  options.map((option)=>  <Option key={option.id} option={option}></Option>
                   
                 
                  
                  )
                }
          </div>
        </div>
      </div>
    </div>
    </div>

    
  );
};

export default QuizDetails;

// d-flex justify-content-between align-items-center
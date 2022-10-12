import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import "./Quizdetails.css";
import Option from "../Option/Option";
import { toast } from "react-toastify";

const QuizDetails = ({ quiz }) => {
  const { question, options } = quiz;

  const showAns = (ans) => {
    toast(quiz.correctAnswer,  {autoClose: 1000})
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col  shadow-lg bg-light rounded p-5 fw-semibold g-4">
            <div className=" d-flex justify-content-center align-items-center">
              {question.slice(3, -4)}
              <div className="ms-3">
                <EyeIcon
                  onClick={() => showAns()}
                  className=" text-dark eye-icon "
                />
              </div>
            </div>

            <div>
              {options.map((option) => (
                <Option key={option.id} option={option} quiz={quiz}></Option>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;

// d-flex justify-content-between align-items-center

import React from "react";
import { toast } from "react-toastify";

const Option = ({ option, quiz }) => {
   //console.log("from option",quiz)

  const clickQuiz= (result) =>{
   if(result === quiz.correctAnswer){
    console.log('right')
   }
   else{
    console.log('wrong')
   }
  }
   
  
  return (
    <div>
      <div className="container mt-3">
        <div className="border rounded py-3 bg-secondary text-white">
          <label for="html">
            <input onClick={()=> clickQuiz(option) }
              type="radio"
              id="html"
              name="fav_language"
              value={option}
            ></input>
            <span className="px-2">{option}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Option;

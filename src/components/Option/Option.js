import React from "react";
import { toast } from "react-toastify";

const Option = ({ option, quiz }) => {
   //console.log("from option",quiz)

  const clickQuiz= (result) =>{
   if(result === quiz.correctAnswer){
    toast.success('Yeah!!! Right Answer', {autoClose: 500})
   }
   else{
    toast.warning('Oops!!! Wrong Answer', {autoClose: 500})
   }
  }
   
  
  return (
    <div>
      <div className="container mt-3">
        <div className="border rounded py-3 bg-secondary text-white">
          <label for={option}>
            <input onClick={()=> clickQuiz(option) }
              type="radio"
              id={option}
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

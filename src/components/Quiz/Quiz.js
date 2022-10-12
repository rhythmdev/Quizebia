import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const loadQuizData = useLoaderData();
    // console.log(loadQuizData)
    const quizData = loadQuizData.data;
    
     console.log(quizData)
//      let finalQuestion = question;
// const lastIndex = finalQuestion.lastIndexOf("</p>");
// finalQuestion = finalQuestion.substring(3, lastIndex);
    return (
        <div>
            <h2>This is quiz: {quizData.name}</h2>
          
           {
            quizData.questions.map((quiz) => (
              <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
            ))
           }
        </div>
    );
};

export default Quiz;
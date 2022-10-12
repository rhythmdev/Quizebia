import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const loadQuizData = useLoaderData();
    // console.log(loadQuizData)
    const quizData = loadQuizData.data;
    
     

    return (
        <div>
            <h2 className='my-5'>Quiz of {quizData.name}</h2>
           
           {
            quizData.questions.map((quiz) => (
              <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
            ))
           }
        </div>
    );
};

export default Quiz;
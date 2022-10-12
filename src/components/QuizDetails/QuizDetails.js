import React from 'react';

const QuizDetails = ({quiz}) => {
    const {question, index} = quiz;
    return (
        <div className='bg-dark text-white'>
            <div>
             <h2>Quiz {index + 1}</h2>
            {
                question.slice(3, -4)
            }
            </div>
            
          
        </div>
    );
};

export default QuizDetails;
import React from 'react';

const QuizDetails = ({quiz}) => {
    
    return (
        <div>
            <h2>This is quiz details{quiz.question}</h2>
        </div>
    );
};

export default QuizDetails;
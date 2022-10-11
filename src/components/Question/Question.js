import React from 'react';
import { Card } from 'react-bootstrap';

const Question = ({ question, quizNo }) => {
    return (
        <div>
            <Card className='mb-5 shadow '>
                <Card.Body className='text-center'>
                    <p className='w-50 mx-auto fw-bold'>Quiz {quizNo}: {question.question}</p>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Question;
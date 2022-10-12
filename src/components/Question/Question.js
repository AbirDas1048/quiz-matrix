import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Card, Form, Row } from 'react-bootstrap';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ qs, quizNo, selectedAnswer }) => {
    const { id, question, options, correctAnswer } = qs;
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div>
            <Card className='mb-5 shadow'>
                <Card.Body className='text-center'>
                    <div className='d-flex'>
                        <p className="w-75 mx-auto fw-bold">Quiz {quizNo}: {question}</p>
                        <FontAwesomeIcon onClick={() => setShowAnswer(!showAnswer)} icon={showAnswer ? faEyeSlash : faEye}></FontAwesomeIcon>
                    </div>

                    <Form>
                        <Row lg={2} className="g-4 justify-content-center mb-3">
                            {
                                options.map((option, idx) => <Option key={idx} option={option} questionId={id} optionId={idx} correctAnswer={correctAnswer} selectedAnswer={selectedAnswer}></Option>)
                            }
                        </Row>
                    </Form>
                    {
                        showAnswer ? <p className='text-success'><u>Correct Answer: <span className='fw-bold'>{correctAnswer}</span></u></p> : undefined
                    }

                </Card.Body>
            </Card>

        </div>
    );
};

export default Question;
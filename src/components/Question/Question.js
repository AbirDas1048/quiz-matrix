import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Card, Form, Row } from 'react-bootstrap';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ qs, quizNo }) => {
    const { id, question, options, correctAnswer } = qs;
    const [showAnswer, setShowAnswer] = useState(false);
    const selectedAnswer = (answer) => {

        answer === correctAnswer ? toast.success("Correct Answer") : toast.error("Wrong Answer")
        // toast(answer);
        // toast.success("Success Notification !", {
        //     position: toast.POSITION.TOP_CENTER
        // });

        // toast.error("Error Notification !", {
        //     position: toast.POSITION.TOP_LEFT
        // });
    }
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
                                options.map((option, idx) => <Option key={idx} option={option} questionId={id} optionId={idx} selectedAnswer={selectedAnswer}></Option>)
                            }
                        </Row>
                    </Form>
                    {
                        showAnswer ? <p className='text-success'><u>Correct Answer: <span className='fw-bold'>{correctAnswer}</span></u></p> : undefined
                    }

                </Card.Body>
            </Card>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Question;
import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import './Option.css';

const Option = ({ option, questionId, optionId, selectedAnswer, correctAnswer }) => {
    const radioId = questionId + "-" + optionId;
    return (
        <Col>
            <Card className='h-100 option-card'>
                <Card.Body className='d-flex justify-content-center align-items-center'>
                    <Form.Check type='radio' id={radioId}  >
                        <Form.Check.Input onClick={() => selectedAnswer(correctAnswer, option)} type='radio' name={questionId} className="" />
                        <Form.Check.Label className="w-100">{option}</Form.Check.Label>
                    </Form.Check>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Option;
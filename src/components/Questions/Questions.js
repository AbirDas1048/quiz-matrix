import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Question from '../Question/Question';
import 'react-toastify/dist/ReactToastify.css';

const Questions = () => {
    const loadedAllData = useLoaderData();
    const { status, data } = loadedAllData;
    const { name, questions } = data;
    const selectedAnswer = (correct, answer) => {
        answer === correct ? toast.success("Correct Answer") : toast.error("Wrong Answer");
    }
    let quizNo = 1;
    return (
        <div className='my-3'>
            {status === true ?
                <div className='text-primary'>
                    <p className='text-center fw-bold'>Quiz of {name}</p>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8}>
                                {
                                    questions.map(qs => <Question key={qs.id} qs={qs} selectedAnswer={selectedAnswer} quizNo={quizNo++}></Question>)
                                }
                            </Col>
                        </Row>
                    </Container>
                    <ToastContainer></ToastContainer>
                </div>
                : <p className='text-center fw-bold'>Go to <Link to='/'>Home Page</Link> and select a specific topic</p>
            }

        </div>
    );
};

export default Questions;
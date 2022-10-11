import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const loadedAllData = useLoaderData();
    const { status, data } = loadedAllData;
    const { name, questions } = data;
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
                                    questions.map(qs => <Question key={qs.id} qs={qs} quizNo={quizNo++}></Question>)
                                }
                            </Col>
                        </Row>
                    </Container>

                </div>
                : <p className='text-center fw-bold'>Please select correct topic</p>
            }

        </div>
    );
};

export default Questions;
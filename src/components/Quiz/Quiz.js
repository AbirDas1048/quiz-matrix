import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Quiz = () => {
    const loadedQuizTopics = useLoaderData();
    const quizTopics = loadedQuizTopics.data;
    return (
        <Container className='my-3'>
            <Row md={3} sm={2} xs={1} className="g-4">
                {
                    quizTopics.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
                }
            </Row>
        </Container>

    );
};

export default Quiz;
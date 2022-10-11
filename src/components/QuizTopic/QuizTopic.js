import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const QuizTopic = ({ quizTopic }) => {
    const { id, name, total, logo } = quizTopic;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/questions/${id}`)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={logo} className="bg-light" />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Quiz: {total}
                    </Card.Text>
                    <Button variant='primary' onClick={handleNavigate}>Start Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default QuizTopic;
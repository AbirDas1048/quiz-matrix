import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const loadedQuizTopics = useLoaderData();
    const quizTopics = loadedQuizTopics.data;
    return (
        // <div>

        <Container className='mt-5'>
            <Row className="justify-content-center">
                <Col md={8}>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart width={500} height={300} data={quizTopics} >
                            <CartesianGrid ></CartesianGrid >
                            <XAxis dataKey="name"></XAxis>
                            <YAxis dataKey="total"></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Bar dataKey="total" fill="#8884d8"></Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <h1 className='text-center'>BarChart of Quiz Topics vs Total Questions</h1>
                </Col>
            </Row>

        </Container>

    );
};

export default Statics;
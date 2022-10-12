import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-3'>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is the purpose of React Router?</Accordion.Header>
                            <Accordion.Body>
                                Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How does Context API work?</Accordion.Header>
                            <Accordion.Body>
                                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is useRef Hook in React</Accordion.Header>
                            <Accordion.Body>
                                The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. ReactJS being a modern frontend library took it further by providing a Ref API to access its element, and even a step further through the useRef hook for a functional component. However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how we should use instance fields in classes.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

        </Container>
    );
};

export default Blog;
import React from 'react';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';

import HelpIcon from '../../assets/images/helpIcon.png';
import DocIcon from '../../assets/images/documentIcon.png';
import ChatIcon from '../../assets/images/chatIcon.png';


function AppCards() {
    return (
        <div className="help-section">
            <Container>
                <h2 className="text-center">Need help with something?</h2>
                <Row className="justify-content-md-between justify-content-center">
                    <Col className="mb-4 pb-3 col-10 col-md-4 col-lg-auto">
                        <a target="_blank" href="https://t.me/blackcollateral">
                            <Card className="border-0 card-shadow">
                                <Card.Body className="d-flex align-items-center">
                                    <img src={HelpIcon} alt="card icon" />
                                    <h4>Help Center</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col className="mb-4 pb-3 col-10 col-md-4 col-lg-auto">
                        <a target="_blank" href="https://docs.blackcollateral.com/">
                            <Card className="border-0 card-shadow">
                                <Card.Body className="d-flex align-items-center">
                                    <img src={DocIcon} alt="card icon" />
                                    <h4>Documentation</h4>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col className="mb-4 pb-3 col-10 col-md-4 col-lg-auto">
                        <Card className="border-0 card-shadow">
                            <Card.Body className="d-flex align-items-center">
                                <img src={ChatIcon} alt="card icon" />
                                <h4>Chat with us</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} className="d-none">
                        <Card className="border-0 mw-100 card-shadow">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col md={6} className="mb-md-0 mb-4">
                                        <h4>Join our Newsletter</h4>
                                        <p className="mb-0">Receive latest news and updates about our products</p>
                                    </Col>
                                    <Col>
                                        <Form action="/">
                                            <Form.Control type="email" placeholder="Type your email" />
                                            <div className="text-end pt-3">
                                                <Button variant="btn btn-shadow border-0 btn-grad" type="submit">Submit</Button>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AppCards;
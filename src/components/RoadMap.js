import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

// assets
import Arc from '../assets/images/timeframe-arc.png';

function RoadMap() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="page-banner mb-5">
            <Container className="container-mini">
                <div className="title-banner text-center mb-md-4 mb-2">
                    <h2>Road Map</h2>
                </div>
                <div className="timeframe">
                    <div className="timeframe-year">
                        <span>2021</span>
                    </div>
                    <div className="timeframe-list">
                        <Row className="justify-content-end no-gutters">
                            <Col md={6}>
                                <div className="timeframe-item">
                                    <span className="count">
                                        <img src={Arc} alt="arc" />
                                        Q1
                                    </span>
                                    <h4>Carbonix Whitepaper Finalize Team Members</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="no-gutters">
                            <Col md={6}>
                                <div className="timeframe-item">
                                    <span className="count">
                                        <img src={Arc} alt="arc" />
                                        Q2
                                    </span>
                                    <h4>Finalize the Development Platform MVP - TestNet Release</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-end no-gutters">
                            <Col md={6}>
                                <div className="timeframe-item">
                                    <span className="count">
                                        <img src={Arc} alt="arc" />
                                        Q3
                                    </span>
                                    <h4>Carbonix (BSC) v1 Pilot SetUp Social Platforms Token Generation Event IDO Public Sale</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="no-gutters">
                            <Col md={6}>
                                <div className="timeframe-item">
                                    <span className="count">
                                        <img src={Arc} alt="arc" />
                                        Q3
                                    </span>
                                    <h4>Carbonix Go Live Staking Contracts released Carbonix (ETH & Polygon) Pilot</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="timeframe-year">
                        <span>2022</span>
                    </div>
                    <div className="timeframe-list">
                        <Row className="justify-content-end no-gutters">
                            <Col md={6}>
                                <div className="timeframe-item">
                                    <span className="count">
                                        <img src={Arc} alt="arc" />
                                        Q1
                                    </span>
                                    <h4>CARBONIX DAO Announced DAO Audits Additional Tranche releases Secondary Market Products</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="no-gutters">
                            <Col md={6}>
                                <div className="timeframe-item">
                                    <span className="count">
                                        <img src={Arc} alt="arc" />
                                        Q2
                                    </span>
                                    <h4>Additional Marketing</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default RoadMap;
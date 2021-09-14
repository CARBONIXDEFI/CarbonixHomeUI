import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
// import {
//     Link
//   } from "react-router-dom";


import TeamCircle from '../../assets/images/team-circle.png';


function TeamSection() {
    return (
        <div className="team-section text-md-left text-center my-4">
            <Container>
                <Row className="align-items-center">
                    <Col md={5} lg={4} className="mb-md-0 mb-4">
                        <h2 className="d-none d-md-block">Meet <br />Our Team</h2>
                        <h2 className="d-md-none">Meet Our Team</h2>
                        <p>Our team is composed of industry experts with a track record of success.</p>
                        <a target="_blank" href="https://t.me/blackcollateral" className="btn text-none border-0 px-md-4 px-3 btn-grad btn-shadow">Join us on Telegram</a>
                    </Col>
                    <Col md={7} lg={8}>
                        <img src={TeamCircle} className="img-fluid d-block mx-auto" alt="team circle" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TeamSection;
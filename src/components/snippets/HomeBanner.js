import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
// import {
//     Link
//   } from "react-router-dom";


import BannerImage from '../../assets/images/banner-image.png';

function HomeBanner() {
    return (
        <div className="home-banner text-center">
            <Container>
                <Row className="justify-content-center mb-md-5 mb-4">
                    <Col xl={8} md={9} xs={11}>
                        <h2 className="text-uppercase">Collateral Banking Redefined</h2>
                        <h3>A new kind of "Self-Paying" DEFI Lending Protocol with yield based risk derivatives</h3>
                        <h5>POWERED BY BLACK COLLATERAL</h5>
                        <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank" className="btn m-1 px-4 border-0  btn-grad">ACCESS Explainer Videos</a>
                        <a href="https://github.com/CARBONIXFI/CertikAuditReport" target="_blank" className="btn m-1 px-4 border-0 btn-grad">CERTIK AUDIT REPORT</a>
                    </Col>
                </Row>
            </Container>
            <img src={BannerImage} alt="banner" className="w-100 d-block" />
        </div>
    );
}

export default HomeBanner;
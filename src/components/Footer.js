import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import Logo from '../assets/images/logo2.png';
import TwitterIcon from '../assets/images/twitter-lg.png';
// import BlurIcon from '../assets/images/blue-icon-lg.png';
import WhiteIcon from '../assets/images/white-icon-lg.png';
import YoutubeIcon from '../assets/images/youtube-lg.png';
import GitIcon from '../assets/images/git-lg.png';
// import DIcon from '../assets/images/d-lg.png';

export default class FooterMain extends React.Component {
    render() {
        return (
            <div className="footer mb-0">
                <div className="footer-content">
                    <Container>
                        <Row>
                            <Col md={4} className="mb-5">
                                <div className="f-logo">
                                    <img src={Logo} alt="logo" className="img-fluid" />
                                    CARBONIX
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <Col md={12}>
                                        <Row>
                                            <Col xs={6} md={4} className="mb-4">
                                                <h5>About</h5>
                                                <ul>
                                                    {/* <li><Link target="_blank" to="/team">Team</Link></li> */}
                                                    <li><Link target="_blank" to="/road-map">Roadmap</Link></li>
                                                    <li><Link to="/">Architecture</Link></li>
                                                </ul>
                                            </Col>
                                            <Col xs={6} md={4} className="mb-4">
                                                <h5>Whitepaper</h5>
                                                <ul>
                                                    <li><a href="https://github.com/BLACKCOLLATERAL/Whitepaper" target="_blank">Litepaper</a></li>
                                                    <li><a href="https://github.com/BLACKCOLLATERAL/Whitepaper" target="_blank">Token Metrics</a></li>
                                                </ul>
                                            </Col>
                                            <Col xs={6} md={4} className="mb-4">
                                                <h5>Garden</h5>
                                                <ul>
                                                    <li><Link to="/">Staking Tranche</Link></li>
                                                    <li><Link to="/">Yield Tranche</Link></li>
                                                    <li><Link to="/">Risk Tranche</Link></li>
                                                </ul>
                                            </Col>
                                            <Col xs={6} md={4} className="mb-4">
                                                <h5>Governance</h5>
                                                <ul>
                                                    <li><Link to="/">DAO</Link></li>
                                                    <li><Link to="/">Signal</Link></li>
                                                    <li><Link to="/">Forum</Link></li>
                                                </ul>
                                            </Col>
                                            <Col xs={12} md={8} className="mb-4 text-center text-md-left">
                                                <h5>Follow Us </h5>
                                                <div className="footer-social flex-xl-nowrap flex-wrap mt-3 d-flex justify-content-center justify-content-md-start align-items-center">
                                                    <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                                    {/* <a href="/"><img src={BlurIcon} alt="social icon" /></a> */}
                                                    <a href="https://medium.com/@carbonixfi" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                                    <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                                    <a href="https://github.com/CARBONIXDEFI" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                                    {/* <a href="/"><img src={DIcon} alt="social icon" /></a> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={5} className="d-none">
                                        <div className="regions">
                                            <h5>Region</h5>
                                            <div className="mt-3">
                                                <select className="form-control">
                                                    <option>United States</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <h5>Follow Us </h5>
                                        <div className="footer-social flex-xl-nowrap flex-wrap mt-3 d-flex align-items-center">
                                            <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                            {/* <a href="/"><img src={BlurIcon} alt="social icon" /></a> */}
                                            <a href="https://medium.com/@blackcollateral" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                            <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                            <a href="https://github.com/BLACKCOLLATERAL" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                            {/* <a href="/"><img src={DIcon} alt="social icon" /></a> */}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="copyright">
                    © 2021, Carbonix Finance, All rights reserved
                </div>
            </div>
        );
    }
}

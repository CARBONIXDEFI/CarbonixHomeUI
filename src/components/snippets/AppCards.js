import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";


import NoBar from '../../assets/images/no-bar.png';

import CardImage1 from '../../assets/images/ce-image.png';
import CardImage2 from '../../assets/images/spdb-image.png';
import CardImage3 from '../../assets/images/srm-image.png';
import CardImage4 from '../../assets/images/cy-image.png';
import CardImage5 from '../../assets/images/nlr-image.png';
import CardImage6 from '../../assets/images/lm-image.png';

import TwitterIcon from '../../assets/images/twitter-lg.png';
// import BlurIcon from '../../assets/images/blue-icon-lg.png';
import WhiteIcon from '../../assets/images/white-icon-lg.png';
import YoutubeIcon from '../../assets/images/youtube-lg.png';
import GitIcon from '../../assets/images/git-lg.png';
// import DIcon from '../../assets/images/d-lg.png';

function AppCards() {
    return (
        <div className="apps-area text-center">
            <Container>
                <img src={NoBar} alt="no bar" className="app-no-barImage img-fluid" />
                <Row className="app-no-bar no-gutters">
                    <Col xs={4}>
                        Liquidations
                    </Col>
                    <Col xs={4}>
                        Fees
                    </Col>
                    <Col xs={4}>
                        Monthly Payments
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={4} sm={6} xs={10} className="mb-5">
                        <Card className="border-0 card-shadow">
                            <div className="card-social justify-content-between d-flex align-items-center">
                                <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={BlurIcon} alt="social icon" /></a> */}
                                <a href="https://medium.com/@carbonixfi" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                <a href="https://github.com/CARBONIXDEFI" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={DIcon} alt="social icon" /></a> */}
                            </div>
                            <Card.Body>
                                <img src={CardImage1} alt="card anim" className="img-fluid" />
                                <h4>Capital <br />Efficient</h4>
                                <p>Get instant access to cbUSD while your deposit earns interest in the background</p>
                                <a target="_blank" href="https://docs.carbonfinance.com" className="btn border-0 btn-grad btn-shadow">Learn More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={10} className="mb-5">
                        <Card className="border-0 card-shadow">
                            <div className="card-social justify-content-between d-flex align-items-center">
                                <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={BlurIcon} alt="social icon" /></a> */}
                                <a href="https://medium.com/@carbonixfi" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                <a href="https://github.com/CARBONIXDEFI" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={DIcon} alt="social icon" /></a> */}
                            </div>
                            <Card.Body>
                                <img src={CardImage2} alt="card anim" className="img-fluid" />
                                <h4>Self-Paying <br />Debt Balance</h4>
                                <p>Over time your debt is paid off completely automatically</p>
                                <a target="_blank" href="https://docs.carbonfinance.com" className="btn border-0 btn-grad btn-shadow">Learn More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={10} className="mb-5">
                        <Card className="border-0 card-shadow">
                            <div className="card-social justify-content-between d-flex align-items-center">
                                <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={BlurIcon} alt="social icon" /></a> */}
                                <a href="https://medium.com/@carbonixfi" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                <a href="https://github.com/CARBONIXDEFI" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={DIcon} alt="social icon" /></a> */}
                            </div>
                            <Card.Body>
                                <img src={CardImage3} alt="card anim" className="img-fluid" />
                                <h4>SMART Risk <br />Mitigation</h4>
                                <p>Minimize the DEFI Market risk using debt based yield derivatives</p>
                                <a target="_blank" href="https://docs.carbonfinance.com" className="btn border-0 btn-grad btn-shadow">Learn More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={10} className="mb-5">
                        <Card className="border-0 card-shadow">
                            <div className="card-social justify-content-between d-flex align-items-center">
                                <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={BlurIcon} alt="social icon" /></a> */}
                                <a href="https://medium.com/@carbonixfi" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                <a href="https://github.com/CARBONIXDEFI" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={DIcon} alt="social icon" /></a> */}
                            </div>
                            <Card.Body>
                                <img src={CardImage4} alt="card anim" className="img-fluid" />
                                <h4>Competitive <br />Yield</h4>
                                <p>Choose from a growing number of high yield strategies to repay your debt</p>
                                <a target="_blank" href="https://docs.carbonfinance.com" className="btn border-0 btn-grad btn-shadow">Learn More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={10} className="mb-5">
                        <Card className="border-0 card-shadow">
                            <div className="card-social justify-content-between d-flex align-items-center">
                                <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={BlurIcon} alt="social icon" /></a> */}
                                <a href="https://medium.com/@carbonixfi" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                <a href="https://github.com/CARBONIXDEFI" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={DIcon} alt="social icon" /></a> */}
                            </div>
                            <Card.Body>
                                <img src={CardImage5} alt="card anim" className="img-fluid" />
                                <h4>No Liquidation <br />Risk</h4>
                                <p>No matter what happens we'll never liquidate your deposit and you'll keep full access</p>
                                <a target="_blank" href="https://docs.carbonfinance.com" className="btn border-0 btn-grad btn-shadow">Learn More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={10} className="mb-5">
                        <Card className="border-0 card-shadow">
                            <div className="card-social justify-content-between d-flex align-items-center">
                                <a href="https://twitter.com/CarbonixFi" target="_blank"><img src={TwitterIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={BlurIcon} alt="social icon" /></a> */}
                                <a href="https://medium.com/@carbonixfi" target="_blank"><img src={WhiteIcon} alt="social icon" /></a>
                                <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={YoutubeIcon} alt="social icon" /></a>
                                <a href="https://github.com/CARBONIXDEFI" target="_blank"><img src={GitIcon} alt="social icon" /></a>
                                {/* <a href="./"><img src={DIcon} alt="social icon" /></a> */}
                            </div>
                            <Card.Body>
                                <img src={CardImage6} alt="card anim" className="img-fluid" />
                                <h4>Low <br />Maintenance</h4>
                                <p>Once you've withdrawn your cbUSD you can simply let your loan repay itself</p>
                                <a target="_blank" href="https://docs.carbonfinance.com" className="btn border-0 btn-grad btn-shadow">Learn More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AppCards;
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";


import MagicalRisk from '../../assets/images/magical-risk-image.png';
import CarbonImage from '../../assets/images/carbon-image.png';
import CarbonStablizerImage from '../../assets/images/carbon-stablizer-image.png';
import BlackCollateralImage from '../../assets/images/black-collateral.png';
import CarbonProtocolImage from '../../assets/images/carbon-protocol-image.png';

import AppCards from './AppCards';

function HomeSections() {
    return (
        <>
            <div className="body-section text-center bg-gray" id="about">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <h2>Magical Risk Free Loans That Pays Itself</h2>
                            <p>Imagine a bank. You can deposit money, and the bank pays you 10-15% interest. There's a credit card attached to the account, with a credit limit of 50% of the amount you have deposited. There's no interest on the card. There are no monthly payments to make. Instead, the interest you earn on your balance pays off any debt you have, automatically. Additionally, you can minimize the DeFi risks, such as inflation, market correction, and cash-flow volatility situations through tokenized debt based tranch profiles</p>
                            <div>
                                <img src={MagicalRisk} alt="MagicalRisk" className="img-fluid" />
                            </div>
                            {/* <Link to="/" className="btn border-0 btn-grad btn-shadow">Join Now</Link> */}
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <AppCards />

            <div className="body-section text-white text-center bg-dark">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <h2>Black Collateral (BLACK)</h2>
                            <p><strong>BLACK COLLATERAL</strong> is the fuel that drives the Carbonix platform economics. Users claim new black tokens tokens by staking liquidity in various staking pools. Read the Whitepaper below to learn more about the currency dynamics</p>
                            <div>
                                <img src={BlackCollateralImage} alt="MagicalRisk" className="img-fluid" />
                            </div>
                            <a target="_blank" href="https://github.com/CARBONIXFI/Whitepaper" className="btn border-0 px-4 mt-4 btn-grad btn-shadow">DOWNLOAD WHITE PAPER</a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="body-section text-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <h2>Carbonix Stable Coin</h2>
                            <p><strong>cbUSD</strong> is the stablecoin that is minted when users take out a loan using Carbonix platform. It can be traded for other stable coins using a dedicated stable swap pool or swapped to BUSD over time using Carbonix Stabilizer. cbUSD can also be staked to earn BLACK tokens in the cbUSD pool.</p>
                            <div>
                                <img src={CarbonImage} alt="CarbonImage" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="body-section text-center bg-gray">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <h2>Carbonix Stablizer</h2>
                            <p>The <strong>CARBONIX stabilizer</strong> completes the life cycle of cbUSD. It backstops the peg by guaranteeing that all outstanding alUSD can be converted 1:1 to BUSD. When cbUSD is staked in the Stabilizer, it is converted to BUSD over time via the proceeds from loan repayments. When BUSD is eventually claimed, the staked cbUSD is burned.</p>
                            <div>
                                <img src={CarbonStablizerImage} alt="CarbonStablizerImage" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="body-section text-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <h2>Carbonix Protocol Architecture</h2>
                            <p>The basic mechanics of CARBONIX is simple: a borrower deposits an amount of BUSD (1 BUSD is 1 USD), and take a loan of up to 50% LTV of the deposited amount in cbUSD, CARBONIX’s USD stable coin after applying a debt based tranch to minimize DeFi risk. Over time, the 50% LTV loan is paid off using the net returns from staking the initial principal of BUSD deposited.</p>
                            <div>
                                <img src={CarbonProtocolImage} alt="CarbonImage" className="img-fluid mt-4" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomeSections;
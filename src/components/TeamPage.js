import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

// components
import TeamSection from './snippets/TeamSection';
import TeamCard from './snippets/TeamMember';

// Core Team
import CTMember1 from '../assets/images/member-tm.png';
import CTMember2 from '../assets/images/member-tw.png';
import CTMember3 from '../assets/images/member-mm.png';
import CTMember4 from '../assets/images/member-dr.png';
import CTMember5 from '../assets/images/member-bg.png';
import CTMember6 from '../assets/images/member-cl.png';

// Liquidity Providers
import CTMember7 from '../assets/images/member-frc.png';
import CTMember8 from '../assets/images/member-pc.png';
import CTMember9 from '../assets/images/member-dv.png';

// Technology Partners
import CTMember10 from '../assets/images/member-dm.png';
import CTMember11 from '../assets/images/member-at.png';
import CTMember12 from '../assets/images/member-ce.png';

// Advisors
import CTMember13 from '../assets/images/member-am.png';
import CTMember14 from '../assets/images/member-kw.png';
import CTMember15 from '../assets/images/member-sk.png';

function TeamPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="page-banner mb-5">
            <div className="team-banner mb-4">
                <TeamSection />
            </div>
            
            <Container>
                <div className="team-group text-center">
                    <h2 className="mb-3 ">Core Team</h2>

                    <Row className="flex-nowrap flex-sm-wrap overflow-auto pt-3">
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember1} name="Troy Murray" designation="Co-founder" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember2} name="Tyler Ward" designation="Co-founder" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember3} name="Milad Mostavi" designation="Co-founder" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember4} name="Dragos Rizescu" designation="Co-founder" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember5} name="Bogdan Gheorghe" designation="Co-founder" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember6} name="Casian Lacatusu" designation="Co-founder" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                    </Row>
                </div>

                <div className="team-group text-center">
                    <h2 className="mb-3 ">Liquidity Providers</h2>

                    <Row className="flex-nowrap flex-sm-wrap overflow-auto pt-3">
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember7} name="Fourth Revolution Capital" designation="Investment Firm" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember8} name="ParaFi Capital" designation="Investment Firm" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember9} name="D64 Ventures" designation="Investment Firm" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                    </Row>
                </div>

                <div className="team-group text-center">
                    <h2 className="mb-3 ">Technology Partners</h2>

                    <Row className="flex-nowrap flex-sm-wrap overflow-auto pt-3">
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember10} name="Digital MOB" designation="Blockchain Development Company" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember11} name="Atpar" designation="Actus Protocol Creators" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember12} name="Centrality" designation="Blockchain Venture Studio" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                    </Row>
                </div>

                <div className="team-group text-center">
                    <h2 className="mb-3 ">Advisors</h2>

                    <Row className="flex-nowrap flex-sm-wrap overflow-auto pt-3">
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember13} name="Aaron McDonald" designation="CEO of Centrality" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember14} name="Kain Warwick" designation="Founder of Synthetix" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                        <Col xs='auto' sm={6} md={4} className="mb-4">
                            <TeamCard image={CTMember15} name="Stani Kulechov" designation="Founder of Aave" linkedIn="https://linkedin.com" twitter="https://twitter.com" />
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    );
}

export default TeamPage;
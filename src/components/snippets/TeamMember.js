import React from 'react';
import { Card } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import LinkedIn from '../../assets/images/linkedin.png';
import Twitter from '../../assets/images/twitter-sm.png';

function TeamMember(props) {
    return (
        <Card className="border-0 team-card mb-2 card-shadow">
            <Card.Body>
                <img src={props.image} alt={props.name} className="img-fluid" />
                <h4>{props.name}</h4>
                <p>{props.designation}</p>
                <div className="mb-4">
                    {props.linkedIn ? <a href={props.linkedIn}><img src={LinkedIn} alt="linkedI   n" /></a> : null }
                    {props.twitter ? <a href={props.twitter}><img src={Twitter} alt="Twitter" /></a> : null}
                </div>
                <Link to="/" className="btn btn-outline">Read Bio</Link>
            </Card.Body>
        </Card>
    );
}

export default TeamMember;
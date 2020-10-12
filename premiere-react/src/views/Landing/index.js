import React, {Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LandingPage extends Component{
    render(){
        return(
                <div>
                    <Row>
                        <Col>
                            <Link className="video-link" to={{pathname: "/video", state: {assetId: "12345"}}}>
                                <img alt="imagDJI_0006e" src="./assets/DJI_0006.jpg"/>
                            </Link>
                        </Col>
                        <Col>
                            <img alt="DJI_0007"  src="./assets/DJI_0007.jpg"/>
                        </Col>
                        <Col>
                            <img alt="DJI_0010"  src="./assets/DJI_0010.jpg"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img alt="imagDJI_0006e" src="./assets/DJI_0006.jpg"/>
                        </Col>
                        <Col>
                            <img alt="DJI_0007"  src="./assets/DJI_0007.jpg"/>
                        </Col>
                        <Col>
                            <img alt="DJI_0010"  src="./assets/DJI_0010.jpg"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img alt="imagDJI_0006e" src="./assets/DJI_0006.jpg"/>
                        </Col>
                        <Col>
                            <img alt="DJI_0007"  src="./assets/DJI_0007.jpg"/>
                        </Col>
                        <Col>
                            <img alt="DJI_0010"  src="./assets/DJI_0010.jpg"/>
                        </Col>
                    </Row>
                </div>
        )
    }
}

export default LandingPage
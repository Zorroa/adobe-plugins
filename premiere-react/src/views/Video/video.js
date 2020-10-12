import React, {Component} from 'react';
import {Row, Col } from 'react-bootstrap';

class VideoSection extends Component{
    render(){
        return(
                <div>
                    <Row>
                        <Col>
                        <video
                            id="video"
                            controls
                            preload="metadata">
                        </video>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img alt="imagDJI_0006e" src="./assets/DJI_0006.jpg"/>
                        </Col>
                    </Row>
                </div>
        )
    }
}

export default VideoSection
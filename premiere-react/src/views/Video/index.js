import React, {Component} from 'react';
import VideoSection from './video'
import SnapshotSection from './snapshot'
import {Row, Col, Button } from 'react-bootstrap';

class VideoPage extends Component{
    constructor(props){
        super()
        console.log(props.state.assetId)
        this.state = {
            showVideoPage: true,
            navTitle: "Snapshot",
            assetId: props.state.assetId
        }
    }

    toggleHidden(){
        this.setState({
            showVideoPage: !this.state.showVideoPage,
            navTitle: (this.state.showVideoPage)?"Video":"Snapshot"
        })
    }

    render(){
        return(
                <div>
                    <Row>
                        <Col>
                            <Button onClick={this.toggleHidden.bind(this)} type="button" className="btn btn-default btn-lg">{this.state.navTitle}</Button>
                        </Col>
                    </Row>
                    <div>
                    {this.state.showVideoPage && <VideoSection />}
                    {!this.state.showVideoPage && <SnapshotSection />}
                    </div>
                    
                </div>
        )
    }
}

export default VideoPage
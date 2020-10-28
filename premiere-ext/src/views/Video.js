import React, { Component } from "react";
import {Row, Col } from 'react-bootstrap';
import {downloadFile, getProxy, addToWorkspace} from '../Zapi';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader'

class Video extends Component {
  constructor(props){
    super()
    this.state = {
      ...props.location.state, url: null, mimeType: null
    }
  }

  async componentDidMount(){
    const asset = getProxy(this.state.files)
    
    const filePath = await downloadFile(asset['id'])

    this.setState({
      url: filePath,
      mimeType: asset["mimetype"]
    })
    
  }

  async onAdd(event){
    const files = arguments[0].files

    const id = getProxy(files)["id"]

    const filePath = await downloadFile(id)

    addToWorkspace(filePath)
  }

  render() {
    if (!this.state.url){
      return <BeatLoader size={20} color={"#ffffff"} loading={true}/>
    }

    let displayType

    if (this.state.mimeType === "image/jpeg"){
      displayType = <img src={this.state.url}/>
    }else{
      displayType = <video controls autoPlay src={this.state.url} />
    }

    return (
      <div>
        <Row><Col>
            <label><div className="thumb-button" id={this.state.id} data={this.state.files} onClick={this.onAdd.bind(this, this.state)}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
            </div>Add to workspace</label>
            </Col></Row>
      <Row>
          <Col>
              {displayType}
          </Col>
      </Row>
  </div>
    );
  }
}
 
export default Video;
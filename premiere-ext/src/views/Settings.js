import React, { Component } from "react";
import axios from 'axios';

class Settings extends Component {
  constructor(props){
    super()
    this.state = {
        zapiKey:  "",
        projectId: "",
        zapiServer: "https://api.zvi.zorroa.com"
    }
  }

  async componentDidMount(){
    
    let zapiKey = ""

    const query = `query{userAuthorization{projectId, zapiServer}}`

    let res = await axios.get('http://localhost:3200/graphql?query='+encodeURIComponent(query), {
        headers: {
            "Content-Type":"application/json"
    }})
    
    let {projectId, zapiServer} = res['data']['data']['userAuthorization']
    console.log(zapiServer)
    zapiServer = decodeURIComponent(zapiServer)
    
    if (zapiServer !== ""){
        zapiKey = "*****************"
    }

    this.setState({
        projectId, zapiServer, zapiKey
    })
  }

  onApiKey(e){this.setState({zapiKey:e.target.value})}
  onApiServer(e){this.setState({zapiServer:e.target.value})}
  onProjectId(e){this.setState({projectId:e.target.value})}

  async onUploadFile(event){
    console.log(this.state)
    const query = 
    `query{
        authorize(input: {
            zapiKey:"${encodeURIComponent(this.state.zapiKey)}",
            projectId: "${encodeURIComponent(this.state.projectId)}", 
            zapiServer: "${encodeURIComponent(this.state.zapiServer)}"}){
              status
        }
      }`

    console.log(query)
    let res = await axios.get('http://localhost:3200/graphql?query='+encodeURIComponent(query), {
        headers: {
            "Content-Type":"application/json"
        }})
    console.log(res)
  }

  render() {
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-md-10">
                <form method="post" action="#" id="#">
                    <div className="form-group">
                        <label>Project ID </label>
                        <input type="text" name="projectid" className="form-control" onChange={this.onProjectId.bind(this)} value={this.state.projectId}/>
                        <label>Server </label>
                        <input type="text" name="server" className="form-control" onChange={this.onApiServer.bind(this)} value={this.state.zapiServer}/>
                        <label>Paste your apikey </label>
                        <input type="password" name="apikey" className="form-control" onChange={this.onApiKey.bind(this)} value={this.state.zapiKey}/>
                    </div>
                    <div className="col">
                        <button width="100%" type="button" className="btn btn-info" onClick={this.onUploadFile.bind(this)}>Submit</button>
                    </div>
                </form>
            </div>
            <div className="col"></div>
      </div>
    );
  }
}
 
export default Settings;
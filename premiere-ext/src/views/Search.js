import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {downloadFile, getProxy, addToWorkspace} from '../Zapi'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
 
const getQuery = function(term,type){
    if (term && type !== "all"){
        return `
            query{
                search(input:{term: "`+term+`", type: "`+type+`",
                getThumbnail:true}){
                assets{
                    id, thumbnail, proxy, files{category, id, mimetype, size}
                }
                }
            }`
    }else{
        return `
            query{
                search(input:{term: "`+term+`",
                getThumbnail:true}){
                assets{
                    id, thumbnail, proxy, files{category, id, mimetype, size}
                }
                }
            }`
    }
}

class Search extends Component {
  constructor(props){
      super()
      
      this.state = {
        showLoading: true,
        assets: [], ...props.match.params
    }
  }

  componentDidMount(){
    const {term, type} = this.state

    this.loadAssets(term, type)
  }

  componentWillReceiveProps(props){
    const {term, type} = props.match.params

    this.setState({ term, type })

    this.loadAssets(term, type)
  }


  async onAdd(event){
    console.log(event)
    const files = arguments[0].files

    const id = getProxy(files)["id"]

    const filePath = await downloadFile(id)

    addToWorkspace(filePath)
  }

  async loadAssets(term, type){
    this.setState({
        showLoading: true
    })
    const query = getQuery(term, type)
    
    // load assets
    let res = await axios.get('http://localhost:3200/graphql?query='+encodeURIComponent(query), {
        headers: {
            "Content-Type":"application/json"
        }})
    
    const assets = res['data']['data']['search']['assets']

    this.setState({
        assets: assets,
        showLoading: false
      });
  }

  render() {
    // if (this.state.assets.length === 0){
    //     return <BeatLoader size={20} color={"#ffffff"} loading={true}/>
    // }

    return (
        <div className="container">
            <div className="grid">
            {this.state.assets.map(asset => (
                <div key={asset.id} className="cell thumb-container">
                <Link className="video-link" to={{pathname: "/video", state: asset}}>
                    <img key={asset.id} id={asset.id} src={asset.thumbnail} className="responsive-image" alt={asset.thumbnail}/>
                </Link>
                <div className="thumb-buttons">
                    <div className="thumb-button" id={asset.id} data={asset.files} onClick={this.onAdd.bind(this, asset)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <BeatLoader size={20} color={"#ffffff"} loading={this.state.showLoading}/>
        </div>
    );
  }
}
 
export default Search;
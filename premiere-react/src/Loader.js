import React from 'react'
import axios from 'axios'

class Loader extends React.Component {
    render(){
        const Component = this.props.component
        const url = this.props.url
        console.log('do somet stuff before load component '+this.props.location.state)
        console.log(url)

        axios.get("http://localhost:3030"+url)
        .then(res => {
            console.log(res)
        })
        
        return <Component state={this.props.location.state} />
    }
}

export default Loader
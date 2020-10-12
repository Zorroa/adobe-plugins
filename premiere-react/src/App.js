import {Container} from 'react-bootstrap';
import LandingPage from './views/Landing'
import VideoPage from './views/Video'
import Navigation from './views/Navbar';
import Loader from './Loader'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Navigation/>
        <Router>
            <Switch>
                <Loader component={LandingPage} url="/api/v3/assets/_search/car" exact={true} path="/" />
                <Loader component={VideoPage} path="/video" />
            </Switch>
        </Router>
        </Container>
      </div>
    );
  }
}

export default App;

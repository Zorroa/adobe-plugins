import React, { Component } from "react"
import { Container } from "react-bootstrap"
import { Route, HashRouter } from "react-router-dom"
import Home from "./views/Home"
import Video from "./views/Video"
import Search from "./views/Search"
import Settings from "./views/Settings"
import Navigation from "./views/Navigation"

import "./App.css"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Container fluid>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/video" component={Video} />
          <Route path="/search/:term/:type" component={Search} />
          <Route path="/settings" component={Settings} />
        </Container>
      </HashRouter>
    )
  }
}

export default App

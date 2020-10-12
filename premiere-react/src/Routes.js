import react from "react"
import LandingPage from './views/Landing'
import VideoPage from './views/Video'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

export default function Routing(){
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route path="/video">
                    <VideoPage/>
                </Route>
            </Switch>
        </Router>
    )
}
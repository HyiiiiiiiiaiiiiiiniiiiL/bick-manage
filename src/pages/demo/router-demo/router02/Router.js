import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from "./Home"
import Main from "./Main"
import About from "./About"
import Topic from "./Topic"
export default class IRoute extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Home>
                        <Route path="/" render={() =>
                            <Main>
                                <Route path="/main/a" component={About} />
                            </Main>
                        }></Route>
                        <Route path="/about" component={About} />
                        <Route path="/topic" component={Topic} />
                    </Home>
                </Router>
            </div>
        )
    }
}
import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from "./pages/nomatch"
export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                {/* switch匹配到一个后，就不会再往下执行 */}
                                {/* 如果这里没有添加switch,它会把这里所有加载的路由全部加载到页面上 */}
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        )
    }
}
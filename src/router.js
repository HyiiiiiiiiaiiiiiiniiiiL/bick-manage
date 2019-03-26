import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Message from './pages/ui/message'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import FormLogin from "./pages/form/login"
import Tabs from './pages/ui/tabs'
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
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loading} />
                                <Route path="/admin/ui/notice" component={Notice} />
                                <Route path="/admin/ui/message" component={Message} />
                                <Route path="/admin/ui/tabs" component={Tabs} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/carousel" component={Carousels} />
                                <Route path="/admin/form/login" component={FormLogin} />
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
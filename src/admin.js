import React from 'react'
import { Row, Col } from 'antd'
import Header from "./components/Header"
import Footer from "./components/Footer"
import NavLeft from "./components/NavLeft"
import Home from "./pages/home"
import "./style/common.less"
export default class Admin extends React.Component {
    render() {
        return <div>
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={20} className="main">
                    <Header></Header>
                    <Row className="content">
                        {/* <Home /> */}
                        {/* 动态展示子组件的内容 */}
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        </div>
    }
} 
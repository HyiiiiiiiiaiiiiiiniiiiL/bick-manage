import React from 'react'
import { Row, Col } from "antd"
import Util from "../../Utils/utils"
import axios from '../../axios'
import "./index.less"

export default class Header extends React.Component {
    state = {

    }
    componentWillMount() {
        this.setState({
            userName: '肉啵特'
        })
        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPIDate()
    }
    getWeatherAPIDate() {
        let city = encodeURIComponent("上海")
        //直接调用百度api存在跨域问题，使用jsonp插件解决
        axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=shanghai&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,

        }).then((res) => {
            if (res.status == "success") {
                let weatherData = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl: weatherData.dayPictureUrl,
                    nightPictureUrl: weatherData.nightPictureUrl,
                    temperature: weatherData.temperature,
                    weather: weatherData.weather,
                    wind: weatherData.wind
                })
            }

        })
    }
    render() {
        return <div className="header">
            <Row className="header-top">
                <Col span={24}>
                    <span>欢迎,{this.state.userName}</span>
                    <a href="http://www.baidu.com">退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span={4} className="breadcrumb-title">
                    首页
                </Col>
                <Col span={20} className="weather">
                    <span className="date">{this.state.sysTime}</span>
                    <span className="weather-img">
                        <img src={this.state.dayPictureUrl} alt="白天天气图片" />
                    </span>
                    <span className="weather-detail">
                        {this.state.weather}
                    </span>
                </Col>
            </Row>
        </div>
    }
}
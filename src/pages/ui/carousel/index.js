import React from 'react'
import { Card, Carousel } from "antd"
import "../ui.less"
export default class Carousels extends React.Component {
    render() {
        return (
            <div>
                <Card title="文字轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><h3>HHHHHHHHHHHH</h3></div>
                        <div><h3>LLLLLLLLLLLLL</h3></div>
                        <div><h3>OOOOOOOOOOOOO</h3></div>
                        <div><h3>MMMMMMMMMMMM</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><img src="/carousel-img/carousel-1.jpg" alt="轮播图片" /></div>
                        <div><img src="/carousel-img/carousel-2.jpg" alt="轮播图片" /></div>
                        <div><img src="/carousel-img/carousel-3.jpg" alt="轮播图片" /></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
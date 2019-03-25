import React from 'react'
import { Card, Button, message } from "antd"
export default class Messages extends React.Component {
    showMessage = (type) => {
        message[type]("想吃章鱼小丸子")
    }
    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage("success")}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage("info")}>Info</Button>
                    <Button type="primary" onClick={() => this.showMessage("warning")}>Warning</Button>
                    <Button type="primary" onClick={() => this.showMessage("error")}>Error</Button>
                    <Button type="primary" onClick={() => this.showMessage("loading")}>Loading</Button>
                </Card>

            </div>
        )
    }
}
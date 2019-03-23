import React from 'react'
import { Card, Modal, Button } from "antd"

export default class Modals extends React.Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:'确认',
            content:'Are you sure?',
            onOk(){
                console.log("OK")
            },
            onCancel(){
                console.log("cancle")
            }
        })

    }
    handleOpen = (type) => {
        // if(type===1){
        //     this.setState({
        //         showModal:true
        //     })
        // }
        //这种方法不灵活，推荐使用下面这种方法
        this.setState({
            [type]: true
        })

    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('showModal1')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('showModal2')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('showModal3')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('showModal4')}>Warring</Button>
                </Card>
                <Modal title="React" visible={this.state.showModal1} onCancel={() => {
                    this.setState({
                        showModal1: false
                    })
                }}>
                    <p>今天周五该下班啦</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal2} 
                okText="哇，开心"
                cancelText="xixixi"
                onCancel={() => {
                    this.setState({
                        showModal2: false
                    })
                }}>
                    <p>今天周五该下班啦</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal3} 
                okText="哇，开心"
                cancelText="xixixi"
                style={{top:'20px'}}
                onCancel={() => {
                    this.setState({
                        showModal3: false
                    })
                }}>
                    <p>今天周五该下班啦</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal4} 
                okText="哇，开心"
                cancelText="xixixi"
                wrapClassName="vertical-center-modal"
                onCancel={() => {
                    this.setState({
                        showModal4: false
                    })
                }}>
                    <p>今天周五该下班啦</p>
                </Modal>
            </div>
        )
    }
}
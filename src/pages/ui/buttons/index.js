import React from 'react'
import { Card, Button, Radio } from "antd"
import "../ui.less"
export default class Buttons extends React.Component {
    state = {
        loading: true,
        size: 'default'
    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }
    handleChangeSize = (e) => {
        //e是鼠标事件对象
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">基础按钮</Button>
                    <Button>基础按钮</Button>
                    <Button type="dashed">基础按钮</Button>
                    <Button type="danger">基础按钮</Button>
                    <Button type="disabled">基础按钮</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button type="delete">删除</Button>
                    <Button type="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>加载中</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className="card-wrap">
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChangeSize}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>基础按钮</Button>
                    <Button>基础按钮</Button>
                    <Button type="dashed" size={this.state.size}>基础按钮</Button>
                    <Button type="danger" size={this.state.size}>基础按钮</Button>
                    <Button type="disabled" size={this.state.size}>基础按钮</Button>
                </Card>
            </div>
        )
    }
}
import React from 'react'
import { Card, Table } from "antd"
import axios from "./../../axios"

export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    }
    request = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            console.log("res", res)
            if (res.code === 0) {
                this.setState({
                    dataSource2: res.result
                })
            }
        })
    }
    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: 'hhhh',
                sex: '1',
                interest: '1',
                state: '1',
                birthday: '1999-09-11',
                time: '12:00',
                address: '松江大学城'
            },
            {
                id: '1',
                userName: 'xxxx',
                sex: '1',
                interest: '1',
                state: '1',
                birthday: '1999-09-11',
                time: '12:00',
                address: '松江大学城'
            },
            {
                id: '2',
                userName: 'lllll',
                sex: '1',
                interest: '1',
                state: '1',
                birthday: '1999-09-11',
                time: '12:00',
                address: '松江大学城'
            },
        ]
        this.setState({ dataSource })
        this.request()
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '时间',
                dataIndex: 'time'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
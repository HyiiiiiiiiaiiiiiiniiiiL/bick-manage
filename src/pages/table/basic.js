import React from 'react'
import { Card, Table, Modal } from "antd"
import axios from "./../../axios"
import { Record } from 'immutable';

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
            if (res.code === 0) {
                res.result.map((item, index) => {
                    item.key = index
                })
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
        dataSource.map((item, index) => {
            item.key = index
        })
        this.setState({ dataSource })
        this.request()
    }
    onRowClick = (record, index) => {
        let selectKey = [index]
        Modal.info({
            title: '信息',
            content: `用户：${record.userName},用户爱好:${record.interest}`
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
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
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '广场舞',
                        "2": "蹦迪"
                    }
                    return config[interest]
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼',
                        "2": '农民',
                        "3": "垃圾"
                    }
                    return config[state]
                }
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
        const { selectedRowKeys } = this.state
        const rowSelection = {
            type: 'radio',
            selectedRowKeys

        }
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
                <Card title="Mock-动态数据渲染表格" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                },//点击行
                            }
                        }}
                    />
                </Card>
            </div>
        )
    }
}
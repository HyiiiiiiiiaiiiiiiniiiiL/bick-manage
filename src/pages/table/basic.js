import React from 'react'
import { Card, Table, Modal, Button, message } from "antd"
import axios from "./../../axios"
import Utils from '../../Utils/utils';

export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    }
    params = {
        page: 1
    }
    request = () => {
        let _this = this
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                    // 为什么不把page数据放在state中?
                    //因为state数据用来渲染html结构，只改变页码不需要渲染页面结构
                    //render执行一定是要调用setState
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index
                })
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current
                        this.request()
                    })
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
    handleDelete = () => {
        let rows = this.state.selectedRows
        let ids = []
        rows.map((item) => {
            ids.push(item.id)
        })
        Modal.confirm({
            title: '删除提示',
            content: `确定要删除这些数据吗?${ids.join('、')}`,
            onOk: () => {
                message.success('删除成功')
                this.request()//删除成功后，调接口刷新页面
            }
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
                        '2': '蹦迪',
                        '3': '卡拉',
                        '4': '王者',
                        "5": "绝地"
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
                        "2": '趴皮',
                        "3": "美少女",
                        '4': '地主',
                        '5': '财阀'
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
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = []
                selectedRows.map((item) => {
                    ids.push(item.id)
                })
                this.setState({
                    selectedRowKeys,
                    selectedRows

                })
            }

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
                <Card title="Mock-复选" style={{ margin: '10px 0' }}>
                    <div style={{ marginBottom: 10 }}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        rowSelection={rowCheckSelection}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}
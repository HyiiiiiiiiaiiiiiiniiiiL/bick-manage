import React from 'react'
import { Card, Table, Modal, Button, message } from "antd"
import axios from "../../axios"
import Utils from '../../Utils/utils';

export default class HeighTable extends React.Component {
    state = {

    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.request()

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
                    dataSource: res.result.list
                })
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
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
                width: 80,
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
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '时间',
                width: 80,
                dataIndex: 'time'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
        ]
        const columns2 = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
                fixed: 'left'
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName',
                fixed: 'left'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
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
                width: 80,
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
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '时间',
                width: 80,
                dataIndex: 'time'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address',
                fixed: "right"
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定">
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 1900 }}
                    />
                </Card>
            </div>
        )
    }
}
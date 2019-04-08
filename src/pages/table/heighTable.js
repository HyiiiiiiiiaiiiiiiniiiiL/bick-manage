import React from 'react'
import { Card, Table, Modal, Button, message,Badge} from "antd"
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
            url: '/table/heigh/list',
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
    handleChange=(pagination,filters,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    handleDelete=(item)=>{
        let id = item.id
        Modal.confirm({
            title:'确认',
            content:'确定删除该条数据吗?',
            onOk:()=>{
                message.success("删除成功")
                this.request()
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
        const columns3=[
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age-b.age
                },
                sortOrder:this.state.sortOrder
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
            }
        ]
        const columns4=[
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '年龄',
                dataIndex: 'age'
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
                        '1': <Badge status="success" text='成功'/>,
                        '2': <Badge status="error" text='报错'/>,
                        '3': <Badge status="default" text='正常'/>,
                        '4': <Badge status="processing" text='进行中'/>,
                        "5": <Badge status="warning" text='警告'/>
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
            {
                title:"操作",
                render:(text,item)=>{
                    return <a onClick={()=>this.handleDelete(item)}>删除</a>
                }
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
                <Card title="排序">
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作">
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        )
    }
}
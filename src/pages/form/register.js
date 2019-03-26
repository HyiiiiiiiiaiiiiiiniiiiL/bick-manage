import React from 'react'
import {
    Card, Form, Button, Input, Checkbox, Icon, message,
    Radio, Select, Switch, DatePicker, TimePicker, InputNumber, Upload
} from 'antd'
import moment from 'moment'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea

class FormRegister extends React.Component {
    state = {}
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName}登录成功,密码为：${userInfo.password}`)
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        const rowObj = {
            minRows: 2, maxRows: 6
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '用户名不能为空' }]
                            })(
                                <Input placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '密码不能为空' }]
                            })(
                                <Input placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator('sex', {
                                initialValue: '1'
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {getFieldDecorator('age', {
                                initialValue: '16'
                            })(
                                <InputNumber />
                            )}
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {getFieldDecorator('state', {
                                initialValue: '16'
                            })(
                                <Select>
                                    <Option value="1">嘻嘻</Option>
                                    <Option value="2">哈哈</Option>
                                    <Option value="3">嘿嘿</Option>
                                    <Option value="4">啦啦啦</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {getFieldDecorator('state', {
                                initialValue: ["1", "2", "3"]
                            })(
                                <Select mode="multiple">
                                    <Option value="1">蹦迪</Option>
                                    <Option value="2">喝酒</Option>
                                    <Option value="3">赌博</Option>
                                    <Option value="4">傻子</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="是否是学渣" {...formItemLayout}>
                            {getFieldDecorator('isZha', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Switch />
                            )}
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {getFieldDecorator('birthday', {
                                initialValue: moment(new Date())
                            })(
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD  HH:mm:ss"
                                />
                            )}
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {getFieldDecorator('address', {
                                initialValue: "陆家嘴宝山软件园"
                            })(
                                <TextArea autosize={rowObj} />
                            )}
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {getFieldDecorator('time')(
                                <TimePicker />
                            )}
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {getFieldDecorator('userImg')(
                                <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    onChange={this.handleChange}
                                >
                                    {this.state.userImg ? <img src={this.state.userImg} alt="用户信息" />
                                        : <Icon type="plus" />}
                                </Upload>
                            )}
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {getFieldDecorator('userImg')(
                                <Checkbox>我已阅读过<a href="#">创术协议</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister)
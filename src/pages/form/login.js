import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd"
const FormItem = Form.Item
class FormLogin extends React.Component {

    handleSubmit = () => {
        let loginInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${loginInfo.userName}登录成功,密码为：${loginInfo.password}`)
            } else {
                message.err(`登录失败`)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    {/* 默认就是水平方向，这里也可以不指定 */}
                    <Form layout="horizontal" style={{ width: 300 }}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '用户名不能为空' }, {
                                    min: 5,
                                    max: 10,
                                    message: "用户名长度不符合要求"
                                }, {
                                    pattern: new RegExp('^\\w+$', 'g'),
                                    message: "用户名必须是字母或数字"
                                }]
                            })(
                                <Input placeholder="请输入用户名" prefix={<Icon type="user" />} />
                            )}

                            {/* 表单对象的初始化的值，以及验证规则 */}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '密码不能为空' }]
                            })(
                                <Input placeholder="请输入密码" prefix={<Icon type="lock" />} />
                            )}
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="#" style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin)
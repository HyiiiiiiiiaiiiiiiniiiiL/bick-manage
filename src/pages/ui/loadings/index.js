import React from 'react'
import {Card,Button,Spin,Icon,Alert} from 'antd'
import "../ui.less"

class Loadings extends React.Component {
    render() {
        const icon = <Icon type="loading"  style={{fontSize:24}}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="large"/>
                    <Spin style={{margin:'0 10px'}}/>
                    {/* 使用indicator来指定图标样式 ,因为指定的是静态图标，即使
                    加上spinning=true,也是不会旋转的，所以我们要指定动态图标或gif图片*/}
                    <Spin  indicator={icon} style={{marginLeft:10}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert message="React"
                        description="欢迎来到肉啵特的世界"
                        type="info"
                    />
                     <Alert message="React"
                        description="欢迎来到肉啵特的世界"
                        type="warning"
                    />
                    <Spin>
                    <Alert message="React"
                        description="欢迎来到肉啵特的世界"
                        type="warning"
                    />
                    </Spin>
                    <Spin tip="加载中...">
                    <Alert message="React"
                        description="欢迎来到肉啵特的世界"
                        type="warning"
                    />
                    </Spin>
                    <Spin tip="加载中..." indicator={icon}>
                    <Alert message="React"
                        description="欢迎来到肉啵特的世界"
                        type="warning"
                    />
                    </Spin>
                </Card>
            </div>
        )
    }
}

export default Loadings
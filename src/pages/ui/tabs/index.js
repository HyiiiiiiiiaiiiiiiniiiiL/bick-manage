import React from 'react'
import { Card, Tabs, message, Icon, Button } from 'antd';
const TabPane = Tabs.TabPane

export default class TabsDemo extends React.Component {
    newTabIndex = 0


    callback = (activeKey) => {
        message.info("选择了页签" + activeKey)
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {

        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: `New Tab${this.newTabIndex}`, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }
    componentWillMount() {
        const panes = [
            {
                title: 'Tab1',
                content: 'Tab 1',
                key: "1"
            },
            {
                title: 'Tab2',
                content: 'Tab 2',
                key: "2"
            },
            {
                title: 'Tab3',
                content: 'Tab 3',
                key: "3"
            },
        ]
        this.setState({ panes, activeKey: panes[0].key })
    }
    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab页签带有图标" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<span><Icon type="plus" />Tab1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab2</span>} key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="动态Tab页签" className="card-wrap">
                    <Tabs
                        onChange={this.callback}
                        type="editable-card"
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map((panel) => {
                            return <TabPane tab={panel.title}
                                key={panel.key}>{panel.content}</TabPane>
                        })}
                    </Tabs>
                </Card>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Tabs } from 'antd';
const tabPanels = [
    {
        tab: "Banner",
        key: 1,
        content: "1"
    },{
        tab: "标题",
        key: 2,
        content: "2"
    },{
        tab: "按钮",
        key: 3,
        content: "3"
    }
]
const tabReduce = ({tab, key, content}) => (
    <TabPane tab={tab} key={key}>
        {content}
    </TabPane>
)
class Tab extends Component {
    render() {
        return (
            <Tabs tabPosition="left">
                <TabPane>
                    {
                        tabPanels.map(tabReduce)
                    }
                </TabPane>
            </Tabs>
        )
    }
}

export default Tab;
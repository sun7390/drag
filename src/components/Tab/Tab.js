import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { BannerCon } from '../../Contents'
import { addCom } from './actions'
import './Tab.css'

const { TabPane } = Tabs;

const tabPanels = [
    {
        tab: "Banner",
        key: 1,
        content: BannerCon
    },{
        tab: "标题",
        key: 2,
        content: BannerCon
    },{
        tab: "按钮",
        key: 3,
        content: BannerCon
    }, {
        tab: "tab",
        key: 4,
        content: BannerCon
    },{
        tab: "轮播图",
        key: 5,
        content: BannerCon
    }
]


class Tab extends Component {
    constructor(props, context) {
        super(props, context)
    }

    tabRender = ({src, text, props}) => (
        <div className="resource-item">
            <span className="resource-img" 
            draggable={true}
            onDragStart={this.dragStart(props)}
            onDragEnd={this.dragEnd.bind(this, props)}
            >
                <img width="240" src={src} alt="未显示"/>
            </span>
            <span className="resource-text">
                {text}
            </span>
        </div>
    )

    tabReduce = ({tab, key, content}) => (
        <TabPane tab={tab} key={key} >
            <div className="ConWappper">
                {
                    content.map(this.tabRender)
                }
            </div>
        </TabPane>
    )

    dragStart = (props) => {
        // 事件处理函数传递多个参数，因为只能传一个event参数，或者在函数写成.bind(this)的形式
        return function(e) {
            e.dataTransfer.setData('props', props)
        }
    }

    dragEnd = (props) => {
        this.props.onAddCom(props)
    }
    
    render() {
        return (
            <Tabs tabPosition="left"  type="card"> 
                    {
                        tabPanels.map(this.tabReduce)
                    }
            </Tabs>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCom: (props) => {
            dispatch(addCom(props));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import styles from './Preview.less';
const { Footer, Content } = Layout;

class Preview extends Component {
    constructor(props, context) {
        super(props, context)    
    }
    drop = (e) => {
        e.target.style.background = "";
        console.log(this.props)
    }
    allowDrag = (e) => {
        e.preventDefault()
    }
    dragEnter = (e) => {
        e.target.style.background = 'yellow';
    }
    render() {
        const { list } = this.props;
        return (
            <Layout className={styles.customContent}>
                <Content>
                    <section className={styles.addSec}>
                        <div className={styles.dragPlaceholder}
                        onDragEnter={this.dragEnter}
                        onDragOver={this.allowDrag}
                        onDrop={this.drop}
                        >
                            <span>拖拽到此处</span>
                        </div>
                    </section>
                    {   
                        list.length > 0 &&
                        <div>
                            { list.map(componentRender) }
                        </div>
                    }
                </Content>
                <Footer>
                    <span>douquan@2020</span>
                </Footer>
            </Layout>
        )
    }
}

const bannerRender = (srcList) => {}

const srcList = [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png'
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png'
    }
]
const componentRender = (item) => {
    const Category = item.props.Category;
    return (
        <div key={item.key}
        className={styles.component}>
            <Category {...item.props}>
                <div>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png" alt=""/>
                </div>
                <div>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png" alt=""/>
                </div>
            </Category>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        list: state
    }
}

export default connect(mapStateToProps, null)(Preview);
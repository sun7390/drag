import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Banner from '../../AntBanner/Banner/Banner'
import './Preview.css';
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
        return (
            <Layout>
                <Content>
                    <section className="addSec">
                        <div className="drag-placeholder"
                        onDragEnter={this.dragEnter}
                        onDragOver={this.allowDrag}
                        onDrop={this.drop}
                        >
                            <span>拖拽到此处</span>
                        </div>
                    </section>
                </Content>
                <Footer>
                    <span>douquan@2020</span>
                </Footer>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state
    }
}

export default connect(mapStateToProps, null)(Preview);
import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Banner.css'
class Banner extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Carousel {...this.props}>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
            </Carousel>
        )
    }
}

export default Banner
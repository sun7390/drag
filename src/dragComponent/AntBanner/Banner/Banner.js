import React, { Component } from 'react';
import { Carousel } from 'antd';
import styles from './Banner.less'
class Banner extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Carousel {...this.props}
            className={styles.carousel}>
                {this.props.children}
            </Carousel>
        )
    }
}

export default Banner
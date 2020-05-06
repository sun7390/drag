import React, { Component } from 'react';
import { PageHeader } from 'antd';
import './header.css'
const IconList = [{
    src: "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",
    link: "/1"
},{
    src: "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",
    link: "/2"
},{
    src: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
    link: "/3"
}]
const IconReduce = ({src, text="", link}) => (
    <a className="head-link" href={link} key={link}>
        <img className="head-img" src={src} alt={text}/>
            {text}
    </a>
)
const Icons = IconList.map(IconReduce)

class Header extends Component {
    render() {
        return (
            <PageHeader
            className="site-header"
            title="DragApp"
            subTitle="拖拽式应用"
            extra={Icons}>
            </PageHeader>
        )
    }
}

export default Header;
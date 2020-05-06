import React, { Component } from 'react';
import './Container.css'
import Tab from '../../components/Tab/Tab'
import Preview from '../../components/Preview/Preview'
class Container extends Component {
    render() {
        return (
            <div className="container">
                <aside className="left-tab">
                    <Tab/>
                </aside>
                <article className="right-content">
                    <Preview/>
                </article>
            </div>
        )
    }
}

export default Container;
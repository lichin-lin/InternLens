import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'

import { Tag } from 'antd'
import 'antd/dist/antd.css'
const CheckableTag = Tag.CheckableTag

const key2title = {
    money: '薪水',
    jobs: '工作',
    dev: '環境'
}
const key2good = {
    money: '薪水支付合理',
    jobs: '工作內容合適',
    dev: '良好工作環境'
}
const key2bad = {
    money: '薪水支付不合理',
    jobs: '工作內容不合適',
    dev: '須改善工作環境'
}
@Radium
export default CSSModules(class MessageBox extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.state = {
            key: 'money',
            value: 0
        }
    }
    updatePropsToState (newProps) {
        this.setState({
            key: newProps.name,
            value: newProps.value
        })
    }
    componentDidMount () {
        this.updatePropsToState(this.props)
    }
    componentWillReceiveProps (nextProps) {
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
            <div style={{
                margin: '0 0 5px 10px'
            }}>
                 <b>{key2title[this.state.key]}:</b>
                <CheckableTag
                  checked={this.state.value === 1}
                  onChange={() => { this.props.toggleTag(this.state.key, 1) }}>
                  {key2good[this.state.key]}
                </CheckableTag>
                <CheckableTag
                  checked={this.state.value === -1}
                  onChange={() => { this.props.toggleTag(this.state.key, -1) }}>
                  {key2bad[this.state.key]}
                </CheckableTag>
            </div>
        )
    }
}, require('./MessageBox.styl'))

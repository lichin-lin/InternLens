import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'

import { Tag } from 'antd'
import 'antd/dist/antd.css'
const CheckableTag = Tag.CheckableTag

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
        console.log(newProps)
        this.setState({
            key: newProps.name,
            value: newProps.value
        })
    }
    componentDidMount () {
        console.log('Messagebox did mount', this.props)
        this.updatePropsToState(this.props)
    }
    componentWillReceiveProps (nextProps) {
        console.log('Messagebox will receive', nextProps)
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
             <div>
                 {this.state.key}:{this.state.value}
                <CheckableTag
                  checked={this.state.value === 1}
                  onChange={() => { this.props.toggleTag(this.state.key, 1) }}>
                  {this.state.key}
                </CheckableTag>
                <CheckableTag
                  checked={this.state.value === -1}
                  onChange={() => { this.props.toggleTag(this.state.key, -1) }}>
                  {this.state.key}
                </CheckableTag>
            </div>
        )
    }
}, require('./MessageBox.styl'))

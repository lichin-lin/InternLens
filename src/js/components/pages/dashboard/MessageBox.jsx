import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'

import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

@Radium
export default CSSModules(class MessageBox extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.showTime = this.showTime.bind(this)
        this.state = {
            id: 0,
            messageList: []
        }
    }
    updatePropsToState (newProps) {
        this.setState({
            id: newProps.id
        })
    }
    showTime (stamp) {
        console.log('init: ', stamp)
        let d = new Date(stamp)
        return (d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear())
    }
    componentDidMount () {
        console.log('Messagebox did mount', this.props)
    }
    componentWillReceiveProps (nextProps) {
        console.log('Messagebox will receive', nextProps)
    }
    render () {
        return (
            <div>{
                    _.map(this.props.messageList, (el, id) =>
                        <div key={id}>
                            <Heading align='start' strong={false} uppercase={false} truncate={false} tag='h3'>
                                {el.userId}, 於 {this.showTime(el.sendTime)}
                            </Heading>
                            <Paragraph size='medium'>
                                {el.content}
                            </Paragraph>
                        </div>
                    )
                }
            </div>
        )
    }
})

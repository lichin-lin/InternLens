import React, { Component } from 'react'
import Containers from 'js/containers'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'

import { Tag, Timeline } from 'antd'
import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import 'antd/dist/antd.css'

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
        console.log(newProps)
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
            <Box direction='column' justify='start' align='start' wrap={false} pad='medium' colorIndex='light-2' margin='small'
                style={{
                    width: '100%',
                    margin: '0px'
                }}>
                <Value value={'留言評論'} colorIndex='accent-1'
                    style={{
                        marginBottom: '20px'
                    }}/>
                    <Timeline>
                    {
                        _.map(this.props.messageList, (el, id) =>
                        <Timeline.Item color="#50514F" className="comment" key={id}>
                            <div style={{ marginBottom: '20px' }}>
                                <Heading align='start' strong={false} margin='none' uppercase={false} truncate={false} tag='h4' style={{ marginLeft: '3px' }}>
                                    {this.showTime(el.sendTime)}
                                </Heading>
                                <div>
                                    {
                                        _.map(el.tags, (value, id) =>
                                            value === 1
                                            ? <Tag color="#6FBFF4">{id}</Tag>
                                            : null
                                        )
                                    }
                                </div>
                                <div>
                                    {
                                        _.map(el.tags, (value, id) =>
                                            value === -1
                                            ? <Tag color="#F37996">{id}</Tag>
                                            : null
                                        )
                                    }
                                </div>
                                <Paragraph size='medium' style={{ marginLeft: '6px', margin: '12px 0' }}>
                                    {el.content}
                                </Paragraph>
                            </div>
                        </Timeline.Item>
                        )
                    }
                    <Containers.pages.dashboard.InnerContent.MessageForm />
                </Timeline>
            </Box>
        )
    }
}, require('./MessageBox.styl'))

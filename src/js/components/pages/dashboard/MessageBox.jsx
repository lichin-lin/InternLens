import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'

import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import { Tag, Timeline, Icon } from 'antd'
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
                        <Timeline.Item color="#50514F" className="comment">
                            <div key={id}
                                style={{
                                    marginBottom: '20px'
                                }}>
                                <Heading align='start'
                                    strong={false}
                                    margin='none'
                                    uppercase={false}
                                    truncate={false}
                                    tag='h4'
                                    style={{
                                        marginLeft: '3px'
                                    }}>
                                    {this.showTime(el.sendTime)}
                                </Heading>
                                <div>
                                    <Tag color="#6FBFF4">薪水支付合理</Tag>
                                    <Tag color="#6FBFF4">mentor很罩</Tag>
                                    <Tag color="#6FBFF4">工作內容合理</Tag>
                                </div>
                                <div style={{ marginTop: 4 }}>
                                    <Tag color="#F37996">妹子不夠多</Tag>
                                    <Tag color="#F37996">公司太大</Tag>
                                </div>
                                <Paragraph size='medium'
                                    style={{
                                        marginLeft: '6px',
                                        margin: '12px 0'
                                    }}>
                                    {el.content}
                                </Paragraph>
                            </div>
                        </Timeline.Item>
                        )
                    }
                <Timeline.Item className="addcomment"
                    dot={<Icon type="message" style={{ fontSize: '24px' }}/>}
                    color="#50514F"
                    style={{
                        background: '#f5f5f5'
                    }}>我要留言</Timeline.Item>
                </Timeline>
            </Box>
        )
    }
}, require('./MessageBox.styl'))

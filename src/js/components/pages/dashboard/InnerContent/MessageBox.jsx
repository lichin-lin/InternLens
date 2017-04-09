import React, { Component } from 'react'
import Containers from 'js/containers'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'
import Time from 'react-time'

import { Tag, Timeline } from 'antd'
import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import 'antd/dist/antd.css'

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
        this.refreshMessage = this.refreshMessage.bind(this)
        this.renderMessageTagCounter = this.renderMessageTagCounter.bind(this)
        this.state = {
            id: 0,
            messageList: [],
            totalPros: 0,
            totalCons: 0
        }
    }
    refreshMessage () {
        this.props.getMessage(this.state.id)
    }
    renderMessageTagCounter (list) {
        let pro = 0
        let con = 0
        this.props.setLoading()
        .then(() => {
            _.map(list, (el, id) => {
                if (el.tags !== undefined) {
                    if (el.tags['dev'] === 1) {
                        pro += 1
                    } else if (el.tags['dev'] === -1) con += 1
                    if (el.tags['jobs'] === 1) {
                        pro += 1
                    } else if (el.tags['jobs'] === -1) con += 1
                    if (el.tags['money'] === 1) {
                        pro += 1
                    } else if (el.tags['money'] === -1) con += 1
                }
            })
        })
        .then(() => {
            this.setState({
                totalPros: pro,
                totalCons: con
            })
        })
    }
    updatePropsToState (newProps) {
        console.log(newProps)
        this.setState({
            id: newProps.id
        }, () => {
            this.renderMessageTagCounter(newProps.messageList)
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
            <Box direction='column' justify='start' align='start' wrap={false} pad='medium' colorIndex='light-2' margin='small'
                style={{
                    width: '100%',
                    margin: '0px'
                }}>
                <Value value={'留言評論'} colorIndex='accent-1'
                    style={{
                        marginBottom: '20px'
                    }}/>
                {/* <h4><b>{this.state.totalPros === 0 ? '尚無 ' : this.state.totalPros}正評標籤, {this.state.totalCons === 0 ? '尚無 ' : this.state.totalCons}負評標籤</b></h4> */}
                <Timeline style={{width: '100%'}}>
                    {
                        _.map(this.props.messageList, (el, id) =>
                        <Timeline.Item color="#50514F" className="comment" key={id}>
                            <div style={{ marginBottom: '20px' }}>
                                <Heading align='start' strong={false} margin='none' uppercase={false} truncate={false} tag='h4' style={{ marginLeft: '3px' }}>
                                    <Time value={el.sendTime} format="YYYY/MM/DD HH:mm" />
                                </Heading>
                                <div>
                                    {
                                        _.map(el.tags, (value, id) =>
                                            value === 1
                                            ? <Tag color="#6FBFF4" key={id} className="pros">{key2good[id]}</Tag>
                                            : null
                                        )
                                    }
                                    {
                                        _.map(el.tags, (value, id) =>
                                            value === -1
                                            ? <Tag color="#F37996" key={id} className="cons">{key2bad[id]}</Tag>
                                            : null
                                        )
                                    }
                                </div>
                                <Paragraph size='medium' style={{ marginLeft: '6px', margin: '12px 0', wordBreak: 'break-all' }}>
                                    {el.content}
                                </Paragraph>
                            </div>
                        </Timeline.Item>
                        )
                    }
                    <Containers.pages.dashboard.InnerContent.MessageForm refreshMessage={this.refreshMessage} postId={this.state.id}/>
                </Timeline>
            </Box>
        )
    }
}, require('./MessageBox.styl'))

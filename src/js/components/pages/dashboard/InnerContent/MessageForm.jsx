import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Containers from 'js/containers'
import Radium from 'radium'
import _ from 'lodash'

import { Timeline, Icon } from 'antd'
import Form from 'grommet/components/Form'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'
import FormField from 'grommet/components/FormField'
import 'antd/dist/antd.css'

@Radium
export default CSSModules(class MessageBox extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.toggleTag = this.toggleTag.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.state = {
            postId: '2',
            sendTime: 1488763912855,
            userId: 'cRwuLyQjRyVEJs5YwMJOADeOqkv2',
            content: '',
            tags: {
                money: 0,
                jobs: 0,
                dev: 0
            }
        }
    }
    sendMessage (e) {
        console.log('send: ', this.state)
        e.preventDefault()
        this.props.postMessage(this.state)
        .then(() => {
            this.props.refreshMessage(this.state.postId)
        })
        .then(() => {
            let newTags = { money: 0, jobs: 0, dev: 0 }
            this.setState({tags: newTags})
        })
    }
    updatePropsToState (newProps) {
        console.log('in message form: ', newProps)
        this.setState({
            postId: newProps.postId
        })
    }
    toggleTag (key, value) {
        let temp = this.state.tags
        // console.log(temp, key, value)
        temp[key] = value
        this.setState({ tags: temp })
        // console.log(this.state.tags)
    }
    componentDidMount () {
        console.log('FORMMMMM did mount', this.props)
        this.updatePropsToState(this.props)
    }
    componentWillReceiveProps (nextProps) {
        console.log('FORMMMMM will receive', nextProps)
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
            <Timeline.Item className="addcomment" dot={<Icon type="message" style={{ fontSize: '24px' }}/>} color="#50514F" style={{ background: '#f5f5f5', marginTop: '10px' }}>
                <Form>
                    <FormField
                        label='我要留言'
                        style={{
                            borderRadius: '5px'
                        }}>
                        <TextInput onDOMChange={(event) => { this.setState({content: event.target.value}) }}/>
                    </FormField>
                    <div>
                        <div style={{
                            margin: '10px 0 20px'
                        }}><strong>並選取以下符合的描述</strong>
                        </div>
                      {_.map(this.state.tags, (value, id) => (
                        <Containers.pages.dashboard.InnerContent.MessageTag
                            key={id}
                            name={id}
                            value={value}
                            toggleTag={this.toggleTag}/>
                      ))}
                    </div>
                    <Button label='提繳留言'
                        type='submit'
                        primary={true}
                        accent={true}
                        onClick={this.sendMessage}
                        style={{
                            marginTop: '20px',
                            borderRadius: '5px'
                        }}/>
                </Form>
            </Timeline.Item>
        )
    }
}, require('./MessageBox.styl'))

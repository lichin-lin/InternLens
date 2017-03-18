import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Containers from 'js/containers'
import Radium from 'radium'
import _ from 'lodash'

import { Timeline, Input, Icon } from 'antd'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import CheckBox from 'grommet/components/CheckBox'
import 'antd/dist/antd.css'

@Radium
export default CSSModules(class MessageBox extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.toggleTag = this.toggleTag.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.toggleAgreement = this.toggleAgreement.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            postId: '2',
            sendTime: 1488763912855,
            userId: 'cRwuLyQjRyVEJs5YwMJOADeOqkv2',
            content: '',
            agreement: false,
            tags: {
                money: 0,
                jobs: 0,
                dev: 0
            }
        }
    }
    sendMessage (e) {
        console.log('e: ', e)
        e.preventDefault()
        console.log('send: ', this.state)
        // this.props.postMessage(this.state)
        // .then(() => {
        //     this.props.refreshMessage(this.state.postId)
        // })
        // .then(() => {
        //     let newTags = { money: 0, jobs: 0, dev: 0 }
        //     this.setState({tags: newTags})
        // })
    }
    updatePropsToState (newProps) {
        console.log('in message form: ', newProps)
        this.setState({
            postId: newProps.postId,
            userId: newProps.userId === undefined ? null : newProps.userId
        })
    }
    toggleAgreement () {
        let temp = this.state.agreement
        this.setState({agreement: !temp})
    }
    handleSubmit (event) {
        event.preventDefault()
        if (this.props.Session.AuthData.uid === undefined) {
            console.log('not login yet')
            return
        }
        if (this.state.content === null || this.state.content === '' || this.state.agreement === false) {
            console.log('can`t submitted')
            return
        }
        this.props.postMessage(this.state)
        .then(() => {
            this.props.refreshMessage(this.state.postId)
        })
        .then(() => {
            let newTags = { money: 0, jobs: 0, dev: 0 }
            this.setState({content: ''})
            this.setState({tags: newTags})
            this.setState({agreement: false})
        })
    }
    toggleTag (key, value) {
        let temp = this.state.tags
        temp[key] = value
        this.setState({ tags: temp })
    }
    componentDidMount () {
        this.updatePropsToState(this.props)
    }
    componentWillReceiveProps (nextProps) {
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
            <Timeline.Item className="addcomment" dot={<Icon type="message" style={{ fontSize: '24px' }}/>} color="#50514F" style={{ background: '#f5f5f5', marginTop: '10px' }}>
                <Form onSubmit={this.handleSubmit}>
                    <Input rows={4}
                        size="large"
                        type="textarea"
                        placeholder="我要留言"
                        value={this.state.content}
                        onChange={(event) => { this.setState({content: event.target.value}) }}
                        style={{borderRadius: '5px', fontSize: '20px'}} />
                    <div>
                        <div style={{
                            margin: '10px 0 20px 10px'
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
                    <fieldset>
                      <FormField>
                        <CheckBox id='agree'
                          name='agree'
                          checked={this.state.agreement}
                          onChange={this.toggleAgreement}
                          label='我知道這是匿名留言，但是我不謾罵並為言論負責' />
                      </FormField>
                    </fieldset>
                <input className="submitBtn" type="submit" value="送出留言" />
                </Form>
            </Timeline.Item>
        )
    }
}, require('./MessageBox.styl'))

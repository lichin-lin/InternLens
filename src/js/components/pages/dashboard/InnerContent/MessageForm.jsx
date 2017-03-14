import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'

import { Tag, Timeline, Icon } from 'antd'
import Form from 'grommet/components/Form'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'
import FormField from 'grommet/components/FormField'
import 'antd/dist/antd.css'
const CheckableTag = Tag.CheckableTag
const tagsFromServer = ['Movie', 'Books', 'Music']

@Radium
export default CSSModules(class MessageBox extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            selectedTags: []
        }
    }
    updatePropsToState (newProps) {
        console.log(newProps)
        this.setState({
            id: newProps.id
        })
    }
    handleChange (tag, checked) {
        const { selectedTags } = this.state
        const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag)
        console.log('You are interested in: ', nextSelectedTags)
        this.setState({ selectedTags: nextSelectedTags })
    }
    componentDidMount () {
        console.log('Messagebox did mount', this.props)
    }
    componentWillReceiveProps (nextProps) {
        console.log('Messagebox will receive', nextProps)
    }
    render () {
        const { selectedTags } = this.state
        return (
            <Timeline.Item className="addcomment" dot={<Icon type="message" style={{ fontSize: '24px' }}/>} color="#50514F" style={{ background: '#f5f5f5' }}>
                <Form>
                    <FormField
                        label='我要留言'
                        style={{
                            borderRadius: '5px'
                        }}>
                        {/* <textarea> */}
                        <TextInput onDOMChange={(event) => { console.log('this input: ', event.target.value) }}/>
                    </FormField>
                    <div>
                      <strong>正面評估: </strong>
                      {tagsFromServer.map(tag => (
                        <CheckableTag
                          key={tag}
                          checked={selectedTags.indexOf(tag) > -1}
                          onChange={checked => this.handleChange(tag, checked)}
                        >
                          {tag}
                        </CheckableTag>
                      ))}
                    </div>
                    <div>
                      <strong>負面評估: </strong>
                      {tagsFromServer.map(tag => (
                        <CheckableTag
                          key={tag}
                          checked={selectedTags.indexOf(tag) > -1}
                          onChange={checked => this.handleChange(tag, checked)}
                        >
                          {tag}
                        </CheckableTag>
                      ))}
                    </div>
                    <Button label='提繳留言'
                        type='submit'
                        primary={true}
                        accent={true}
                        onClick={(event) => { event.preventDefault(); console.log('send this:', event.target.value) }}
                        style={{
                            marginTop: '20px',
                            borderRadius: '5px'
                        }}/>
                </Form>
            </Timeline.Item>
        )
    }
}, require('./MessageBox.styl'))

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import Containers from 'js/containers'
// import _ from 'lodash'

import Box from 'grommet/components/Box'
import CloseIcon from 'grommet/components/icons/base/Close'
import Layer from 'grommet/components/Layer'
import Label from 'grommet/components/Label'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'

@Radium
export default CSSModules(class Inner extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.state = {
            isClose: true,
            content: {},
            postId: 0
        }
    }
    updatePropsToState (newProps) {
        console.log('this update: ', this.props)
        this.setState({
            isClose: newProps.isClose,
            content: newProps.content,
            postId: newProps.postId
        })
    }
    componentDidMount () {
        console.log('inner did mount')
        this.updatePropsToState(this.state)
    }
    componentWillReceiveProps (nextProps) {
        console.log('inner will receive')
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
            <div>
                {
                    this.state.isClose
                    ? null
                    : <Layer closer={true}
                        align='center'
                        flush={true}
                        hidden={this.state.isClose}
                        style={{
                            width: '100%',
                            '.grommetux-layer__container': {
                                width: '100%'
                            }
                        }}>
                            <Button
                                icon={<CloseIcon />}
                                onClick={this.props.onClose}/>
                            <Box justify='start' align='center' wrap={false} pad='medium' margin='small'
                                className='BoxWrapper'>
                                {
                                    <div
                                        style={{
                                            height: '100%',
                                            padding: '0px',
                                            margin: '0px'
                                        }}>
                                      <Heading strong={true}
                                          uppercase={false}
                                          truncate={false}
                                          align='center'>
                                          {this.state.content['Name']}
                                      </Heading>
                                        <Label style={{
                                            margin: '12px'
                                        }}>
                                            {this.state.content['Job_Title']}
                                            {(this.state.content['Job_Title'].length > 0 && this.state.content['Start_Year'].length > 0) ? ', ' : ''}
                                            {this.state.content['Start_Year']}
                                      </Label>
                                      <div className="InnerTipsContain">
                                            {
                                                [
                                                    {'title': '單週時數', 'content': this.state.content['Week_Hour']},
                                                    {'title': '綜合評價', 'content': this.state.content['Rating']},
                                                    {'title': '給付薪資', 'content': this.state.content['Payment']}
                                                ].map((el, id) =>
                                                    <Box className="InnerTips" key={id} direction='row' justify='start' align='center' wrap={false} pad='medium' margin='small'>
                                                            <Heading tag='h3' align='center' strong={true}>
                                                                {el.title}
                                                            </Heading>
                                                        <Heading tag='h4' align='center'>
                                                            {el.content.length > 0 ? el.content : '發文者並未提供'}
                                                        </Heading>
                                                    </Box>
                                                )
                                            }
                                      </div>
                                      <Box direction='row' justify='start' align='start' wrap={false} pad='medium' margin='small'
                                          style={{
                                              width: '100%'
                                          }}>
                                          <Box className="InnerBox" direction='column' justify='start' align='start' wrap={true} pad='medium' margin='small' colorIndex='light-2'>
                                            <Value value={'實習經歷'} colorIndex='accent-1' />
                                            {
                                                [
                                                    {'title': '實習工作內容', 'content': this.state.content['Content']},
                                                    {'title': '實習總體心得', 'content': this.state.content['Review']},
                                                    {'title': '你覺得實習合理嗎?', 'content': this.state.content['Reason']}
                                                ].map((el, id) =>
                                                    <Box key={id} direction='column' justify='start' align='start' wrap={true} pad='medium' margin='small'
                                                        style={{
                                                            width: '100%',
                                                            paddingLeft: '0px'
                                                        }}>
                                                        <Heading tag='h4' strong={true} align='start'>
                                                            {el.title}
                                                        </Heading>
                                                        <Heading tag='h4' align='start'>
                                                            {el.content.length > 0 ? el.content : '發文者並未提供'}
                                                        </Heading>
                                                    </Box>
                                                )
                                            }
                                          </Box>
                                          <Box className="InnerBox" direction='column' justify='start' align='start' wrap={true} pad='medium' margin='small' colorIndex='light-2'>
                                            <Value value={'其他補充'} colorIndex='accent-1' />
                                            {
                                                [
                                                    {'title': '實習長度', 'content': this.state.content['Duration']},
                                                    {'title': '勞健保', 'content': this.state.content['Protection']},
                                                    {'title': '給實習者建議', 'content': this.state.content['Advice']},
                                                    {'title': '對未來有何幫助', 'content': this.state.content['Future']}
                                                ].map((el, id) =>
                                                    <Box key={id} direction='column' justify='start' align='start' wrap={true} pad='medium' margin='small'
                                                        style={{
                                                            width: '100%',
                                                            paddingLeft: '0px'
                                                        }}>
                                                        <Heading tag='h4' strong={true} align='start'>
                                                            {el.title}
                                                        </Heading>
                                                        <Heading tag='h4' align='start'>
                                                            {el.content.length > 0 ? el.content : '發文者並未提供'}
                                                        </Heading>
                                                    </Box>
                                                )
                                            }
                                          </Box>
                                      </Box>
                                  </div>
                                }
                                <div>
                                    <Containers.pages.dashboard.MessageBox id={this.state.postId}/>
                                </div>
                                </Box>
                        </Layer>
                }
            </div>
        )
    }
}, require('./Inner.styl'))

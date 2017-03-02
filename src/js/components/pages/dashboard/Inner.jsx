import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
// import _ from 'lodash'

import Box from 'grommet/components/Box'
import CloseIcon from 'grommet/components/icons/base/Close'
import Tiles from 'grommet/components/Tiles'
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
        this.toggleWindowClose = this.toggleWindowClose.bind(this)
        this.state = {
            isClose: true,
            content: {}
        }
    }
    toggleWindowClose () {
        this.setState({isClose: !this.state.isClose})
    }
    updatePropsToState (newProps) {
        console.log('this update: ', newProps)
        this.setState({isClose: newProps.isClose})
        this.setState({content: newProps.content})
    }
    componentDidMount () {
        console.log('did mount')
        this.updatePropsToState(this.state)
    }
    componentWillReceiveProps (nextProps) {
        console.log('will receive')
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
                        hidden={this.state.isClose}>
                            <Button
                                icon={<CloseIcon />}
                                onClick={this.toggleWindowClose}/>
                            <Tiles fill={true}>
                                {
                                    <Box justify='start' align='center' wrap={false} pad='medium' margin='small' colorIndex='light-2' onClick={false} onFocus={false}>
                                      <Heading strong={true}
                                          uppercase={false}
                                          truncate={false}
                                          align='center'>
                                          {this.state.content['Name']}
                                      </Heading>
                                      <Label>
                                          {this.state.content['Job_Title']},{this.state.content['Start_Year']}
                                      </Label>
                                      <Box direction='row' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-1' onClick={false} onFocus={false}>
                                            {
                                                [this.state.content['Week_Hour'], this.state.content['Rating'], this.state.content['Payment']].map((content, id) =>
                                                    <Box key={id} direction='row' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onClick={false} onFocus={false}>
                                                      <Heading tag='h4'
                                                          align='center'>
                                                          {content}
                                                      </Heading>
                                                    </Box>
                                                )
                                            }
                                      </Box>
                                      <Box direction='row' justify='start' align='start' wrap={false} pad='medium' margin='small' colorIndex='light-1' onClick={false} onFocus={false}>
                                          <Box direction='column' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onClick={false} onFocus={false}>
                                            <Value value={'實習經歷'} colorIndex='accent-1' />
                                            {
                                                [this.state.content['Content'], this.state.content['Reason'], this.state.content['Review']].map((content, id) =>
                                                    <Box key={id} direction='column' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onClick={false} onFocus={false}>
                                                      <Heading tag='h4'
                                                          align='center'>
                                                          {content}
                                                      </Heading>
                                                    </Box>
                                                )
                                            }
                                          </Box>
                                          <Box direction='column' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onClick={false} onFocus={false}>
                                            <Value value={'其他補充'} colorIndex='accent-1' />
                                            {
                                                [this.state.content['Duration'], this.state.content['Protection'], this.state.content['Advice'], this.state.content['Future']].map((content, id) =>
                                                    <Box key={id} direction='column' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-2' onClick={false} onFocus={false}>
                                                      <Heading tag='h4'
                                                          align='center'>
                                                          {content}
                                                      </Heading>
                                                    </Box>
                                                )
                                            }
                                          </Box>
                                      </Box>
                                    </Box>
                                }
                            </Tiles>
                        </Layer>
                }
            </div>
        )
    }
})

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
// import _ from 'lodash'

import Box from 'grommet/components/Box'
import CloseIcon from 'grommet/components/icons/base/Close'
import Tiles from 'grommet/components/Tiles'
import Layer from 'grommet/components/Layer'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'

@Radium
export default CSSModules(class Inner extends Component {
    constructor (props) {
        super(props)
        this.show = this.show.bind(this)
        this.state = {
            isWindowClose: true
        }
    }
    show () {
        console.log(this.state)
    }
    componentDidMount () {
        console.log('mount')
    }
    render () {
        return (
            <div>
                {this.props.title}
                <Layer closer={true}
                    align='center'
                    flush={true}
                    hidden={this.state.isWindowClose}>
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
                                  {this.props.Intern.list[this.state.WindowContentIndex]['Name']}
                              </Heading>
                              <Label>
                                  {this.props.Intern.list[this.state.WindowContentIndex]['Job_Title']},{this.props.Intern.list[this.state.WindowContentIndex]['Start_Year']}
                              </Label>
                              <Box direction='row' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-1' onClick={false} onFocus={false}>
                                    {
                                        [this.props.Intern.list[this.state.WindowContentIndex]['Week_Hour'], this.props.Intern.list[this.state.WindowContentIndex]['Rating'], this.props.Intern.list[this.state.WindowContentIndex]['Payment']].map((content, id) =>
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
                                        [this.props.Intern.list[this.state.WindowContentIndex]['Content'], this.props.Intern.list[this.state.WindowContentIndex]['Reason'], this.props.Intern.list[this.state.WindowContentIndex]['Review']].map((content, id) =>
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
                                        [this.props.Intern.list[this.state.WindowContentIndex]['Duration'], this.props.Intern.list[this.state.WindowContentIndex]['Protection'], this.props.Intern.list[this.state.WindowContentIndex]['Advice'], this.props.Intern.list[this.state.WindowContentIndex]['Future']].map((content, id) =>
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
            </div>
        )
    }
})

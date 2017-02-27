import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import Truncate from 'react-truncate'
import Dotdotdot from 'react-dotdotdot'
import Radium from 'radium'
import _ from 'lodash'

import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Anchor from 'grommet/components/Anchor'
import Search from 'grommet/components/Search'
import Header from 'grommet/components/Header'
import Actions from 'grommet/components/icons/base/Actions'
import CloseIcon from 'grommet/components/icons/base/Close'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Layer from 'grommet/components/Layer'
import Button from 'grommet/components/Button'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
// import Heading from 'grommet/components/Heading'
// import Paragraph from 'grommet/components/Paragraph'

@Radium
export default CSSModules(class extends Component {
    static propTypes = {
    }
    constructor (props) {
        super(props)
        this.changeFilterInput = this.changeFilterInput.bind(this)
        this.isSearchMatch = this.isSearchMatch.bind(this)
        this.toggleWindowClose = this.toggleWindowClose.bind(this)
        this.state = {
            filterInput: '',
            isWindowClose: true
        }
    }
    changeFilterInput (event) {
        console.log(event.target.value)
        this.setState({filterInput: event.target.value})
    }
    isSearchMatch (value) {
        let target = value['你之前去哪實習呢？']
        if (target === '') {
            return true
        } else if (target.indexOf(this.state.filterInput) >= 0) {
            return true
        } return false
    }
    toggleWindowClose (id) {
        this.setState({isWindowClose: !this.state.isWindowClose})
    }
    render () {
        return (
            <div style={{
                'width': '100%'
            }}>
                <Header>
                  <Title>
                      InternLens
                  </Title>
                  <Box flex={true}
                    justify='end'
                    direction='row'
                    responsive={false}>
                    <Search inline={true}
                      fill={true}
                      size='small'
                      value={this.state.filterInput}
                      iconAlign='start'
                      placeHolder='使用透視鏡!'
                      onDOMChange={this.changeFilterInput}
                      dropAlign={{'right': 'right'}} />
                      <Menu responsive={true}
                        icon={<Actions />}
                        label='排序'
                        inline={false}
                        primary={false}
                        size='small'>
                        <Anchor href='#'
                          className='active'>
                          人氣點閱
                        </Anchor>
                        <Anchor href='#'>
                          最多留言
                        </Anchor>
                      </Menu>
                  </Box>
                </Header>
                <Tiles fill={true}
                    flush={false}>
                {
                    this.props.Intern.list.filter(this.isSearchMatch).map((intern, id) =>
                        <Tile size='medium' key={id}>
                            <Card heading={intern['你之前去哪實習呢？']}
                                // description={<Truncate lines={100} ellipsis={<span>...</span>}>{intern['可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)']}</Truncate>}
                                description={
                                    <Dotdotdot clamp={3}>
                                        <div style={{lineHeight: '1.5', minHeight: '75px'}}>
                                            {intern['可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)']}
                                        </div>
                                    </Dotdotdot>
                                }
                                headingStrong={false}
                                link= {
                                    <Anchor
                                        onClick={this.toggleWindowClose}
                                        label='查看心得全文'
                                        style={{
                                            marginTop: '10px'
                                        }} />
                                }
                                style={{
                                    width: '100%'
                                }}/>
                        </Tile>
                        // <Tile separator='top'
                        //     align='start'
                        //     style={{
                        //         width: '100%'
                        //     }}>
                        //     <Header size='small'
                        //         pad={{'horizontal': 'small'}}>
                        //         <Heading tag='h4'
                        //             strong={true}
                        //             margin='none'>
                        //             {intern['你之前去哪實習呢？']}
                        //         </Heading>
                        //     </Header>
                        //     <Box pad='small'>
                        //         <Paragraph margin='none'>
                        //             {/* <Truncate lines={1} ellipsis={<span>...</span>}>{intern['可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)']}</Truncate> */}
                        //             <Dotdotdot clamp={3}>
                        //                 <div style={{
                        //                     lineHeight: '1.5'
                        //                 }}>{intern['可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)']}</div>
                        //             </Dotdotdot>
                        //             {/* {intern['可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)']} */}
                        //         </Paragraph>
                        //     </Box>
                        // </Tile>
                    )

                }
                </Tiles>
                <Layer closer={true}
                    align='center'
                    flush={true}
                    hidden={this.state.isWindowClose}>
                    <Button
                        icon={<CloseIcon />}
                        onClick={this.toggleWindowClose}/>
                    <List>
                        {
                            _.map(this.props.Intern.list[0], (el, id) =>
                                <ListItem justify='between'
                                    separator='horizontal'>
                                    <span>
                                        <b>{id}</b>
                                    </span>
                                    <span className='secondary'>
                                        {el}
                                    </span>
                                </ListItem>
                            )
                        }
                    </List>
                </Layer>
            </div>
        )
    }
})

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Dotdotdot from 'react-dotdotdot'
import Radium from 'radium'
import _ from 'lodash'

import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Menu from 'grommet/components/Menu'
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
import Animate from 'grommet/components/Animate'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.changeFilterInput = this.changeFilterInput.bind(this)
        this.toggleWindowClose = this.toggleWindowClose.bind(this)
        this.getMoreIntern = this.getMoreIntern.bind(this)
        this.startFilter = this.startFilter.bind(this)
        this.state = {
            copyInternList: {},
            renderInternList: {},
            filterInput: '',
            currentIndex: 1,
            oneQueryCount: 10,
            isWindowClose: true
        }
    }
    changeFilterInput (event) {
        this.setState({filterInput: event.target.value})
    }
    startFilter () {
        if (this.state.filterInput === '') {
            return
        }
        let rowData = this.props.Intern.list
        let filterData = {}
        _.map(rowData, (el, id) => {
            let flag = false
            _.map(el, (value) => {
                if (value.toString().indexOf(this.state.filterInput) !== -1) {
                    flag = true
                }
            })
            if (flag) {
                filterData[id] = el
            }
        })
        this.setState({
            copyInternList: {
                ...filterData
            }
        })
    }
    toggleWindowClose (id) {
        this.setState({isWindowClose: !this.state.isWindowClose})
    }
    getMoreIntern () {
        if (this.props.Intern.isLoading === true) {
            return
        }
        let pushInList = {}
        for (let count = 0; count < this.state.oneQueryCount; count++) {
            let t = this.state.currentIndex + count
            if (this.props.Intern.list[t] !== undefined) {
                pushInList[t] = this.props.Intern.list[t]
            }
        }
        this.setState({
            renderInternList: {
                ...this.state.renderInternList,
                ...pushInList
            }
        })
        this.setState({currentIndex: this.state.currentIndex + this.state.oneQueryCount})
    }
    componentWillMount () {
        this.props.setLoading()
        .then(() => {
            return this.props.getInternList(0, 35)
        })
    }
    render () {
        return (
            <div style={{
                'width': '100%'
            }}>
                <Header>
                  <Box flex={true}
                    justify='end'
                    direction='row'
                    responsive={false}>
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
                    <Search inline={true}
                      fill={true}
                      size='small'
                      value={this.state.filterInput}
                      iconAlign='start'
                      placeHolder='使用透視鏡!'
                      onDOMChange={this.changeFilterInput}
                      dropAlign={{'right': 'right'}} />
                  </Box>
                  <Button
                      icon={<CloseIcon />}
                      onClick={this.startFilter}/>
                </Header>
                <Tiles fill={true}
                    flush={false}
                    onMore={this.getMoreIntern}>
                {
                    // this.props.Intern.list.filter(this.isSearchMatch).map((intern, id) =>
                    _.map(this.state.renderInternList, (intern, id) =>
                        <Animate key={id} enter={{'animation': 'fade', 'duration': 1000, 'delay': 0}}
                            keep={false}>
                            <Tile size='medium'>
                                <Card heading={intern['Name']}
                                    description={
                                        <Dotdotdot clamp={3}>
                                            <div style={{lineHeight: '1.5', minHeight: '75px'}}>
                                                {intern['Review']}
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
                        </Animate>
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
                                <ListItem key={id} justify='between'
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

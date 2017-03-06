import React, { Component } from 'react'
import Containers from 'js/containers'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'

import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Search from 'grommet/components/Search'
import Header from 'grommet/components/Header'
import Actions from 'grommet/components/icons/base/Actions'
import WorkshopIcon from 'grommet/components/icons/base/Workshop'
import Tiles from 'grommet/components/Tiles'
import Button from 'grommet/components/Button'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.changeFilterInput = this.changeFilterInput.bind(this)
        this.toggleWindowOpen = this.toggleWindowOpen.bind(this)
        this.getMoreIntern = this.getMoreIntern.bind(this)
        this.startFilter = this.startFilter.bind(this)
        this.state = {
            copyInternList: {},
            renderInternList: {},
            filterInput: '',
            currentIndex: 1,
            oneQueryCount: 5,
            WindowContentIndex: 1,
            isWindowClose: true,
            isLoading: true,
            isListEnd: false
        }
    }
    changeFilterInput (event) {
        this.setState({filterInput: event.target.value})
    }
    startFilter () {
        // if (this.state.filterInput === '') {
        //     return
        // }
        this.setState({renderInternList: {}})
        this.setState({currentIndex: 0})
        this.setState({isListEnd: false})
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
        console.log(filterData)
    }
    toggleWindowOpen (id) {
        this.props.getMessage(id)
        .then(() => {
            this.setState({WindowContentIndex: id})
            this.setState({isWindowClose: !this.state.isWindowClose})
        })
    }
    getMoreIntern () {
        if (this.state.isListEnd === true) {
            return
        }
        if (this.state.isLoading === true) {
            return
        }
        let pushInList = {}
        let isEnd = 0
        for (let count = 0; count < this.state.oneQueryCount; count++) {
            let t = this.state.currentIndex + count
            if (this.props.Intern.list[t] !== undefined) {
                pushInList[t] = this.state.copyInternList[t]
            } else {
                isEnd += 1
                if (isEnd >= this.state.oneQueryCount) {
                    this.setState({isListEnd: true})
                }
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
            return this.props.getInternList(0, 10)
        })
        .then(() => {
            return this.props.getFavorite()
        })
        .then(() => {
            this.setState({
                copyInternList: {
                    ...this.props.Intern.list
                }
            })
        })
        .then(() => {
            this.setState({isLoading: false})
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
                        icon={<WorkshopIcon />}
                        label='查詢'
                        plain={true}
                        onClick={this.startFilter}/>
                </Header>
                <Tiles fill={true}
                    flush={false}
                    onMore={this.getMoreIntern}>
                {
                    _.map(this.state.renderInternList, (intern, id) =>
                        intern === undefined
                        ? null : <Containers.pages.dashboard.InternBox
                                    id={id}
                                    key={id}
                                    Content={intern}
                                    onClose={() => this.toggleWindowOpen(id)}
                                    FavoriteCount={this.props.Intern.favorite}
                                    currentUserId={this.props.Session.AuthData.uid}
                                    MessageCount={10}/>
                    )
                }
                </Tiles>
                <Containers.pages.dashboard.Inner
                    isClose={this.state.isWindowClose}
                    content={this.state.renderInternList[this.state.WindowContentIndex]}
                    postId={this.state.WindowContentIndex}
                    onClose={() => this.toggleWindowOpen(30)}/>
            </div>
        )
    }
})

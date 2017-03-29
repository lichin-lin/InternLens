import React, { Component } from 'react'
import Containers from 'js/containers'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'

import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'
import Header from 'grommet/components/Header'
import Tiles from 'grommet/components/Tiles'
import Heading from 'grommet/components/Heading'

import Loading from 'react-loading'
import InfiniteScroll from 'react-infinite-scroller'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.changeFilterInput = this.changeFilterInput.bind(this)
        this.toggleWindowOpen = this.toggleWindowOpen.bind(this)
        this.toggleWindowClose = this.toggleWindowClose.bind(this)
        this.getMoreIntern = this.getMoreIntern.bind(this)
        this.startFilter = this.startFilter.bind(this)
        this.state = {
            copyInternList: {},
            renderInternList: {},
            filterInput: '',
            currentIndex: 1,
            oneQueryCount: 6,
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
    }
    toggleWindowOpen (id) {
        console.log('toggle')
        this.props.getMessage(id)
        .then(() => {
            this.setState({WindowContentIndex: id})
            this.setState({isWindowClose: !this.state.isWindowClose})
        })
    }
    toggleWindowClose () {
        console.log('toggle close')
        this.setState({isWindowClose: !this.state.isWindowClose})
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
            return this.props.getInternList(0, 50)
        })
        .then(() => {
            return this.props.getAllFavorite()
        })
        .then(() => {
            return this.props.getAllMessage()
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
                width: '100%',
                maxWidth: '1024px'
            }}>
                <Header style={{
                    marginBottom: '50px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                  <Box flex={true}
                    justify='end'
                    direction='column'
                    responsive={false}
                    style={{
                        padding: '100px 20px',
                        background: '#A8E0FF',
                        position: 'relative',
                        margin: '0',
                        width: '100%'
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: '0',
                            left: '0',
                            opacity: '0.25',
                            backgroundImage: 'url("http://i.imgur.com/KTwxuTh.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                    <Heading uppercase={true}
                      truncate={false}
                      strong={true}
                      align='center'
                      margin='none'>
                      實習透視鏡
                    </Heading>
                    <Heading truncate={false}
                      align='center'
                      tag='h4'
                      margin='none'
                      style={{
                          marginBottom: '10px'
                      }}>
                      分享你的真實工時、薪資資訊，讓我們一起改善資訊不透明的現況
                    </Heading>
                      <div className="submitNewPost--contain">
                          <a className="submitNewPost" target='_blank' href='https://goo.gl/forms/RJ395aQxaFzxoYFp2'>
                              <button>
                              提交實習心得
                              </button>
                          </a>
                        </div>
                      {/* <Menu responsive={true}
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
                      </Menu> */}
                    </Box>
                    <Box flex={true}
                      justify='center'
                      direction='row'
                      responsive={false}
                      style={{
                          margin: '30px 0 0 0',
                          padding: '0 15px',
                          position: 'relative',
                          width: '100%',
                          maxWidth: '1024px'
                      }}>
                      <Search inline={true}
                        fill={true}
                        size='small'
                        value={this.state.filterInput}
                        iconAlign='start'
                        placeHolder='輸入公司名稱'
                        onDOMChange={this.changeFilterInput}
                        responsive={false}
                        dropAlign={{'right': 'right'}}
                        style={{
                            border: '2px solid #50514F',
                            margin: '0 auto'
                        }} />
                    <div className="searchBtn"
                        onClick={this.startFilter}>搜尋</div>
                    </Box>

                </Header>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.getMoreIntern}
                    hasMore={this.state.isListEnd === false}
                    loader={
                        <div className="loader" style={{display: 'flex', justifyContent: 'center'}}>
                            <Loading type='cylon' color='#50514F' />
                        </div>}
                >
                    <Tiles fill={true}
                        flush={false}>
                    {
                        _.map(this.state.renderInternList, (intern, id) =>
                            intern === undefined
                            ? null : <Containers.pages.dashboard.InternBox
                                        id={id}
                                        key={id}
                                        Content={intern}
                                        onClose={() => this.toggleWindowOpen(id)}
                                        FavoriteCount={this.props.Intern.favorite}
                                        MessageCount={this.props.Intern.totalMessage}
                                        currentUserId={this.props.Session.AuthData.uid}/>
                        )
                    }
                    </Tiles>
                </InfiniteScroll>
                <Containers.pages.dashboard.InnerContent.Base
                    isClose={this.state.isWindowClose}
                    content={this.state.renderInternList[this.state.WindowContentIndex]}
                    postId={this.state.WindowContentIndex}
                    onClose={() => this.toggleWindowClose()}/>
            </div>
        )
    }
}, require('./Base.styl'))

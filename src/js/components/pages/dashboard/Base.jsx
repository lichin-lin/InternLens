import React, { Component } from 'react'
import Containers from 'js/containers'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'
// import { browserHistory } from 'react-router'

import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'
import Header from 'grommet/components/Header'
import Tiles from 'grommet/components/Tiles'
import Heading from 'grommet/components/Heading'
import { Modal } from 'antd'

import Loading from 'react-loading'
import InfiniteScroll from 'react-infinite-scroller'

const catagoryList = ['網路服務', '科技', '電商', '顧問', '廣告公關', '金融', '媒體', '設計',
    '文創', '醫療/生物', '教育', '旅遊', '農業', 'NPO/NGO', '傳產', '電信', '批發零售',
    '食品', '學校', '研究機構', '遊戲', '運輸', '政府', '其他']
@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.changeFilterInput = this.changeFilterInput.bind(this)
        this.toggleWindowOpen = this.toggleWindowOpen.bind(this)
        this.toggleWindowClose = this.toggleWindowClose.bind(this)
        this.getMoreIntern = this.getMoreIntern.bind(this)
        this.startFilter = this.startFilter.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.startCatagoryFilter = this.startCatagoryFilter.bind(this)
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.state = {
            copyInternList: {},
            renderInternList: {},
            filterInput: '',
            currentIndex: -1,
            oneQueryCount: 6,
            WindowContentIndex: 1,
            isWindowClose: true,
            isLoading: true,
            isListEnd: false,
            visible: false,
            targetCatagory: ''
        }
    }
    showModal () {
        this.setState({
            visible: true
        })
    }
    handleOk (e) {
        this.setState({
            visible: false
        })
    }
    handleCancel (e) {
        this.setState({
            visible: false
        })
    }
    changeFilterInput (event) {
        this.setState({filterInput: event.target.value})
    }
    handleKeyPress (event) {
        if (event.key === 'Enter') {
            this.startFilter()
        }
    }
    startFilter () {
        this.setState({renderInternList: {}})
        this.setState({currentIndex: 0})
        this.setState({isListEnd: false})
        let rowData = _.reverse(_.values(this.props.Intern.list))
        // console.log('row', rowData)
        let filterData = {}
        _.map(rowData, (el, id) => {
            let flag = false
            if (el['Name'] !== undefined && el['Name'].toString().toLowerCase().indexOf(this.state.filterInput.toLowerCase()) !== -1) {
                flag = true
            }
            if (flag) {
                filterData[id] = el
            }
        })
        this.setState({
            copyInternList: {
                ...filterData
            }
        })
        if (this.state.filterInput !== undefined && this.state.filterInput !== '') {
            this.props.router.push('/?search=' + this.state.filterInput)
            // console.log('set url: ', this.props.router.push('/?search=' + this.state.filterInput))
        }
    }
    startCatagoryFilter (input) {
        this.setState({visible: false})
        this.setState({renderInternList: {}})
        this.setState({currentIndex: 0})
        this.setState({isListEnd: false})
        this.setState({targetCatagory: input})
        let rowData = _.reverse(_.values(this.props.Intern.list))
        // console.log('row', rowData)
        let filterData = {}
        _.map(rowData, (el, id) => {
            let flag = false
            if (el['Catagory'] !== undefined && el['Catagory'].toString().toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                flag = true
            }
            if (flag) {
                filterData[id] = el
            }
        })
        this.setState({
            copyInternList: {
                ...filterData
            }
        })
        if (input !== undefined && input !== '') {
            this.props.router.push('/?catagory=' + input)
            // console.log('set url: ', this.props.router.push('/?search=' + this.state.filterInput))
        }
    }
    toggleWindowOpen (id) {
        console.log('toggle: ', id)
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
        // console.log('load: ', this.props.Intern.list)
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
            return this.props.getInternList(0, 500)
        })
        .then(() => {
            return this.props.getAllFavorite()
        })
        .then(() => {
            return this.props.getAllMessage()
        })
        .then(() => {
            let reverseArr = _.reverse(_.values(this.props.Intern.list))
            this.setState({
                copyInternList: {
                    ...reverseArr
                }
            })
        })
        .then(() => {
            let queryInput = this.props.location.query
            if (queryInput.search !== undefined) {
                console.log('get query: ', queryInput)
                this.setState({
                    filterInput: queryInput
                }, () => {
                    this.startFilter()
                })
            } else if (queryInput.catagory !== undefined) {
                console.log('get query: ', queryInput)
                this.startCatagoryFilter(queryInput.catagory)
            }
        })
        .then(() => {
            // console.log('component:', this.state.copyInternList)
            this.setState({isLoading: false})
        })
    }
    render () {
        console.log('console: ', catagoryList)
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
                        background: 'rgb(255, 231, 153)',
                        position: 'relative',
                        margin: '0',
                        width: '100%'
                    }}>

                    <Modal title="類別 catagory" visible={this.state.visible}
                      onOk={this.handleOk} onCancel={this.handleCancel}
                      footer={[]}>
                        <div className="loginContain">
                        </div>
                        <div style={{
                            margin: '20px 0 0',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <ul className="catagoryList">
                                {
                                    catagoryList.map((el, id) =>
                                        <li className={this.state.targetCatagory === el ? 'active' : null}
                                            key={id}
                                            onClick={() => { this.startCatagoryFilter(el) }}>
                                            {el}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </Modal>

                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: '0',
                            left: '0',
                            opacity: '0.35',
                            backgroundImage: 'url("http://i.imgur.com/LnL7Cgr.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                    <Heading uppercase={true}
                      truncate={false}
                      strong={true}
                      align='center'
                      margin='none'
                      style={{
                          zIndex: '1'
                      }}>
                      實習透視鏡
                    </Heading>
                    <Heading truncate={false}
                      align='center'
                      tag='h4'
                      margin='none'
                      style={{
                          marginBottom: '10px',
                          zIndex: '1'
                      }}>
                      全台灣最透明的實習經驗分享平台。
                    </Heading>
                      <div className="submitNewPost--contain">
                          <a className="submitNewPost" target='_blank' href='https://goo.gl/forms/T4qXfrm2rhFC64cB2'>
                              <button>
                              提交實習心得
                              </button>
                          </a>
                        </div>
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
                        onKeyPress={this.handleKeyPress}
                        responsive={false}
                        dropAlign={{'right': 'right'}}
                        style={{
                            border: '2px solid #50514F',
                            margin: '0 auto'
                        }} />
                        <div className="searchBtn"
                            onClick={this.startFilter}>單字搜尋
                        </div>
                        <div className="searchBtn"
                            onClick={this.showModal}>類別搜尋
                        </div>
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
                        (this.state.isLoading === false && _.size(this.state.copyInternList) === 0)
                        ? <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '10vh 0'
                        }}>搜尋無相關結果，試著換換關鍵字吧</div>
                        : _.map(this.state.renderInternList, (intern, id) =>
                            intern === undefined
                            ? null : <Containers.pages.dashboard.InternBox
                                        id={intern.ID}
                                        key={id}
                                        Content={intern}
                                        onClose={() => this.toggleWindowOpen(intern.ID)}
                                        FavoriteCount={this.props.Intern.favorite}
                                        MessageCount={this.props.Intern.totalMessage}/>
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

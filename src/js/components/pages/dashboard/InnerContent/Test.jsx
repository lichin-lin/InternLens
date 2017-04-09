import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import Containers from 'js/containers'
import _ from 'lodash'
import DocumentMeta from 'react-document-meta'

import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import Loading from 'react-loading'
import { message } from 'antd'
import { FacebookButton, FacebookCount } from 'react-social'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import FavoriteIcon from 'grommet/components/icons/base/Favorite'

import Rater from 'react-rater'
@Radium
export default CSSModules(class MessageBox extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.toggleFavorite = this.toggleFavorite.bind(this)
        this.state = {
            content: {},
            postId: 0,
            userId: -1,
            isFavorite: false
        }
    }
    updatePropsToState (newProps) {
        this.setState({
            content: newProps.Intern.singlePost,
            postId: this.props.params.id
        })
    }
    componentDidMount () {
        this.updatePropsToState(this.props)
        console.log(this.props)
        this.props.getMessage(this.props.params.id)
        this.props.getSinglePost(this.props.params.id)
    }
    componentWillMount () {
    }
    componentWillReceiveProps (nextProps) {
        this.updatePropsToState(nextProps)
    }
    componentDidUpdate () {
        if (_.size(this.props.Session.AuthData) === 0) {
            return
        }
        if (this.state.userId !== this.props.Session.AuthData.uid) {
            this.setState({
                userId: this.props.Session.AuthData.uid
            }, () => {
                this.props.checkFavorite(this.props.params.id, this.props.Session.AuthData.uid)
                .then(() => {
                    this.setState({isFavorite: this.props.Intern.isFavorite})
                })
            })
        }
    }
    toggleFavorite () {
        if (_.size(this.props.Session.AuthData) === 0) {
            message.warning('先登入才能把文章加入蒐藏唷', 3)
            return
        }
        this.props.toggleFavorite(this.props.params.id, this.props.Session.AuthData.uid)
        .then(() => {
            let temp = this.state.isFavorite
            this.setState({isFavorite: !temp})
        })
    }
    render () {
        if (_.size(this.state.content) === 0) {
            return (
                <Loading type='cylon' color='#50514F' />
            )
        }
        let meta = {
            title: '實習透視鏡 InternLens | ' + this.state.content['Name']
        }
        return (
            <div style={{
                width: '100%',
                maxWidth: '1024px'
            }}>
                <DocumentMeta {...meta} />
                <Box justify='start' align='center' wrap={false} pad='medium' margin='small'
                    className='BoxWrapper'>
                    {
                        <div
                            style={{
                                width: '100%',
                                // height: '100%',
                                padding: '50px 0px',
                                margin: '0px'
                            }}>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Heading strong={true}
                                    uppercase={false}
                                    truncate={false}
                                    align='center'>
                                    {this.state.content['Name']}
                                </Heading>
                            </div>
                            <div className="btn_section" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                margin: '0 0 0 10px'
                            }}>
                                <FacebookButton
                                    className="FBshare"
                                    url={location.href}
                                    appId={1230566186983478}>
                                    <SocialFacebookIcon />
                                    {'share'}&nbsp;&nbsp;&nbsp;
                                    <FacebookCount url={location.href} />
                                </FacebookButton>
                                <button className={this.state.isFavorite === true ? 'postFavorite active' : 'postFavorite disable'}
                                    onClick={this.toggleFavorite}>
                                    <FavoriteIcon />
                                    {this.state.isFavorite === true ? '取消蒐藏' : '蒐藏此篇'}
                                </button>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Label style={{
                                    margin: '12px'
                                }}>
                                    {this.state.content['Job_Title']}
                                    {(this.state.content['Job_Title'].length > 0 && this.state.content['Start_Year'].length > 0) ? ', ' : ''}
                                    {this.state.content['Start_Year']}
                                </Label>
                            </div>

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
                                                {
                                                    el.title === '綜合評價'
                                                    ? el.content.length > 0 ? <Rater total={5} rating={parseInt(el.content)} interactive={false} /> : '發文者並未提供'
                                                    : el.content.length > 0 ? el.content : '發文者並未提供'
                                                }
                                            </Heading>
                                        </Box>
                                    )
                                }
                          </div>
                          <Box direction='row' justify='start' align='start' wrap={false} pad='none' margin='small'
                              style={{
                                  width: '100%',
                                  margin: '0px',
                                  alignItems: 'stretch'
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
                    <div style={{
                        width: '100%',
                        padding: '6px'
                    }}>
                        <Containers.pages.dashboard.InnerContent.MessageBox id={this.state.postId}/>
                    </div>
                </Box>
            </div>
        )
    }
}, require('./Base.styl'))

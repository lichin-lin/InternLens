import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import cookie from 'react-cookie'
import Radium from 'radium'
import _ from 'lodash'

import { Link } from 'react-router'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Button from 'grommet/components/Button'
import Actions from 'grommet/components/icons/base/Actions'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import SocialGooglePlusIcon from 'grommet/components/icons/base/SocialGooglePlus'
import { Modal } from 'antd'

import base from 'js/utils/config'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.FBLogin = this.FBLogin.bind(this)
        this.GoogleLogin = this.GoogleLogin.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.showModal = this.showModal.bind(this)
        this.state = {
            displayName: '',
            visible: false
        }
    }
    FBLogin () {
        this.props.FBLogin().then((state) => {
            cookie.save('user', state.payload.user)
            if (state.payload.user !== undefined) {
                this.props.getNickName(this.props.currentUser.user.uid)
                .then(() => {
                    this.setState({displayName: this.props.Profile.nickName})
                })
                .then(() => {
                    location.href = location.href
                })
            }
        })
    }
    GoogleLogin () {
        this.props.GoogleLogin().then((state) => {
            cookie.save('user', state.payload.user)
            if (state.payload.user !== undefined) {
                this.setState({displayName: this.props.currentUser.user.displayName})
                location.href = location.href
            }
        })
    }
    showModal () {
        console.log(this.props)
        if (_.size(this.props.currentUser) !== 0) {
            // this.props.router.push('/InternLens/setting')
            this.props.router.push('/setting')
            return
        }
        this.setState({
            visible: true
        })
    }
    handleOk (e) {
        console.log(e)
        this.setState({
            visible: false
        })
    }
    handleCancel (e) {
        console.log(e)
        this.setState({
            visible: false
        })
    }
    componentWillMount () {
        let checkUser = cookie.load('user')
        console.log(checkUser)
        if (checkUser !== undefined) {
            this.props.CookieLogin(checkUser)
            .then(() => {
                this.props.getNickName(checkUser.uid)
                .then(() => {
                    this.setState({displayName: this.props.Profile.nickName})
                })
            })
        }
    }
    render () {
        return (
              <Box direction='row'
                justify='center'
                align='center'
                wrap={true}
                pad='medium'
                margin='none'
                size='full'
                full='horizontal'
                colorIndex='light-1'>
                <Modal title="歡迎登入" visible={this.state.visible}
                  onOk={this.handleOk} onCancel={this.handleCancel}
                  footer={[]}>
                  <div className="loginContain">
                      <div onClick={this.FBLogin} className="FBSection"><SocialFacebookIcon size='large'/>Facebook</div>
                      <div onClick={this.GoogleLogin} className="GoogleSection"><SocialGooglePlusIcon size='large'/>Google</div>
                  </div>
                </Modal>
                <Title className="title" onClick={() => {
                    this.props.router.push(`${base}/`)
                }}>
                    InternLens
                </Title>&nbsp;&nbsp;&nbsp;
                <Menu responsive={true}
                    primary={false}
                    icon={<Actions />}
                    label='InternLens'
                    inline={false}
                    direction='row'
                    className="menu"
                    size='small'>
                    {_.size(this.props.currentUser) === 0
                        ? null
                        : <Anchor>
                            Hi, {this.state.displayName}
                        </Anchor>
                    }
                    {_.size(this.props.currentUser) === 0
                        ? <Anchor onClick={this.showModal}>
                            登入
                        </Anchor>
                        : <Link to={`${base}/setting`}>
                            <Anchor>
                                個人頁
                            </Anchor>
                        </Link>
                    }
                    <Link to={`${base}/`}>
                        <Anchor>
                            Home
                        </Anchor>
                    </Link>
                    <Link>
                        <Anchor target="_blank" href='https://www.facebook.com/media/set/?set=oa.255202131603654&type=1'>
                            懶人包
                        </Anchor>
                    </Link>
                    <Link to={`${base}/about`}>
                        <Anchor target="_blank" href='https://www.facebook.com/media/set/?set=oa.255202131603654&type=1'>
                            FB社團
                        </Anchor>
                    </Link>
                    <Link to={`${base}/about`}>
                        <Anchor>
                            關於網站
                        </Anchor>
                    </Link>
                    <Link to={`${base}/feedback`}>
                        <Anchor>
                            填寫回饋問卷
                        </Anchor>
                    </Link>
                </Menu>
                <Box flex={true}
                  justify='start'
                  direction='row'
                  className='navbar'
                  responsive={false}>
                    <Link to={`${base}/about`}>
                        <Button label='關於網頁'
                            plain={true}
                            style={{
                                color: '#676767',
                                opacity: '1'
                            }}/>
                    </Link>
                    <Link to={`${base}/feedback`}>
                        <Button label='回饋問卷'
                            plain={true}
                            style={{
                                color: '#676767',
                                opacity: '1'
                            }}/>
                    </Link>
                    <Link>
                        <Button label='FB社團'
                            plain={true}
                            target="_blank"
                            href='https://www.facebook.com/groups/241235806333620/'
                            style={{
                                color: '#676767',
                                opacity: '1'
                            }}/>
                    </Link>
                    <Button
                        label='懶人包'
                        plain={true}
                        href="https://www.facebook.com/media/set/?set=oa.255202131603654&type=1"
                        target="_blank"
                        onClick={() => { console.log('click') }}
                        style={{
                            color: '#676767',
                            opacity: '1'
                        }}/>
                        {_.size(this.props.currentUser) === 0
                            ? null
                            : <Link to={`${base}/setting`}>
                                <Button
                                    label='個人頁'
                                    plain={true}
                                    onClick={() => { console.log('click') }}
                                    style={{
                                        color: '#676767',
                                        opacity: '1'
                                    }}/>
                                </Link>
                        }

                    <Box flex={true}
                        justify='end'
                        direction='row'
                        responsive={false}>
                        <Button
                            label={this.state.displayName === undefined || this.state.displayName.length <= 0
                                ? '登入' : 'Hi! ' + this.state.displayName}
                            plain={true}
                            onClick={this.showModal}
                            style={{
                                color: '#676767',
                                opacity: '1'
                            }}/>
                    </Box>
                  </Box>
              </Box>
        )
    }
}, require('./Navbar.styl'))

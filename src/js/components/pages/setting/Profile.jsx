import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import Dotdotdot from 'react-dotdotdot'
import CSSModules from 'react-css-modules'
import { Modal, Input, message } from 'antd'
import FormField from 'grommet/components/FormField'
import base from 'js/utils/config'

export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.changeFilterInput = this.changeFilterInput.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.showModal = this.showModal.bind(this)
        this.state = {
            id: -1,
            nickName: '',
            newNickName: '',
            visible: false
        }
    }
    showModal () {
        this.setState({
            newNickName: this.state.nickName,
            visible: true
        })
    }
    handleOk (e) {
        console.log('handle ok: ', this.state.newNickName)
        if (this.state.newNickName === null || this.state.newNickName === '') {
            message.warning('新暱稱不能空白唷~')
            return
        }
        if (this.state.newNickName === this.state.nickName) {
            message.warning('新暱稱不能跟原本一樣喔~')
            return
        }
        this.props.setNickName(this.state.id, this.state.newNickName)
        .then(() => {
            this.props.getNickName(this.state.id)
            location.href = location.href
        })
    }
    handleCancel (e) {
        console.log('cancel', this.state)
        this.setState({
            newNickName: '',
            visible: false
        })
    }
    changeFilterInput (event) {
        this.setState({newNickName: event.target.value})
    }
    componentDidMount () {
        console.log('[state] did mount')
        console.log(this.props.Session.AuthData)
        if (_.size(this.props.Session.AuthData) === 0) {
            console.log('not yet')
            return
        }
        console.log('did mount: get')
        this.props.getNickName(this.props.Session.AuthData.uid)
    }
    updatePropsToState (newProps) {
        console.log(newProps)
    }
    componentDidUpdate () {
        // console.log('[state] did update')
        // this.setState({ nickName: this.props.Profile.nickName })
        if (this.state.id !== this.props.Session.AuthData.uid) {
            this.setState({
                id: this.props.Session.AuthData.uid
            }, () => {
                this.props.getUserFavorite(this.state.id)
                this.props.getUserMessage(this.state.id)
                this.props.getNickName(this.props.Session.AuthData.uid)
                .then(() => {
                    console.log(this.props.Profile.nickName)
                    this.setState({ nickName: this.props.Profile.nickName })
                })
            })
        }

        if (this.state.nickName !== this.props.Profile.nickName) {
            this.setState({ nickName: this.props.Profile.nickName })
        }

        if (_.size(this.props.Intern.list) === 0) {
            // need fetch post
            this.props.getInternList(0, 10)
            .then(() => {
                // start render to page
            })
        }
    }
    componentWillReceiveProps (nextProps) {
        console.log('[state] will receive')
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Modal title="修改暱稱" visible={this.state.visible}
                  onOk={this.handleOk} onCancel={this.handleCancel}
                  footer={[]}>
                    <FormField label='更改暱稱'>
                        <Input rows={1}
                            size="large"
                            type="text"
                            placeholder=""
                            value={this.state.newNickName}
                            onChange={(event) => { this.setState({newNickName: event.target.value}) }}
                            onPressEnter={this.handleOk}
                            style={{borderRadius: '5px', fontSize: '20px'}} />
                    </FormField>
                    <div className="btnContainer">
                        <div onClick={this.handleCancel}>放棄修改 cancel</div>
                        <div onClick={this.handleOk}>確定修改 confirm</div>
                    </div>
                </Modal>
                <div className="userInfoContainer">
                    <div className="userInfo">
                        <div className="imgContainer" onClick={() => { this.props.getUserFavorite(this.state.id) }}>
                            <img src={this.props.Session.AuthData.photoURL} />
                        </div>
                        Hi 你的暱稱: {this.state.nickName}
                        <div className="changeName" onClick={this.showModal}>點此修改暱稱</div>
                    </div>
                </div>
                {
                    this.state.nickName === 'no the same'
                    ? null : <div className="postContainer">
                                <ul>
                                    <h2>喜愛文章</h2>
                                    {
                                        _.map(this.props.Profile.favoriteList, (el, id) =>
                                            el === undefined
                                            ? null
                                            : this.props.Intern.list[el.postId] === undefined
                                            ? null : <Link key={id} to={`${base}/post/${el.postId}`}>
                                                        <li className="favoritePost">
                                                            <h3>{this.props.Intern.list[el.postId].Name} | <span>查看心得文</span></h3>
                                                            <Dotdotdot clamp={1}>
                                                                <p>{this.props.Intern.list[el.postId].Review}</p>
                                                            </Dotdotdot>
                                                        </li>
                                                     </Link>
                                        )
                                    }
                                </ul>
                             </div>
                }
            </div>
        )
    }
}, require('./Profile.styl'))

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'
import { Link } from 'react-router'
// import Dotdotdot from 'react-dotdotdot'
import Truncate from 'react-truncate'

import Card from 'grommet/components/Card'
import Tile from 'grommet/components/Tile'
import Anchor from 'grommet/components/Anchor'
import Animate from 'grommet/components/Animate'
import { message } from 'antd'
import FavoriteIcon from 'grommet/components/icons/base/Favorite'
import ContactIcon from 'grommet/components/icons/base/Contact'
import base from 'js/utils/config'

@Radium
export default CSSModules(class Inner extends Component {
    constructor (props) {
        super(props)
        this.updatePropsToState = this.updatePropsToState.bind(this)
        this.toggleFavorite = this.toggleFavorite.bind(this)
        this.state = {
            id: 1,
            information: {
                'Name': 'Init',
                'Review': 'init ii'
            },
            favoriteCount: 0,
            isFavorite: false,
            messageCount: 0
        }
    }
    updatePropsToState (newProps) {
        this.setState({
            id: newProps.id,
            information: newProps.Content
        })
        let nextFavoriteCounter = 0
        let nextMessageCounter = 0
        let isFavorite = false
        _.map(newProps.FavoriteCount, (el) => {
            if (el.postId.toString() === newProps.id.toString()) {
                nextFavoriteCounter += 1
                if (_.size(this.props.Session.AuthData) !== 0) {
                    if (el.userId.toString() === this.props.Session.AuthData.uid.toString()) {
                        isFavorite = true
                    }
                }
            }
        })

        _.map(newProps.MessageCount, (el) => {
            if (el.postId.toString() === newProps.id.toString()) {
                nextMessageCounter += 1
            }
        })

        this.setState({
            isFavorite: isFavorite,
            favoriteCount: nextFavoriteCounter,
            messageCount: nextMessageCounter
        })
    }
    toggleFavorite () {
        if (_.size(this.props.Session.AuthData) === 0) {
            message.warning('先登入才能把文章加入蒐藏唷', 3)
            return
        }
        this.props.toggleFavorite(this.state.id, this.props.Session.AuthData.uid)
        .then(() => {
            this.props.getAllFavorite()
        })
    }
    componentDidMount () {
        this.updatePropsToState(this.props)
    }
    componentWillReceiveProps (nextProps) {
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
            <div className="internBoxWrapper">
                <Animate enter={{'animation': 'fade', 'duration': 700, 'delay': 0}}
                    keep={false}
                    style={{
                        marginBottom: '40px'
                    }}>
                    <Tile className="InternBox" size='medium'>
                        <Card heading={this.state.information['Name'] !== undefined ? this.state.information['Name'] : null}
                            description={
                                // <Dotdotdot clamp={3}>
                                <Truncate lines={10} ellipsis={<span>...</span>}>
                                    <div style={{lineHeight: '1.5', minHeight: '75px'}}>
                                        {this.state.information['Review'] !== undefined ? this.state.information['Review'] : null}
                                    </div>
                                </Truncate>
                                // </Dotdotdot>
                            }
                            headingStrong={false}
                            link= {
                                <Link to={`${base}/post/${this.state.id}`}
                                    // target="_blank"
                                    >
                                    <Anchor
                                        // onClick={this.props.onClose}
                                        id={this.state.id.toString()}
                                        label='查看心得全文'
                                        style={{
                                            marginTop: '10px'
                                        }} />
                                </Link>
                                }
                                style={{
                                    width: '100%'
                                }}/>
                    </Tile>
                    <div className='actionButton'>
                        <FavoriteIcon
                            onClick={this.toggleFavorite}
                            colorIndex={this.state.isFavorite ? 'accent-1' : 'grey-2'}
                            size='small'
                            style={{
                                cursor: 'pointer'
                            }}/>
                            <span>{this.state.favoriteCount}</span>
                        <ContactIcon
                            colorIndex='grey-2'
                            size='small'
                            style={{
                                cursor: 'pointer'
                            }}/>
                        <span>{this.state.messageCount}</span>
                    </div>
               </Animate>
            </div>
        )
    }
}, require('./InternBox.styl'))

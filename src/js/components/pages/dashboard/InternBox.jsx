import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import _ from 'lodash'
import Dotdotdot from 'react-dotdotdot'

import Card from 'grommet/components/Card'
import Tile from 'grommet/components/Tile'
import Anchor from 'grommet/components/Anchor'
import Animate from 'grommet/components/Animate'

import FavoriteIcon from 'grommet/components/icons/base/Favorite'
import ContactIcon from 'grommet/components/icons/base/Contact'
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
        _.map(newProps.FavoriteCount, (el) => {
            if (el.postId.toString() === newProps.id.toString()) {
                nextFavoriteCounter += 1
                if (newProps.currentUserId !== undefined) {
                    if (el.userId.toString() === newProps.currentUserId.toString()) {
                        this.setState({isFavorite: true})
                    }
                }
            }
        })
        this.setState({
            favoriteCount: nextFavoriteCounter
        })
    }
    toggleFavorite () {
        this.props.toggleFavorite(this.state.id, this.props.currentUserId)
        this.props.getFavorite()
    }
    componentDidMount () {
        this.updatePropsToState(this.props)
    }
    componentWillReceiveProps (nextProps) {
        this.updatePropsToState(nextProps)
    }
    render () {
        return (
            <div>
                <Animate enter={{'animation': 'fade', 'duration': 700, 'delay': 0}}
                    keep={false}
                    style={{
                        marginBottom: '40px'
                    }}>
                    <Tile size='medium'>
                        <Card heading={this.state.information['Name'] !== undefined ? this.state.information['Name'] : null}
                            description={
                                <Dotdotdot clamp={3}>
                                    <div style={{lineHeight: '1.5', minHeight: '75px'}}>
                                        {this.state.information['Review'] !== undefined ? this.state.information['Review'] : null}
                                    </div>
                                </Dotdotdot>
                            }
                            headingStrong={false}
                            link= {
                                <Anchor
                                    onClick={this.props.onClose}
                                    id={this.state.id.toString()}
                                    label='查看心得全文'
                                    style={{
                                        marginTop: '10px'
                                    }} />
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

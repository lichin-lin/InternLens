import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import cookie from 'react-cookie'
import Radium from 'radium'

import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.FBLogin = this.FBLogin.bind(this)
        this.state = {
            displayName: ''
        }
    }
    FBLogin () {
        this.props.FBLogin().then((state) => {
            cookie.save('user', state.payload.user)
            if (state.payload.user !== undefined) {
                this.setState({displayName: this.props.currentUser.user.displayName})
            }
        })
    }
    componentWillMount () {
        let checkUser = cookie.load('user')
        if (checkUser !== undefined) {
            this.props.CookieLogin(checkUser)
            this.setState({displayName: checkUser.displayName})
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
                <Title>
                    InternLens
                </Title>&nbsp;&nbsp;&nbsp;
                <Box flex={true}
                  justify='start'
                  direction='row'
                  responsive={false}>
                    <Button
                        label='懶人包'
                        plain={true}
                        onClick={() => { console.log('click') }}
                        style={{
                            color: '#676767',
                            opacity: '1'
                        }}/>
                    <Button
                        label='關於本站'
                        plain={true}
                        onClick={() => { console.log('click') }}
                        style={{
                            color: '#676767',
                            opacity: '1'
                        }}/>
                    <Box flex={true}
                        justify='end'
                        direction='row'
                        responsive={false}>
                        <Button
                            label={this.state.displayName === undefined || this.state.displayName.length <= 0
                                ? '登入' : 'Hi! ' + this.state.displayName}
                            plain={true}
                            onClick={this.FBLogin}
                            style={{
                                color: '#676767',
                                opacity: '1'
                            }}/>
                        <Button
                            label='提交心得'
                            plain={false}
                            href='#'
                            onClick={() => { console.log('click') }}
                            style={{
                                border: 'none',
                                color: 'white',
                                background: '#0353A4',
                                opacity: '1'
                            }}/>
                    </Box>
                  </Box>
              </Box>
        )
    }
})

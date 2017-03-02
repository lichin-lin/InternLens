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
            cookie.save('user', state.payload)
            this.setState({displayName: this.props.currentUser.AuthData.user.displayName})
        })
    }
    componentWillMount () {
        let user = cookie.load('user')
        if (user !== undefined) {
            this.props.CookieLogin(user)
            this.setState({displayName: user.user.displayName})
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
                  justify='end'
                  direction='row'
                  responsive={false}>
                  <Button
                      label={this.state.displayName.length <= 0
                          ? '登入' : 'Hi! ' + this.state.displayName}
                      plain={true}
                      onClick={this.FBLogin}
                      style={{
                          color: '#676767',
                          opacity: '1'
                      }}/>
                  <Button
                      label='心願單'
                      plain={true}
                      style={{
                          color: '#676767',
                          opacity: '1'
                      }}/>
                  </Box>
              </Box>
        )
    }
})

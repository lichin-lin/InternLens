import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Box from 'grommet/components/Box'
// import Logo from 'grommet/components/Logo'
import Title from 'grommet/components/Title'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
// import Paragraph from 'grommet/components/Paragraph'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook'

export default CSSModules(class extends Component {
    render () {
        return (
            <Footer justify='between'>
                <Title style={{
                    fontSize: '1.25rem'
                }}>
                {/* <Logo /> */}
                    實習透視鏡
                </Title>
                <Box direction='row'
                    align='center'
                    pad={{'between': 'medium'}}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Anchor icon={<SocialFacebookIcon />}
                            target="_blank"
                            href='https://www.facebook.com/groups/241235806333620/' />
                        <Anchor icon={<SocialGithubIcon />}
                            target="_blank"
                            href='https://github.com/internlens-tw/InternLens' />
                        <p style={{
                            margin: '5px 0',
                            paddingTop: '5px'
                        }}>© 2017 InternLens</p>
                    </div>
                </Box>
            </Footer>
        )
    }
}, require('./Footer.styl'))

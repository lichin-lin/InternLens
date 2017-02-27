import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Box from 'grommet/components/Box'
// import Logo from 'grommet/components/Logo'
import Title from 'grommet/components/Title'
import Footer from 'grommet/components/Footer'
import Paragraph from 'grommet/components/Paragraph'

export default CSSModules(class extends Component {
    render () {
        return (
            <Footer justify='between'>
                <Title>
                {/* <Logo /> */}
                    實習透視鏡
                </Title>
                <Box direction='row'
                    align='center'
                    pad={{'between': 'medium'}}>
                    <Paragraph margin='none'>
                        © 2017 InternLens
                    </Paragraph>
                </Box>
            </Footer>
        )
    }3
})

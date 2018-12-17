import React, { Component } from 'react'
import Containers from 'containers'
import CSSModules from 'react-css-modules'
import Radium, { StyleRoot } from 'radium'
// import { Link } from 'react-router'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
// import Title from 'grommet/components/Title'

@Radium
export default CSSModules(class extends Component {
    render () {
        return (
            <StyleRoot>
                <App style={{
                    maxWidth: '100%',
                    background: 'white',
                    maxHeight: 'none'
                }}>
                    <Box justify='start'
                      align='center'
                      wrap={true}
                      pad='none'
                      margin='none'
                      size='full'
                      flex={true}
                      full={true}
                      colorIndex='light-2'
                      style={{
                          background: 'white',
                          maxHeight: 'none',
                          height: 'auto',
                          overflow: 'none'
                      }}>
                    <Containers.common.Navbar {...this.props}/>
                      <Box direction='row'
                        justify='center'
                        align='start'
                        wrap={true}
                        pad='none'
                        margin='none'
                        size='full'
                        flex={true}
                        full='horizontal'
                        colorIndex='light-1'
                        style={{
                            marginTop: '100px',
                            background: 'white',
                            Height: 'auto',
                            minHeight: 'auto',
                            maxHeight: 'none',
                            overflow: 'none'
                        }}>
                        {this.props.children}
                    </Box>
                      <Box direction='row'
                        justify='start'
                        align='center'
                        wrap={true}
                        pad='medium'
                        margin='none'
                        size='full'
                        full='horizontal'
                        colorIndex='light-1'>
                        <Containers.common.Footer />
                      </Box>
                    </Box>

                </App>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}, require('./../../scss/index.scss'))
// docs link: https://docs.nctu.me/spreadsheets/d/1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew/export?format=xlsx&id=1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew
// https://medium.com/@luce.williamt/using-grommet-with-create-react-app-8e8ddaa836ee#.6auu6ur7l
// https://github.com/primozs/feathers-react-bojler/blob/master/webpack.config.dev.js

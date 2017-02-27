import React, { Component } from 'react'
import Containers from 'containers'
import CSSModules from 'react-css-modules'
import Radium, { StyleRoot } from 'radium'
import { Link } from 'react-router'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.getInternList = this.getInternList.bind(this)
    }
    getInternList () {
        this.props.getInternList()
    }
    componentWillMount () {
        console.log('get api')
    }
    componentDidMount () {
        this.props.getInternList()
        this.props.router.push('/dashboard')
    }
    render () {
        return (
            <StyleRoot>

                <App>
                    <Box justify='start'
                      align='center'
                      wrap={true}
                      pad='none'
                      margin='none'
                      size='full'
                      flex={true}
                      full={true}
                      colorIndex='light-2'>
                      <Box direction='row'
                        justify='center'
                        align='center'
                        wrap={true}
                        pad='medium'
                        margin='none'
                        size='full'
                        full='horizontal'
                        colorIndex='light-1'>
                        <Link to={`/dashboard`}>
                            總版dashboard
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={`/favorite`}>
                            心願單favorite
                        </Link>
                      </Box>

                      <Box direction='row'
                        justify='start'
                        align='center'
                        wrap={true}
                        pad='medium'
                        margin='small'
                        size='full'
                        flex={true}
                        full='horizontal'
                        colorIndex='light-1'>
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

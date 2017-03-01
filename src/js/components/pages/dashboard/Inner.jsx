import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'

@Radium
export default CSSModules(class Inner extends Component {
    constructor (props) {
        super(props)
        this.show = this.show.bind(this)
        this.state = {
            isWindowClose: true
        }
    }
    show () {
        console.log(this.state)
    }
    componentDidMount () {
        console.log('mount')
    }
    render () {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
})

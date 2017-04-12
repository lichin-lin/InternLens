import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Section from 'grommet/components/Section'
// import Heading from 'grommet/components/Heading'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="feedbackSection"
                style={{
                    width: '100%'
                }}>
                <Section>
                    <div>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.surveycake.com/s/6R21y"
                            // style="overflow:hidden;border:#ddd 1px solid;"
                            allowTransparency="true"
                            frameBorder="0">
                        </iframe>
                    </div>
                </Section>
            </div>
        )
    }
}, require('./Feedback.styl'))

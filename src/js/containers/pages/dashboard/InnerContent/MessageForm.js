import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
    postMessage: (msg) => dispatch(Actions.Intern.postMessage(msg))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.InnerContent.MessageForm)

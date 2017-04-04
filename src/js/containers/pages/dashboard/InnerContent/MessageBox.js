import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    messageList: state.Intern.postMessage,
    Session: state.Session
})

const mapDispatchToProps = (dispatch) => ({
    getMessage: (id) => dispatch(Actions.Intern.getMessage(id)),
    setLoading: () => dispatch(Actions.Intern.setLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.InnerContent.MessageBox)

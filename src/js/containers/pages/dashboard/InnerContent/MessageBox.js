import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    messageList: state.Intern.message,
    Session: state.Session
})

const mapDispatchToProps = (dispatch) => ({
    getMessage: (id) => dispatch(Actions.Intern.getMessage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.InnerContent.MessageBox)
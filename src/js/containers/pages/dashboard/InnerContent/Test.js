import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    Intern: state.Intern,
    Session: state.Session,
    Profile: state.Profile
})

const mapDispatchToProps = (dispatch) => ({
    getMessage: (id) => dispatch(Actions.Intern.getMessage(id)),
    getSinglePost: (id) => dispatch(Actions.Intern.getSinglePost(id)),
    toggleFavorite: (pid, uid) => dispatch(Actions.Intern.toggleFavorite(pid, uid))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.InnerContent.Test)

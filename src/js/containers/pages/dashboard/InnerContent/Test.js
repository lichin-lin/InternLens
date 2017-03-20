import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    Intern: state.Intern
})

const mapDispatchToProps = (dispatch) => ({
    getMessage: (id) => dispatch(Actions.Intern.getMessage(id)),
    getSinglePost: (id) => dispatch(Actions.Intern.getSinglePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.InnerContent.Test)

import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    InternBoxContent: {
        ...ownProps
    }
})

const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (pid, uid) => dispatch(Actions.Intern.toggleFavorite(pid, uid)),
    getAllFavorite: () => dispatch(Actions.Intern.getAllFavorite()),
    getAllMessage: () => dispatch(Actions.Intern.getAllMessage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.InternBox)

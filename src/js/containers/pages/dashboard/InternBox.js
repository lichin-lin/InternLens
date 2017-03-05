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
    getFavorite: () => dispatch(Actions.Intern.getFavorite())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.InternBox)

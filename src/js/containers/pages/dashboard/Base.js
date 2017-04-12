import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
    Intern: state.Intern,
    Session: state.Session
})

const mapDispatchToProps = (dispatch) => ({
    getInternList: (start, end) => dispatch(Actions.Intern.getInternList(start, end)),
    getAllFavorite: () => dispatch(Actions.Intern.getAllFavorite()),
    getAllMessage: () => dispatch(Actions.Intern.getAllMessage()),
    getMessage: (id) => dispatch(Actions.Intern.getMessage(id)),
    setLoading: () => dispatch(Actions.Intern.setLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.Base)

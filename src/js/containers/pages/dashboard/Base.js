import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
    Intern: state.Intern
})

const mapDispatchToProps = (dispatch) => ({
    getInternList: (start, end) => dispatch(Actions.Intern.get(start, end)),
    setLoading: () => dispatch(Actions.Intern.setLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.Base)

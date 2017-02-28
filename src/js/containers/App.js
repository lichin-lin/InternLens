import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    getInternList: (start, end) => dispatch(Actions.Intern.get(start, end))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.App)

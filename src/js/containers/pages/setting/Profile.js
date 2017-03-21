import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
    Session: state.Session,
    Profile: state.Profile
})

const mapDispatchToProps = (dispatch) => ({
    getNickName: (id) => dispatch(Actions.Intern.getNickName(id)),
    setNickName: (id, name) => dispatch(Actions.Intern.setNickName(id, name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.setting.Profile)

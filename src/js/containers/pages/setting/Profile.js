import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
    Intern: state.Intern,
    Session: state.Session,
    Profile: state.Profile
})

const mapDispatchToProps = (dispatch) => ({
    getInternList: (start, end) => dispatch(Actions.Intern.getInternList(start, end)),
    getNickName: (id) => dispatch(Actions.Intern.getNickName(id)),
    setNickName: (id, name) => dispatch(Actions.Intern.setNickName(id, name)),
    getUserFavorite: (id) => dispatch(Actions.Intern.getUserFavorite(id)),
    getUserMessage: (id) => dispatch(Actions.Intern.getUserMessage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.setting.Profile)

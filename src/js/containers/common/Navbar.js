import { connect } from 'react-redux'
import Components from 'components'
import Action from 'js/actions'

const mapStateToProps = (state) => ({
    currentUser: state.Session.AuthData
})

const mapDispatchToProps = (dispatch) => ({
    FBLogin: () => dispatch(Action.Session.FBLogin()),
    GoogleLogin: () => dispatch(Action.Session.GoogleLogin()),
    CookieLogin: (data) => dispatch(Action.Session.CookieLogin(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.common.Navbar)

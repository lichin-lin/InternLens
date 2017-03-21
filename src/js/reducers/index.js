import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { firebaseStateReducer } from 'redux-react-firebase'
import Intern from './Intern'
import Session from './Session'
import Profile from './Profile'
export default combineReducers({
    Intern,
    routing,
    Profile,
    Session,
    firebase: firebaseStateReducer
})

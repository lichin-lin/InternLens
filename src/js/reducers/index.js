import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { firebaseStateReducer } from 'redux-react-firebase'
import Intern from './Intern'
import Session from './Session'
export default combineReducers({
    Intern,
    routing,
    Session,
    firebase: firebaseStateReducer
})

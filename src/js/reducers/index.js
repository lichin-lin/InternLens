import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { firebaseStateReducer } from 'redux-react-firebase'
import Intern from './Intern'
export default combineReducers({
    Intern,
    routing,
    firebase: firebaseStateReducer
})

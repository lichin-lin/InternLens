import { handleActions } from 'redux-actions'

const initialState = {
    AuthData: {}
}

export default handleActions({

    FBLogin: {
        next (state, action) {
            return {
                ...state,
                AuthData: action.payload
            }
        },
        throw (state, action) {
            return {
                AuthData: {}
            }
        }
    },
    FirebaseRedirection: {
        next (state, action) {
            return {
                ...state,
                AuthData: action.payload
            }
        },
        throw (state, action) {
            return {
                AuthData: {}
            }
        }
    },
    FBLogout: {
        next (state, action) {
            return {
                ...state,
                AuthData: action.payload
            }
        },
        throw (state, action) {
            return {
                ...state
            }
        }
    },
    GoogleLogin: {
        next (state, action) {
            return {
                ...state,
                AuthData: action.payload
            }
        },
        throw (state, action) {
            return {
                AuthData: {}
            }
        }
    },
    CookieLogin: {
        next (state, action) {
            return {
                ...state,
                AuthData: action.payload
            }
        }
    },

    default: (state, action) => {
        return {
            ...state
        }
    }
}, initialState)

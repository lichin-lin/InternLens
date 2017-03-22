import { handleActions } from 'redux-actions'

const initialState = {
    nickName: '',
    isFavorite: false,
    favoriteList: [],
    messageList: []
}

export default handleActions({

    GET_NICKNAME: {
        next (state, action) {
            return {
                ...state,
                nickName: action.payload
            }
        },
        throw (state, action) {
            return {
                nickName: ''
            }
        }
    },
    SET_NICKNAME: {
        next (state, action) {
            return {
                ...state
            }
        },
        throw (state, action) {
            return {
                nickName: ''
            }
        }
    },
    GET_USERFAVORITE: {
        next (state, action) {
            return {
                ...state,
                favoriteList: action.payload
            }
        },
        throw (state, action) {
            return {
                favoriteList: []
            }
        }
    },
    GET_USERMESSAGE: {
        next (state, action) {
            return {
                ...state,
                messageList: action.payload
            }
        },
        throw (state, action) {
            return {
                messageList: []
            }
        }
    },
    default: (state, action) => {
        return {
            ...state
        }
    }
}, initialState)

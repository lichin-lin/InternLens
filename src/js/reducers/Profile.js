import { handleActions } from 'redux-actions'

const initialState = {
    nickName: '',
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

    default: (state, action) => {
        return {
            ...state
        }
    }
}, initialState)

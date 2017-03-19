import { handleActions } from 'redux-actions'

const initialState = {
    list: {},
    favorite: {},
    totalMessage: {},
    postMessage: {},
    isLoading: true
}

export default handleActions({
    GET_INTERNLIST: {
        next (state, action) {
            let obj = action.payload
            if (Array.isArray(action.payload)) {
                let arr = action.payload
                obj = {}
                for (let i = 0; i < arr.length; ++i) {
                    if (arr[i] === undefined) {
                        continue
                    }
                    obj[arr[i]['ID']] = arr[i]
                }
            }
            return {
                ...state,
                list: {
                    ...state.list,
                    ...obj
                },
                isLoading: false
            }
        },
        throw (state, { payload }) {
            console.log('qq intern list')
            return state
        }
    },
    GET_FAVORITE: {
        next (state, action) {
            return {
                ...state,
                favorite: {
                    ...action.payload
                }
            }
        },
        throw (state, { payload }) {
            console.log('qq favorite')
            return state
        }
    },
    GET_ALLMESSAGE: {
        next (state, action) {
            return {
                ...state,
                totalMessage: {
                    ...action.payload
                }
            }
        },
        throw (state, { payload }) {
            console.log('qq all message fail')
            return state
        }
    },
    TOGGLE_FAVORITE: {
        next (state, action) {
            return {
                ...state,
                favorite: {
                    ...state.favorite,
                    ...action.payload
                }
            }
        },
        throw (state, { payload }) {
            console.log('qq favorite toggle')
            return state
        }
    },
    GET_MESSAGE: {
        next (state, action) {
            return {
                ...state,
                postMessage: {
                    ...action.payload
                }
            }
        },
        throw (state, { payload }) {
            console.log('qq message toggle')
            return state
        }
    }
}, initialState)

// https://github.com/SheetJS/js-xlsx/issues/285#issuecomment-240680073

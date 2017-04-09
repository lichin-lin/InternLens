import { handleActions } from 'redux-actions'
import _ from 'lodash'
const initialState = {
    list: {},
    singlePost: {},
    favorite: {},
    totalMessage: {},
    postMessage: {},
    isLoading: true,
    isFavorite: false
}

export default handleActions({
    GET_INTERNLIST: {
        next (state, action) {
            let obj = action.payload
            // console.log('reducer: ', action.payload)
            if (Array.isArray(action.payload)) {
                let arr = action.payload
                console.log('in reducer')
                obj = {}
                for (let i = 0; i < arr.length; ++i) {
                    if (arr[i] === undefined) {
                        continue
                    }
                    obj[arr[i]['ID']] = arr[i]
                }
            }
            // console.log('reducer: ', obj)
            _.assign(obj, {'name': 'test'})
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
    GET_SINGLEPOST: {
        next (state, action) {
            return {
                ...state,
                singlePost: {
                    ...action.payload
                }
            }
        },
        throw (state, { payload }) {
            console.log('qq favorite')
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
    CHECK_FAVORITE: {
        next (state, action) {
            console.log(action)
            return {
                ...state,
                isFavorite: action.payload
            }
        },
        throw (state, { payload }) {
            console.log('qq is favorite')
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

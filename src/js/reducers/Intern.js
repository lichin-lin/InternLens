import { handleActions } from 'redux-actions'
// import _ from 'lodash'

const initialState = {
    list: []
}

export default handleActions({
    GET_INTERNLIST: {
        next (state, action) {
            console.log(action.payload)
            return {
                ...state,
                list: action.payload
            }
        },
        throw (state, { payload }) {
            console.log('qq')
            return state
        }
    }
}, initialState)

// https://github.com/SheetJS/js-xlsx/issues/285#issuecomment-240680073

import { handleActions } from 'redux-actions'

const initialState = {
    list: {},
    isLoading: false
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
            console.log('qq')
            return state
        }
    }
}, initialState)

// https://github.com/SheetJS/js-xlsx/issues/285#issuecomment-240680073

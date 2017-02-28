import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    get: createAction('GET_INTERNLIST', Api.Intern.get),
    setLoading: createAction('SET_LOADING', Api.Intern.setLoading)
}

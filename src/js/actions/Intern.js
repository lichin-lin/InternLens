import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    getInternList: createAction('GET_INTERNLIST', Api.Intern.getInternList),
    getFavorite: createAction('GET_FAVORITE', Api.Intern.getFavorite),
    toggleFavorite: createAction('TOGGLE_FAVORITE', Api.Intern.toggleFavorite),
    setLoading: createAction('SET_LOADING', Api.Intern.setLoading)
}

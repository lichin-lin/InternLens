import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    getInternList: createAction('GET_INTERNLIST', Api.Intern.getInternList),
    getSinglePost: createAction('GET_SINGLEPOST', Api.Intern.getSinglePost),
    getAllFavorite: createAction('GET_FAVORITE', Api.Intern.getAllFavorite),
    getAllMessage: createAction('GET_ALLMESSAGE', Api.Intern.getAllMessage),
    toggleFavorite: createAction('TOGGLE_FAVORITE', Api.Intern.toggleFavorite),
    setLoading: createAction('SET_LOADING', Api.Intern.setLoading),
    getMessage: createAction('GET_MESSAGE', Api.Intern.getMessage),
    postMessage: createAction('POST_MESSAGE', Api.Intern.postMessage)
}

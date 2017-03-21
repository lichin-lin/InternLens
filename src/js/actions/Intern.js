import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    setLoading: createAction('SET_LOADING', Api.Intern.setLoading),

    getInternList: createAction('GET_INTERNLIST', Api.Intern.getInternList),
    getSinglePost: createAction('GET_SINGLEPOST', Api.Intern.getSinglePost),
    getAllMessage: createAction('GET_ALLMESSAGE', Api.Intern.getAllMessage),
    getAllFavorite: createAction('GET_FAVORITE', Api.Intern.getAllFavorite),
    toggleFavorite: createAction('TOGGLE_FAVORITE', Api.Intern.toggleFavorite),

    getMessage: createAction('GET_MESSAGE', Api.Intern.getMessage),
    postMessage: createAction('POST_MESSAGE', Api.Intern.postMessage),

    setNickName: createAction('SET_NICKNAME', Api.Intern.setNickName),
    getNickName: createAction('GET_NICKNAME', Api.Intern.getNickName)
}

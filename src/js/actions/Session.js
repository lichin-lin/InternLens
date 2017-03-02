import { createAction } from 'redux-actions'
import Api from 'js/api'
export default {
    FBLogin: createAction('FBLogin', Api.Session.FBLogin),
    FBLogout: createAction('FBLogout', Api.Session.FBLogout),
    CookieLogin: createAction('CookieLogin', function (data) {
        return new Promise(function (resolve, reject) {
            resolve(data)
        })
    })
}

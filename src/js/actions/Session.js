import { createAction } from 'redux-actions'
import Api from 'js/api'
export default {
    FBLogin: createAction('FBLogin', Api.Session.FBLogin),
    FirebaseRedirection: createAction('FirebaseRedirection', Api.Session.FirebaseRedirection),
    GoogleLogin: createAction('GoogleLogin', Api.Session.GoogleLogin),
    AuthLogout: createAction('AuthLogout', Api.Session.AuthLogout),
    CookieLogin: createAction('CookieLogin', function (data) {
        return new Promise(function (resolve, reject) {
            resolve(data)
        })
    })
}

import firebase from 'firebase'

export default {
    FBLogin: function (data) {
        var provider = new firebase.auth.FacebookAuthProvider()
        return firebase.auth().signInWithRedirect(provider)
    },
    FBRedirection: function () {
        return firebase.auth().getRedirectResult().then(function (authData) {
            console.log(authData)
            return authData.user
        }).catch(function (error) {
            console.log(error)
        })
    },
    FBLogout: function (data) {
        return firebase.auth().signOut()
    },
    GoogleLogin: function (data) {
        var provider = new firebase.auth.GoogleAuthProvider()
        return firebase.auth().signInWithPopup(provider)
    }
}

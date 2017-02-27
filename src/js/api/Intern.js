import firebase from 'firebase'

export default {
    get: () => {
        return firebase.database().ref('/list').once('value').then(function (snapshot) {
            return snapshot.val()
        })
    }
}

import firebase from 'firebase'

export default {
    get: (startIndex, endIndex) => {
        startIndex = startIndex.toString()
        endIndex = endIndex.toString()
        return firebase.database().ref('/list').orderByKey().startAt(startIndex).endAt(endIndex).once('value').then(function (snapshot) {
            return snapshot.val()
        })
    },
    setLoading: () => {
        return new Promise(
            (resolve, reject) => {
                resolve(true)
            }
        )
    }
}

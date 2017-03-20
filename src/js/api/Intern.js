import firebase from 'firebase'

export default {
    getInternList: (startIndex, endIndex) => {
        startIndex = startIndex.toString()
        endIndex = endIndex.toString()
        console.log(startIndex, endIndex)
        return firebase.database().ref('/list').orderByKey().startAt(startIndex).endAt(endIndex).once('value').then(function (snapshot) {
            return snapshot.val()
        })
    },
    getSinglePost: (id) => {
        id = id - 1
        return firebase.database().ref('/list/' + id).once('value').then(function (snapshot) {
            console.log(snapshot.val())
            return snapshot.val()
        })
    },
    getAllFavorite: () => {
        return firebase.database().ref('/favoriteMap').orderByKey().once('value').then(function (snapshot) {
            return snapshot.val()
        })
    },
    getAllMessage: () => {
        return firebase.database().ref('/messageMap').orderByKey().once('value').then(function (snapshot) {
            return snapshot.val()
        })
    },
    toggleFavorite: (postId, userId) => {
        let temp = []
        let targetIndex = -1
        return firebase.database().ref('/favoriteMap').orderByKey().once('value').then(function (snapshot) {
            temp = snapshot.val()
            snapshot.val().map((el, id) => {
                if (postId.toString() === el.postId.toString() && userId.toString() === el.userId.toString()) {
                    console.log('get target! ', id)
                    targetIndex = id
                    temp.splice(targetIndex, 1)
                }
            })
        })
        .then(() => {
            if (targetIndex < 0) {
                // not found need update
                temp.push({'postId': postId, 'userId': userId})
            }
        })
        .then(() => {
            firebase.database().ref('/favoriteMap').set(temp)
        })
    },
    setLoading: () => {
        return new Promise(
            (resolve, reject) => {
                resolve(true)
            }
        )
    },
    getMessage: (id) => {
        console.log('get ', id)
        return firebase.database().ref('/messageMap').orderByChild('postId').equalTo(id.toString()).once('value').then(function (snapshot) {
            console.log('in api get message: ', snapshot.val())
            return snapshot.val()
        })
    },
    postMessage: (msg) => {
        console.log(msg)
        let currentTimeStamp = Math.floor(new Date())
        msg['sendTime'] = currentTimeStamp
        return firebase.database().ref('/messageMap').push().set({
            ...msg
        })
    }
}

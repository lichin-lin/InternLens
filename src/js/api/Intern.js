import firebase from 'firebase'
import _ from 'lodash'

export default {
    getInternList: (startIndex, endIndex) => {
        startIndex = startIndex.toString()
        endIndex = endIndex.toString()
        // console.log(startIndex, endIndex)
        return firebase.database().ref('/list').orderByKey().startAt(startIndex).endAt(endIndex).once('value').then(function (snapshot) {
            let returnArr = _.reverse(snapshot.val())
            return returnArr
        })
    },
    getSinglePost: (id) => {
        id = id - 1
        return firebase.database().ref('/list/' + id).once('value').then(function (snapshot) {
            return snapshot.val()
        })
    },
    getAllFavorite: () => {
        return firebase.database().ref('/favoriteMap').orderByKey().once('value').then(function (snapshot) {
            return snapshot.val()
        })
    },
    getUserFavorite: (id) => {
        return firebase.database().ref('/favoriteMap').orderByChild('userId').equalTo(id.toString()).once('value').then(function (snapshot) {
            // console.log('[favorite] get single: ', id, ' val: ', snapshot.val())
            return snapshot.val()
        })
    },
    getAllMessage: () => {
        return firebase.database().ref('/messageMap').orderByKey().once('value').then(function (snapshot) {
            return snapshot.val()
        })
    },
    getUserMessage: (id) => {
        return firebase.database().ref('/messageMap').orderByChild('userId').equalTo(id.toString()).once('value').then(function (snapshot) {
            // console.log('[message] get single: ', id, ' val: ', snapshot.val())
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
                    // console.log('get target and cancel! ', id)
                    targetIndex = id
                    temp.splice(targetIndex, 1)
                }
            })
        })
        .then(() => {
            if (targetIndex < 0) {
                // not found need update
                // console.log('no target and add!')
                temp.push({'postId': postId, 'userId': userId})
            }
        })
        .then(() => {
            firebase.database().ref('/favoriteMap').set(temp)
        })
    },
    checkFavorite: (postId, userId) => {
        // console.log('in action: checkFavorite: ', postId, userId)
        let isFound = false
        return firebase.database().ref('/favoriteMap').orderByChild('postId').equalTo(postId.toString()).once('value').then(function (snapshot) {
            _.map(snapshot.val(), (el, id) => {
                // console.log('check list: ', el.postId, ', ', el.userId)
                if (el.postId === postId && el.userId === userId) {
                    // console.log('## found!')
                    isFound = true
                    return isFound
                }
                return false
            })
            return isFound
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
        // console.log('get ', id)
        return firebase.database().ref('/messageMap').orderByChild('postId').equalTo(id.toString()).once('value').then(function (snapshot) {
            // console.log('in api get message: ', snapshot.val())
            return snapshot.val()
        })
    },
    postMessage: (msg) => {
        // console.log(msg)
        let currentTimeStamp = Math.floor(new Date())
        msg['sendTime'] = currentTimeStamp
        return firebase.database().ref('/messageMap').push().set({
            ...msg
        })
    },
    setNickName: (uid, newname) => {
        // console.log(uid, newname)
        let postData = {
            uid: uid,
            userName: newname
        }
        let updates = {}
        updates['/nameMap/' + uid] = postData
        return firebase.database().ref().update(updates)
    },
    getNickName: (uid) => {
        return firebase.database().ref('/nameMap/' + uid).once('value').then(function (snapshot) {
            // console.log('in get nickname: ', snapshot.val())
            return snapshot.val()['userName']
        })
    }
}

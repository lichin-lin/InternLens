import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactFirebase } from 'redux-react-firebase'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

function configureStore () {
    const middleware = [thunk, promiseMiddleware]

    const config = {
        apiKey: 'AIzaSyAXmubiz-Iu_Jgz6RQQTUFHouzU6M4GzOc',
        authDomain: 'internlens-3c5b7.firebaseapp.com',
        databaseURL: 'https://internlens-3c5b7.firebaseio.com',
        storageBucket: 'internlens-3c5b7.appspot.com',
        messagingSenderId: '892753168254'
    }

    const finalCreateStore = compose(
        reduxReactFirebase(config),
        applyMiddleware(...middleware),
        DevTools.instrument(),
        window.devToolsExtensio ? window.devToolsExtension() : f => f
    )(createStore)

    const store = finalCreateStore(rootReducer)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore()

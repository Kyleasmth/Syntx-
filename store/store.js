import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import weatherReducers from '../reducers/weatherReducer'

const reducer = combineReducers ({ weatherReducers })

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store
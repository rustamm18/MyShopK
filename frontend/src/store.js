import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({})
const intialState = {}
const middleware = [thunk]
const store = createStore(
                    reducer, 
                    intialState,
                    applyMiddleware(...middleware)
                    )

export default store
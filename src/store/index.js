import { createStore, applyMiddleware } from 'redux';  
import { routerMiddleware, } from 'react-router-redux'


import logger from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from '../reducers'

import history from '../component/History'
// Apply the middleware to the store 
const middleware = routerMiddleware(history) //dispatch 触发 history

let store = createStore(reducer,applyMiddleware(thunk,middleware,logger));
export default store;
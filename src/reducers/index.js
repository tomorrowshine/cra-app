import { combineReducers } from 'redux'
import { leaveWordFun } from '../containers/leaveWord/reducer';
import { routerReducer } from 'react-router-redux'


const todoApp = combineReducers({
   leaveWord:leaveWordFun,
   routing: routerReducer
})

export default todoApp
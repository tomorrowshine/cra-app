import { combineReducers } from 'redux'
import { VideoFun } from '../containers/video/reducer';
import { leaveWordFun } from '../containers/leaveWord/reducer';
import { routerReducer } from 'react-router-redux'


const todoApp = combineReducers({
   betInfo:VideoFun,
   leaveWord:leaveWordFun,
   routing: routerReducer
})

export default todoApp
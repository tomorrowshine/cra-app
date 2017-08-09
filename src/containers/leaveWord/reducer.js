import {ADD,LIST,DELETE} from './action'
import initState from '../../reducers/initState';
// 
//  reducer.js
//  <project>
//  书写 调度数据给组件mapStateToProps
//  Created by licheng09 on 2017-06-23.
//  Copyright 2017 licheng09. All rights reserved.
// 

export function leaveWordFun(state =  initState.leaveWord, action) {
	switch(action.type) {
		case ADD:
			return state;
		case LIST:
			return action.payload;
		case DELETE:
			return state;
		default:
			return state
	}
}
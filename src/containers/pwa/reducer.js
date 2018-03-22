import {THUNK_request} from './action'
import initState from '../../reducers/initState';

export function VideoFun(state = initState.betInfo, action) {
	switch(action.type) {
		case THUNK_request:
			return action.payload;
		default:
			return state
	}
}
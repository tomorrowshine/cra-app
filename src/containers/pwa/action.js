import request from '../../utils/request';
import config from '../../assets/config';

/*
 * action types
 */
export const THUNK_request = 'THUNK_request'

export function createThunkAction(payload) {
	return function(dispatch) {
		//异步数据
		request.get(config.baseUrl + "list",payload).then((result) => {
			dispatch({
				type: THUNK_request,
				payload: result
			})
		});
	}
}
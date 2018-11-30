import PouchDB from 'pouchdb';
import DateUtil from '../../utils/DateUtil';
import config from '../../assets/config';
var db = new PouchDB('cradb');

/*
 * action types
 */
export const ADD = 'ADD'
export const LIST = 'LIST'
export const DELETE = 'DELETE'
// 
//  action.js
//  <project>
//  书写action 请求数据
//  Created by licheng09 on 2017-06-23.
//  Copyright 2017 licheng09. All rights reserved.
// 

export function addWord(payload) {
	db.put({
		_id: Date.now().toString(),
		name: 'David',
		createTime:DateUtil.CreateTime(),
		text: payload
	});
	db.replicate.to(config.couchdb);
	return {
		type: ADD,
		payload: payload
	}
}
export function listWord() {
    db.replicate.from(config.couchdb);
	return function(dispatch) {
		db.allDocs({
			include_docs: true,
			attachments: true
		}).then(function(result) {
			result.rows.sort(function(){
				return 1;
			});
			dispatch({
				type: LIST,
				payload: result
			})
		}).catch(function(err) {
			console.log(err);
		});
	}
}
export function delWord(_id,_rev) {
	db.remove(_id, _rev);
	db.replicate.to(config.couchdb);
	return {
		type: DELETE
	}
}
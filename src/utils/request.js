function parseJSON(response) {
	return response.json();
}

function checkStatus(response) {
	if(response.status >= 200 && response.status < 300) {
		return response;
	}

    const error = new Error(response.statusText);
	error.response = response;
	throw error;
}
function handleData(data) {
	return {data:data};
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
var params={};
export default {
	get: function(url, options) {
		var params = "?";
		for(var key in options) {
			params += key + "=" + options[key]+"&";
		}
		return fetch(url + params, {
				method: "get",
				credentials: 'include'
			})
			.then(checkStatus)
			.then(parseJSON)
			.then(handleData)
			.catch(err => ({
				err
			}));
	},
	post: function(url, options) {
		return fetch(url, {
				method: "post",
				credentials: 'include',
				body: JSON.stringify(options)
			})
			.then(checkStatus)
			.then(parseJSON)
			.then(handleData)
			.catch(err => ({
				err
			}));
	},
	setParams:function(data){
		for(var k in data) {
			params[k] = data[k];
		}
	},
	clearParams:function(){
		params={};
	},
	getParams:function(){
		return params;
	}
}
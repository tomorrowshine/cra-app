var DateUtil = {
		CreateTime: function(sptime, sp) {
			sp = sp ? sp : '-';
			var tm = sptime?new Date(sptime):new Date();
			var year = tm.getFullYear();
			var month = (tm.getMonth() + 1) + '';
			var day = tm.getDate();
			month = month.length > 1 ? month : '0' + month;
			var hours = tm.getHours() > 9 ? tm.getHours() : '0' + tm.getHours();
			var minutes = tm.getMinutes() > 9 ? tm.getMinutes() : '0' + tm.getMinutes();
			var seconds = tm.getSeconds() > 9 ? tm.getSeconds() : '0' + tm.getSeconds();
			return year + sp + month + sp + day + ' ' + hours + ':' + minutes + ':' + seconds;
		},
		getThisTime: function(sp) {
			var tm = new Date();
			var year = tm.getFullYear();
			var month = tm.getMonth() + 1;
			var day = tm.getDate();
			var hours = tm.getHours();
			var minutes = tm.getMinutes();
			sp = sp === undefined ? '-' : sp;
			return(year + sp + month + sp + day + ' ' + hours + ':' + minutes);
		},
		getThisDay: function(sp, date) { //licheng 得到当天时间
			var tm = date || new Date();
			var year = tm.getFullYear();
			var month = tm.getMonth() + 1;
			if((month + '').length === 1) {
				month = '0' + month;
			}
			var day = tm.getDate();
			if((day + '').length === 1) {
				day = '0' + day;
			}
			sp = sp === undefined ? '-' : sp;
			return(year + sp + month + sp + day);
		},
		getPastdayDate: function(i) { //licheng 得到过去几天时间
			return DateUtil.getThisDay("-", new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * i));
		}
};
export default DateUtil;
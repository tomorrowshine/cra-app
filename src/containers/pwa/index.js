import React, { Component } from 'react';
import { createThunkAction } from './action'
import { connect } from 'react-redux'

//import SW,{Notify,WebCaches} from 'web-pwa';

import Header from '../../component/Header';
class App extends Component {
	
  render() {
      	let input
      	
//    		SW.register('sw.js');
//    		console.log(SW);
			    var tableName = 'prefetch-cache-v1';
//			    WebCaches.table(tableName).addRow('/app.js')
//			    .then(res=>{
//			        // res: 成功
//			    })
//			    Notify.request() // 请求推送权限
//			    .then(permission=>{
//			        // 用户同意
//			        Notify.show('villianhr','Hello Pwa')
//			        .onclick(event=>{
//			            event.close(); // 关闭当前 Notification
//			            Notify.focus(); // 聚焦窗口
//			        })
//			    })
    return (
    	<div className="App">
    	<Header/>
      </div>
		
    );
  }
}


function mapStateToProps(state, ownProps) {
//return {
//  id: ownProps.params.id,
//  filter: ownProps.location.query.filter
//};
  console.log(ownProps);
  return state;
}

export default connect(mapStateToProps)(App);

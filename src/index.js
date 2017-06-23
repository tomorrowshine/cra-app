import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import video  from './containers/video';
import leaveWord  from './containers/leaveWord';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store';

import { Router, Route,Switch } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import history from './component/History'
syncHistoryWithStore(history, store)//时光之旅
ReactDOM.render(
	<Provider store={store}>
    	<Router history={history}>
	      <Switch>
	         <Route exact path='/' component={App}/>
	         <Route exact path='/video' component={video}/>
	         <Route path='/leaveWord' component={leaveWord}/>
	      </Switch>
	    </Router>
	      
    </Provider>, document.getElementById('root'));
registerServiceWorker();
import React, { Component } from 'react';
import Link from './component/Link'

class App extends Component {
  render() {
  	var state={some:"留言"};
    return (
     		 <div>
            	  <Link to="leaveWord" name="留言" state={state}/>
            	  <br/>
            	  <Link to="list" name="list"/>
            </div>
    );
  }
}

export default App;

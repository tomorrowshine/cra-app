import React, { Component } from 'react';
import { createThunkAction } from './action'
import { connect } from 'react-redux'

import Header from '../../component/Header';
class App extends Component {
	
  render() {
      	let input
    return (
    	<div className="App">
    	<Header/>
        <div>
	      <form
	        onSubmit={e => {
	          e.preventDefault()
	          if (!input.value.trim()) {
	            return
	          }
	          this.props.dispatch(createThunkAction(input.value));
	          input.value = ''
	        }}
	      >
	        <input
	          ref={node => {
	            input = node
	          }}
	        />
	        <button type="submit">
	          Add Todo {this.props.betInfo.data.msg}
	        </button>
	      </form>
	    </div>
        
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

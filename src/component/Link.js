import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
class App extends PureComponent {
	handleClick=() => {
		this.props.dispatch(push({pathname:this.props.to, state: this.props.state}));
	}
  render() {
    return (
    	<a onClick={this.handleClick} href="javascript:void(0);">{this.props.name}</a>
    );
  }
}

export default connect()(App);

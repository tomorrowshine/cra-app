import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
class App extends PureComponent {
	
	handleClick = (e) => {
		if(this.props.to){
			this.props.dispatch(push({pathname:this.props.to, state: this.props.state}));
		}else{
			this.props.onClick(e);
		}

	}
  render() {
  	const {dispatch,onClick,name,to,state,...others} = this.props;
    return (
    	<span onClick={this.handleClick} {...others}>{this.props.name}</span>
    );
  }
}

export default connect()(App);

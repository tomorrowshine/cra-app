import React, {
	Component
} from 'react';
import { addWord,listWord,delWord } from './action'
import { connect } from 'react-redux'
import PouchDB from 'pouchdb';
import Header from '../../component/Header';
import config from '../../assets/config';
var db = new PouchDB('cradb');

class App extends Component {

	  componentDidMount() {
			db.replicate.to(config.couchdb);
			this.props.dispatch(listWord());
	  }
	  delDispatch=(_this) => {
		this.props.dispatch(delWord(_this.currentTarget.getAttribute("data-id"),_this.currentTarget.getAttribute("data-rev")));
		this.props.dispatch(listWord());
	}
	render() {
		let input
		return(
    	<div className="App">
	    		<Header/>
				<div>
			
	      <form
	        onSubmit={e => {
	          e.preventDefault()
	          if (!input.value.trim()) {
	            return
	          }
	          this.props.dispatch(addWord(input.value));
			  this.props.dispatch(listWord());
	          input.value = ''
	        }}
	      >
	        <input
	          ref={node => {
	            input = node
	          }}
	        />
	        <button type="submit">
	          Add Todo
	        </button>
	      </form>
	      {this.props.ownProps.some}
	      
	      {
	      		this.props.state.leaveWord.rows.map((item, index) => {
					return <div key={item.id} value={item.id}><h3 >{item.doc.name}:{item.doc.text} {item.doc.createTime}  <a onClick={this.delDispatch} data-id={item.doc._id}  data-rev={item.doc._rev} href="javascript:void(0);">删除</a></h3></div>
				})
	      
	      }
   	 </div>
    </div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		state:state,
		ownProps:ownProps.location.state||{}
	};
}

export default connect(mapStateToProps)(App);
import React from 'react';
import VirtualList from '../../component/VirtualList/VirtualList.js';

class Component extends React.Component {
	constructor (props) {
		super (props);
		let data=[];
		for(let i=0;i<1000;i++){
			data.push(i);
		}
		this.state = {
		    data:data
		}
	}
	
	componentDidMount () {
		
	}
	
    render() {
    	
        return (
            	
            <VirtualList dataSource={this.state.data}/>
        )
    }
}

export default Component;

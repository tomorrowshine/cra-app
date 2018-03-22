import React from 'react';
import './VirtualList.scss'

class Component extends React.Component {
	constructor (props) {
		super (props);
      	const {pageSize,dataSource,rowHeight}=this.props;
		
		this.state = {
		    data:dataSource,
		    visibleData:dataSource.slice(0, pageSize),
		    contentHeight:dataSource.length*rowHeight
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.updateVisibleData = this.updateVisibleData.bind(this);
		
	}
	
	componentDidMount () {
		
	}
	
	updateVisibleData(scrollTop) {
		  scrollTop = scrollTop || 0;
		  const visibleCount = Math.ceil(this.props.height / 30); // 取得可见区域的可见列表项数量
		  const start = Math.floor(scrollTop / 30); // 取得可见区域的起始数据索引
		  const end = start + visibleCount; // 取得可见区域的结束数据索引
		  var visibleData = this.state.data.slice(start, end); // 计算出可见区域对应的数据， 更新
		  this.setState({visibleData:visibleData});
		  this.refs.content.style.webkitTransform = `translate3d(0, ${ start * 30 }px, 0)`; // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
	}
	
	handleScroll(e){
		const scrollTop = e.target.scrollTop;
     	this.updateVisibleData(scrollTop);
	}
	
    render() {
      	const {height,className}=this.props;
		const cName=`VirtualList ${className}`;
        return (
            <div className={cName} style={{height:height}} onScroll={this.handleScroll}>
            	<div className="list-view-phantom " style={{height:this.state.contentHeight}}></div>
            	<div ref="content" className="list-view-content">
	            	{
	            		this.state.visibleData.map((item,i)=>{
	            			return <p key={i} className="list-view-item">{item}</p>
	            		})
	            	}
            	</div>	
            	
            </div>
        )
    }
}

Component.defaultProps={
    height:300,
    dataSource:[],
    rowHeight:30,
    pageSize:10,
    className:"demo"
}

export default Component;

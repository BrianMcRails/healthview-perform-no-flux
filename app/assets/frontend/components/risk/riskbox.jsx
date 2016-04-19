import React from 'react';
import RisksList from './riskslist';

var RiskBox = React.createClass({
	loadRisksFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
		this.loadRisksFromServer();
		setInterval(this.loadRisksFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className='container'>
				<RisksList data={this.state.data} />
			</div>
		);
	}	
});
export default RiskBox;
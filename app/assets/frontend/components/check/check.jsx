import React from 'react';


var Check = React.createClass({
	checkClasses: function(check_status) {
		return (check_status ? "'checked'" : null);
	},
	render: function(){
		return (
			<p>
			<input type="checkbox" ref={this.props.id} className="filled-in" 
			id={this.props.id} checked={this.checkClasses(this.props.check_status)} />
      		<label for={this.props.id}>{this.props.check_name}</label>
      		<time>  {this.props.formattedDate}</time>
      		</p>
		);
	}
});

export default Check;
import React from 'react';

var Risk = React.createClass({

	render: function(){
		return (
			<li className="collection-item">
            <p>{this.props.risk_score_title}</p>
            <p>{this.props.risk_percent}</p>
     		<time>Last updated: {this.props.formattedDate}</time>
    		</li>
		);
	}
});

export default Risk;
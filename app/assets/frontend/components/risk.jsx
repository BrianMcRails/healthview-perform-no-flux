import React from 'react';
import { OverlayTrigger, Popover, Button, ButtonToolbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

var Risk = React.createClass({
	riskWeight: function(weight){
		switch (weight){
			case 'Low':
			return("success");
			break;
			case 'Med':
			return("warning");
			break;
			case 'High':
			return("danger");
			break;
			default:
			return("default");
			break;
		};
	},
	render: function(){
		return (
			<Col sm={6} md={3}>
            	<p>{this.props.risk_score_title}</p>
            	<OverlayTrigger trigger="hover" placement="right" 
            	overlay={<Popover id= {this.props.id} title={this.props.risk_score_title}>Risk is <strong>{this.props.risk_weight}.</strong>
            		{this.props.risk_comment}</Popover>}>
      			<Button bsStyle={this.riskWeight(this.props.risk_weight)}>{this.props.risk_percent}</Button>
    			</OverlayTrigger><br />
     			<time>Last updated: {this.props.formattedDate}</time>
    		</Col>
		);
	}
});

export default Risk;
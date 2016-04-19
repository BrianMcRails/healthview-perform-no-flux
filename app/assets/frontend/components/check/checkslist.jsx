import React from 'react';
import Check from './check';
import { Grid, Row, Col } from 'react-bootstrap';

var ChecksList = React.createClass({
	render: function(){
		var checkNodes = this.props.data.map(function(check){
			check.formattedDate = moment(check.updated_at).fromNow();
			return(
				<Check key={check.id} {...check} />
				);
		});
		return (
			<div className="card-panel">
				<p className="sectionHeader">Pre-procedure Checklist</p>
				<form action='#'>
				<Grid fluid='true'>
					<Row className="show-grid">
					{checkNodes}
					</Row>
				</Grid>
				</form>
			</div>
			);
	}

});
export default ChecksList;
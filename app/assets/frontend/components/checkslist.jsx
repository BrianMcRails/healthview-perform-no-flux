import React from 'react';
import Check from './check';

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
				<p>Pre-procedure Checklist</p>
				<form action='#'>
					{checkNodes}
				</form>
			</div>
			);
	}

});
export default ChecksList;
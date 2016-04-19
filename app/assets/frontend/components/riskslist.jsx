import React from 'react';
import Risk from './risk';

var RisksList = React.createClass({
	render: function(){
		var riskNodes = this.props.data.map(function(risk){
			risk.formattedDate = moment(risk.updated_at).fromNow();
			return(
				<Risk key={risk.id} {...risk} />
				);
		});
		return (
			<div className="card-panel">
				<p>Risk Scores</p>
				<ul className="collection">
					{riskNodes}
				</ul>
			</div>
			);
	}

});
export default RisksList;
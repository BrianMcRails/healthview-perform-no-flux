import React from 'react';
import { Link } from 'react-router'; //since we used link, we need to import link property from router library
import RiskBox from './risk/riskbox';
import CheckBox from './check/checkbox';
import PatientBox from './patient/patientbox';


var Index = React.createClass({

	render() {
		return (
			<div className="container">
			<PatientBox url="/patients" />
			<CheckBox url="/pre_checks" pollInterval={10000} />
			<RiskBox url="/risks" pollInterval={10000} />
			</div>
		);
	}
});

module.exports = Index;
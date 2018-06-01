import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
	return _.round(_.sum(data)/data.length);
}

export default (props) => {

	const averageUnitLabelStyle = {
		color: props.color
	};

	return (
		<div>
			<Sparklines height={30} width={60} data={props.data}>
				<SparklinesLine color={props.color} style={{ strokeWidth: 0.5 }}/>
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div className="averageUnitLabel" style={averageUnitLabelStyle}>
				{average(props.data)} {props.unit}	
			</div>
		</div>
	);
}
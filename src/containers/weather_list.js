import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

	renderList(cityData){
		const cityName = cityData.city.name;
		const temps = cityData.list.map((weather)=>{return weather.main.temp;});
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
			<tr key={cityName}>
 				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart color="#EC7063" data={temps} unit="K"/></td>
				<td><Chart color="#5DADE2" data={pressures} unit="hPa"/></td>
				<td><Chart color="#58D68D" data={humidity} unit="%"/></td>
			</tr>
		);
	}

	render(){
		return(
			<table className="table table-hover chartTable">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderList)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}){
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
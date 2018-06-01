import React,{Component} from 'react';

export default class GoogleMap extends Component{

	componentDidMount(){	

		new window.google.maps.Map(document.getElementById('map'),{
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});

	}

	render(){
		return <div id="map"></div>;
	}

}
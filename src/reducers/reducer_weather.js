
import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
	
	switch(action.type){
		case FETCH_WEATHER:
			if(action.payload.response!=undefined && action.payload.response.data.cod=="404"){
				return state;	
			} 
			return [action.payload.data, ...state];
	}


	return state;
} 
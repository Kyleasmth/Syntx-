import {GET_LOCATIONS, GET_LOCATION_DETAILS} from '../actionTypes/weatherActiontypes'

const initialState = {
    locations: [],
    locationDetails:[]
}

const weatherReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case GET_LOCATIONS:
        return {...state,locations: action.payload }
        case GET_LOCATION_DETAILS:
        return {...state,locationDetails: action.payload }
        default:
        return state;
    }

}

export default weatherReducer;
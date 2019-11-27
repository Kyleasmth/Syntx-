import * as types from '../actionTypes/weatherActiontypes'

export const getWeather = () => {
    return(dispatch,getState) => {
        const address = 'http://api.openweathermap.org/data/2.5/group?id=5128638,2655603,2013465,2618425&units=metric&appid=e0f39d2fb5d1700fcedf016d78f6700f';
        fetch(address)
        .then(response => {
        return response.json();
        })
        .then(myJson => {
             dispatch({
                type: types.GET_LOCATIONS,
                payload: myJson.list,
            })
        });
    }
}
export const getWeatherDetails = (id) => {
    return(dispatch,getState) => {
        const address = 'http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&appid=e0f39d2fb5d1700fcedf016d78f6700f';
        fetch(address)
        .then(response => {
        return response.json();
        })
        .then(myJson => {
             dispatch({
                type: types.GET_LOCATION_DETAILS,
                payload: myJson.list,
            })
        });
    }
}
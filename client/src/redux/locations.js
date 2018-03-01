import axios from 'axios';

const locationUrl = '/locations/'

const locationsReducer = (locations = { data: [], loading: true }, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return {
                data: [...locations.data, action.data],
                loading: false
            }
        case 'EDIT_LOCATION':
            return {
                ...locations,
                data: locations.data.map((location, i) => {
                    if (i === action.index) {
                        return action.updatedLocation;
                    } else {
                        return location;
                    }
                })
            }
        case 'REMOVE_LOCATION':
            return {
                ...locations,
                data: locations.data.filter((location, i) => {
                    return i !== action.index;
                })
            }
        case 'GET_LOCATIONS':
            return {
                data: action.data,
                loading: false
            }
        default:
            return locations;
    }
}

export const addLocation = (location) => {
    return dispatch => {
        axios.post(locationUrl, location)
            .then(response => {
                let {data} = response
                console.log(data)
                dispatch({
                    type: 'ADD_LOCATION',
                    data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

}
export const getLocations = () => {
    return dispatch => {
        axios.get(locationUrl)
            .then(response => {
                let {data} = response
                dispatch({
                    type: 'GET_LOCATIONS',
                    data
                })
            })
    }
}
export const editLocation = (updatedLocation, id) => {
    return function (dispatch) {
        axios.put(locationUrl + id, updatedLocation)
            .then(response => {
                dispatch({
                    type: 'EDIT_LOCATION',
                    updatedLocation,
                    id
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
}
export const removeLocation = (id) => {
    return function (dispatch) {
        axios.delete(locationUrl + id, id)
            .then(response => {
                dispatch({
                    type: 'REMOVE_LOCATION',
                    id
                })
            })

    }
}

export default locationsReducer;
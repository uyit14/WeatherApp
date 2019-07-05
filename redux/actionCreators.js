import getTem from "../api/getTem";

export function startFetchData(){
    return {type: 'START_FETCH'};
}

export function fetchSuccess(cityName, temp){
    return {type: 'FETCH_SUCCESS', cityName, temp};
}

export function fetchFail(){
    return {type: 'FETCH_FAIL'};
}

export function fetchDataThunk(cityName){
    return dispatch => {
        dispatch(startFetchData());
        getTem(cityName)
        .then(temp => dispatch(fetchSuccess(cityName, temp)))
        .catch(() => dispatch(fetchFail()))
    }
}
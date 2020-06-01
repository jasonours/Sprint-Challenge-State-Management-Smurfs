import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const POST_SMURF = 'POST_SMURF';

export const getSmurf = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});

    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data});
    })
    .catch(error => {
        console.log(error);
        dispatch({type: FETCH_SMURF_FAIL});
    });
};

export const addSmurf  = newSmurfs => dispatch => {
    dispatch({type: POST_SMURF});

    axios
    .post('http://localhost:3333/smurfs', newSmurfs)
    .then(res => 
        console.log(res))
    .catch(error => 
        console.log(error))
};
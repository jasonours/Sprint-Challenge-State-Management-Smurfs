import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const POST_SMURF = 'POST_SMURF';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';

export const fetchData = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURF_START});
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(error => {
            console.log('Aww, SMURF!', error)
        })
    }
}

export const postData = (newName,newAge,newHeight) => {
    return dispatch => {
        dispatch({ type: POST_SMURF});
        axios
        .post('http://localhost:3333/smurfs',
            {
             name: newName,
             age: newAge,
             height: newHeight,
             id: Date.now()
            }
        )
        .then(res => {
            dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
        })
        .catch(error => {
            console.log('Aww, SMURF!', error)
        })
    }
}

export const deleteSmurf = id => {
    return dispatch => {
        axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(error => {
            alert('Aww, SMURF!', error)
        })
    }
}
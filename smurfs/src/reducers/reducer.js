import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, POST_SMURF } from '../actions'

const initialState = {
    smurf: [],
    error: "",
    isFetching: false,
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SMURF_SUCCESS: 
            return {
              ...state,
              isFetching: false,
              smurf: action.payload  
            };
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case POST_SMURF:
            return {
                ...state,
            };
        
        default:
            return state;
    }
}

export default smurfReducer;
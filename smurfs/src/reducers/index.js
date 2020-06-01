import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, POST_SMURF, POST_SMURF_SUCCESS } from '../actions'

const initialState = {
    isLoading: false,
    smurfs: [],
}

export const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_SMURF_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                smurfs: [
                    ...action.payload
                ],
                isLoading: false
            }

        case POST_SMURF:
            return {
                ...state,
                isLoading: true
            }

        case POST_SMURF_SUCCESS:
            return state

        default:
            return state;
    }
}
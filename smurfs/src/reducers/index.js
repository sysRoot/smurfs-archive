import { GET_SMURFS_START } from '../actions'
import { GET_SMURFS_SUCCESS } from '../actions'
import { GET_SMURFS_FAILURE } from '../actions'
import { ADD_SMURF_START } from '../actions'
import { ADD_SMURF_SUCCESS } from '../actions'
import { ADD_SMURF_FAILURE } from '../actions'

import { initialState } from '../state'


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_START: {
            return {
                ...state,
                error: ""
            };
        }
        case GET_SMURFS_SUCCESS: {
            return {
                ...state,
                error: "",
                smurfs: action.payload
            };
        }
        case GET_SMURFS_FAILURE: {
            return { ...state, error: action.payload };
        }
        case ADD_SMURF_START: {
            return {
                ...state,
                error: ""
            };
        }
        case ADD_SMURF_SUCCESS: {
            return {
                ...state,
                error: "",
                smurfs: [...state.smurfs, {name: action.payload.name, height: action.payload.height, age: action.payload.age, id: new Date()}]
            };
        }
        case ADD_SMURF_FAILURE: {
            return { ...state, error: action.payload };
        }
        default: {
            return state;
        }
    }
};
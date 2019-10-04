import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START });

    axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response);
            dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: GET_SMURFS_FAILURE, payload: error.response });
        });
};

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: ADD_SMURF_START });
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(response => {
            
            console.log(response);
            dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: error.response });
        });
};

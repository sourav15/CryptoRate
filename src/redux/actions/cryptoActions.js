import {
  FETCHING_DATA_REQUEST,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from "./Types";

export const fetchingDataRequest = () => ({ type: FETCHING_DATA_REQUEST });

export const fetchingDataSuccess = json => ({
  type: FETCHING_DATA_SUCCESS,
  payload: json
});

export const fetchingDataFailure = error => ({
  type: FETCHING_DATA_FAILURE,
  payload: error
});

export const fetchData = (type) => {
  return async dispatch => {
    dispatch(fetchingDataRequest());
    try {
      let response = await fetch("https://www.zebapi.com/api/v1/market/ticker-new/" + type + "/inr");
      let json = await response.json();
      dispatch(fetchingDataSuccess(json));
    } catch (error) {
      dispatch(fetchingDataFailure(error));
    }
  };
};


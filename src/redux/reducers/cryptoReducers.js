import {
  FETCHING_DATA_REQUEST,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from "../actions/Types";

const initialState = {
  isFetching: false,
  errorMessage: "",
  details: {}
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_DATA_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_DATA_SUCCESS:
      return { ...state, isFetching: false, details: action.payload };
    default:
      return state;
  }
};

export default cryptoReducer;

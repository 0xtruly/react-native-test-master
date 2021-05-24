import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './actionTypes';

const initialState = {
  fetch: {
    loading: false,
    loaded: false,
    error: false,
    userData: [],
    errorData: null,
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        fetch: {
          loading: true,
          loaded: false,
          userData: [],
          error: false,
          errorData: {},
        },
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetch: {
          loading: false,
          loaded: true,
          userData: payload,
          error: false,
          errorData: {},
        },
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        fetch: {
          loading: false,
          loaded: false,
          userData: [],
          error: true,
          errorData: payload,
        },
      };

    default:
      return state;
  }
};

export default userReducer;

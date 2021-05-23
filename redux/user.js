import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './constant';

const fetchUserRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUserSuccess = (payload) => ({
  payload,
  type: FETCH_USERS_SUCCESS,
});

const fetchUserError = (error) => ({
  payload: error,
  type: FETCH_USERS_ERROR,
});

const initializeFetchUserRequest = (page = 1) => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    axios({
      method: 'get',
      url: `https://reqres.in/api/users?${page}`,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchUserSuccess(res.data));
        }
      })
      .catch((error) => dispatch(fetchUserError(error.message)));
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }
};

const initialState = {
  fetch: {
    loading: false,
    loaded: false,
    userData: null,
    error: false,
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

export { initializeFetchUserRequest, userReducer };

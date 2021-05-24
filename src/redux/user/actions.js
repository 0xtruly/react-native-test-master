import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './actionTypes';

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

export {
  fetchUserRequest, fetchUserSuccess, fetchUserError,
};

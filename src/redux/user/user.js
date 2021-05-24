import axios from 'axios';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
} from './actions';

const initializeFetchUserRequest = (page) => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    axios({
      method: 'get',
      url: `https://reqres.in/api/users?page=${page}`,
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

export default initializeFetchUserRequest;

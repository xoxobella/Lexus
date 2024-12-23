// actions/authActions.js
// import {axios} from 'axios'
import axios from 'axios';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// Action to log in the user
export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

// Action to log out the user
export const logout = () => ({
  type: LOGOUT,
});

// Action to sign up the user
export const signup = (user) => ({
  type: SIGNUP,
  payload: user,
});

// Action to sign up the user
export const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signUpSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

// Thunk action for signing up
export const signUp = (userData) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const response = await axios.post('http://localhost:3000/profiles', userData);
    if (response.status !== 201) {
      throw new Error('Failed to create profile');
    }
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpFailure(error.response?.data?.message || error.message));
  }
};

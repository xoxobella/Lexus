// reducers/authReducer.js
import { LOGIN, LOGOUT, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './authActions';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, isAuthenticated: true, loading: false };
    case SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
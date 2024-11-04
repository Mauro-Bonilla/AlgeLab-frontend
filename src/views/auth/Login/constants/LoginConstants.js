export const LOGIN_ENDPOINTS = {
    GITHUB_LOGIN: 'auth/github/',
    GITHUB_CALLBACK: 'auth/github/callback/',
    LOGOUT: 'auth/logout/'
  };
  
  export const LOGIN_ACTIONS = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
  };
  
  export const LOGIN_MESSAGES = {
    LOGIN_SUCCESS: 'Successfully logged in',
    LOGIN_FAILURE: 'Login failed. Please try again.',
    LOGOUT_SUCCESS: 'Successfully logged out'
  };
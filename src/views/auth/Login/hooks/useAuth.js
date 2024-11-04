import { useState, useEffect } from 'react';
import axiosInstance from '../../../../utils';
import { LOGIN_ENDPOINTS } from '../constants/LoginConstants';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // Fetch user data if needed
    }
  }, []);

  const login = async (code) => {
    try {
      const response = await axiosInstance.get(`${LOGIN_ENDPOINTS.GITHUB_CALLBACK}?code=${code}`);
      const { jwt_token, user_data } = response.data;
      localStorage.setItem('token', jwt_token);
      setIsAuthenticated(true);
      setUser(user_data);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post(LOGIN_ENDPOINTS.LOGOUT);
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setUser(null);
      return true;
    } catch (error) {
      console.error('Logout failed:', error);
      return false;
    }
  };

  return { isAuthenticated, user, login, logout };
};

export default useAuth;
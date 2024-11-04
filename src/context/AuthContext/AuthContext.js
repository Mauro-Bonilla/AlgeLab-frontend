import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../../utils';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserInfo = async () => {
    try {
      const response = await axiosInstance.get('/api/user/');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    await fetchUserInfo();
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async () => {
    try {
      const response = await axiosInstance.get('/api/auth/github/');
      window.location.href = response.data.login_url;
    } catch (error) {
      console.error('Failed to get GitHub login URL:', error);
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post('/api/auth/logout/');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
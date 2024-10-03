// src/views/auth/Login/hooks/useLogin.js

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext/AuthContext';

const useLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, handleGitHubLogin } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('token', token);
      setUser({ token });
      // Remove token from URL and navigate to the protected route
      navigate('/anh-algelab/', { replace: true });
    }
  }, [location, navigate, setUser]);

  return { handleGitHubLogin };
};

export default useLogin;

import { useState } from 'react';

const useLogin = () => {
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      
      console.log('Logging in with:', email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return { login, error };
};

export default useLogin;
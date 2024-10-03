import { createContext, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import CustomAlert from '../../components/alerts/CustomAlert';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success', duration: 3000 });

  const showAlert = useCallback((message, type = 'success', duration = 3000) => {
    setAlert({ show: true, message, type, duration });
    if (duration !== null) {
      setTimeout(() => {
        setAlert({ show: false, message: '', type: 'success', duration: 3000 });
      }, duration);
    }
  }, []);

  const hideAlert = useCallback(() => {
    setAlert({ show: false, message: '', type: 'success', duration: 3000 });
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alert.show && <CustomAlert message={alert.message} type={alert.type} duration={alert.duration} />}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
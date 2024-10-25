import { createContext, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import CustomAlert from '../../components/alerts/CustomAlert';

// Define alert types as constants to prevent typos and enable better IDE support
export const ALERT_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// Make the object immutable
Object.freeze(ALERT_TYPES);

// Initial state
const initialAlertState = {
  show: false,
  message: '',
  type: ALERT_TYPES.SUCCESS,
  duration: 3000,
};

const AlertContext = createContext({
  showAlert: () => {},
  hideAlert: () => {},
  alert: initialAlertState,
});

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialAlertState);
  const [timeoutId, setTimeoutId] = useState(null);

  const hideAlert = useCallback(() => {
    setAlert(initialAlertState);
  }, []);

  const showAlert = useCallback((
    message,
    type = ALERT_TYPES.SUCCESS,
    duration = 3000
  ) => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    // Validate alert type
    if (!Object.values(ALERT_TYPES).includes(type)) {
      console.warn(`Invalid alert type: ${type}. Defaulting to success.`);
      type = ALERT_TYPES.SUCCESS;
    }

    setAlert({
      show: true,
      message,
      type,
      duration,
    });

    // Set up auto-hide if duration is provided
    if (duration !== null && duration > 0) {
      const newTimeoutId = setTimeout(() => {
        hideAlert();
        setTimeoutId(null);
      }, duration);
      setTimeoutId(newTimeoutId);
    }
  }, [hideAlert, timeoutId]);

  // Helper methods for common alert types
  const success = useCallback((message, duration) => 
    showAlert(message, ALERT_TYPES.SUCCESS, duration), [showAlert]);
  
  const error = useCallback((message, duration) => 
    showAlert(message, ALERT_TYPES.ERROR, duration), [showAlert]);
  
  const warning = useCallback((message, duration) => 
    showAlert(message, ALERT_TYPES.WARNING, duration), [showAlert]);
  
  const info = useCallback((message, duration) => 
    showAlert(message, ALERT_TYPES.INFO, duration), [showAlert]);

  return (
    <AlertContext.Provider 
      value={{ 
        showAlert, 
        hideAlert, 
        alert,
        success,
        error,
        warning,
        info,
      }}
    >
      {children}
      {alert.show && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          duration={alert.duration}
          onClose={hideAlert}
        />
      )}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// PropTypes definition for alerts
export const AlertPropTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(ALERT_TYPES)),
  duration: PropTypes.number,
};
import PropTypes from 'prop-types';
import { Snackbar, Alert as MuiAlert } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAlert = styled(MuiAlert)(({ theme, severity }) => ({
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  fontWeight: 500,
  backgroundColor: 'transparent',
  '& .MuiAlert-icon': {
    fontSize: '24px',
  },
  '& .MuiAlert-message': {
    fontSize: '16px',
  },
  ...(severity === 'success' && {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '& .MuiAlert-icon': {
      color: theme.palette.success.contrastText,
    },
  }),
  ...(severity === 'error' && {
    backgroundColor: theme.palette.error.main,
    color: '#ffffff',
    '& .MuiAlert-icon': {
      color: '#ffffff',
    },
  }),
  ...(severity === 'warning' && {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
    '& .MuiAlert-icon': {
      color: theme.palette.warning.contrastText,
    },
  }),
  ...(severity === 'info' && {
    backgroundColor: theme.palette.info.main,
    color: '#ffffff',
    '& .MuiAlert-icon': {
      color: '#ffffff',
    },
  }),
  // Hover state for close button
  '& .MuiAlert-action .MuiIconButton-root': {
    color: 'inherit',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
}));

const CustomAlert = ({ message, type, duration = 3000, onClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={true}
    autoHideDuration={duration}
    onClose={onClose}
    style={{
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: '90%',
      width: 'auto',
    }}
  >
    <StyledAlert 
      severity={type} 
      variant="filled"
      onClose={onClose}
    >
      {message}
    </StyledAlert>
  </Snackbar>
);

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

export default CustomAlert;
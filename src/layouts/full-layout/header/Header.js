import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  Typography,
  Avatar,
  Button,
} from '@mui/material';
import { darken, useTheme } from '@mui/material/styles';
import { useAuth } from '../../../context/AuthContext/AuthContext';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ sx, customClass, toggleSidebar, toggleMobileSidebar }) => {
  const [anchorEl4, setAnchorEl4] = useState(null);

  const theme = useTheme();

  const { user, logout } = useAuth();

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const displayName = user
    ? user.first_name || user.last_name
      ? `${user.first_name} ${user.last_name}`
      : user.username
    : '';

  return (
    <AppBar
      sx={{
        ...sx,
        backgroundColor: theme.palette.primary.main,
      }}
      elevation={0}
      className={customClass}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          size="large"
          sx={{
            display: {
              lg: 'flex',
              xs: 'none',
            },
            '&:hover': {
              backgroundColor: darken(theme.palette.primary.main, 0.3),
            },
          }}
        >
          <FeatherIcon
            icon="menu"
            width="20"
            height="20"
            style={{ color: '#ffffff' }}
          />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'flex',
            },
            '&:hover': {
              backgroundColor: darken(theme.palette.primary.main, 0.3),
            },
          }}
        >
          <FeatherIcon
            icon="menu"
            width="20"
            height="20"
            style={{ color: '#ffffff' }}
          />
        </IconButton>

        <Typography
          variant="h3"
          component="div"
          sx={{
            ml: 2,
            fontSize: {
              xs: '0.7rem',
              sm: '0.7rem',
              md: '1.25rem',
              lg: '1.5rem',
            },
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          AlgeLab : aprendizaje activo
        </Typography>

        <Box flexGrow={1} />

        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
          sx={{
            '&:hover': {
              backgroundColor: darken(theme.palette.primary.main, 0.5),
            },
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src={user && user.avatar_url ? user.avatar_url : undefined}
              alt={user && user.username ? user.username : 'user'}
              sx={{
                width: '30px',
                height: '30px',
              }}
            />
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex',
                },
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{
                  ml: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                  color: '#ffffff',
                }}
              >
                {displayName}
              </Typography>
              <FeatherIcon
                icon="chevron-down"
                width="20"
                height="20"
                style={{ color: '#ffffff' }}
              />
            </Box>
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          sx={{
            '& .MuiMenu-paper': {
              width: '385px',
              right: 0,
              top: '70px !important',
            },
            '& .MuiList-padding': {
              p: '30px',
            },
          }}
        >
          <Box sx={{ mb: 1 }}>
            <ProfileDropdown />
            <Button
              sx={{
                mt: 2,
                display: 'block',
                width: '100%',
                '&:hover': {
                  backgroundColor: darken(theme.palette.primary.main, 0.5),
                },
              }}
              variant="contained"
              color="primary"
              onClick={() => {
                handleClose4();
                logout();
              }}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  toggleSidebar: PropTypes.func.isRequired,
  toggleMobileSidebar: PropTypes.func.isRequired,
};

export default Header;
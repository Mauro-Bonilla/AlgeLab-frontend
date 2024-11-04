// src/layouts/full-layout/header/ProfileDropdown.js

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useAuth } from '../../../context/AuthContext/AuthContext';

const ProfileDropdown = () => {
  const { user } = useAuth(); // Get user from AuthContext

  const displayName = user
    ? user.first_name || user.last_name
      ? `${user.first_name} ${user.last_name}`
      : user.username
    : '';

  return (
    <Box>
      <Box
        sx={{
          pb: 3,
          mt: 3,
        }}
      >
        <Box display="flex" alignItems="center">
          <Avatar
            src={user && user.avatar_url ? user.avatar_url : undefined}
            alt={user && user.username ? user.username : 'user'}
            sx={{
              width: '90px',
              height: '90px',
            }}
          />
          <Box
            sx={{
              ml: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                lineHeight: '1.235',
              }}
            >
              {displayName}
            </Typography>
            <Typography color="textSecondary" variant="h6" fontWeight="400">
              Estudiante
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDropdown;

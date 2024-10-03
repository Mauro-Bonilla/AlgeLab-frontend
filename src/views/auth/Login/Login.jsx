// src/views/auth/Login/Login.jsx

import React, { useEffect } from 'react';
import {
  Grid,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Spinner from '../../spinner/Spinner';
import { darken } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/container/PageContainer';
import LogoIcon from '../../../layouts/full-layout/logo/LogoIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAuth } from '../../../context/AuthContext/AuthContext';

const Login = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const isSmScreen = useMediaQuery(theme.breakpoints.only('sm'));
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/anh-algelab');
    }
  }, [user, navigate]);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return null;
  }

  const loginFormStyles = {
    container: {
      minHeight: '80vh',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    formBox: {
      backgroundColor: '#ffffff',
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
      width: '100%',
      maxWidth: { xs: '100%', sm: '450px', md: '500px' },
      margin: 'auto',
    },
    submitButton: {
      py: { xs: 1.5, sm: 2 },
      fontSize: { xs: '0.875rem', sm: '1rem' },
      '&:hover': {
        backgroundColor: darken(theme.palette.primary.main, 0.2),
      },
    },
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Grid container sx={loginFormStyles.container}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Box sx={loginFormStyles.formBox}>
            <Box sx={{ mb: { xs: 2, sm: 4 }, textAlign: 'center' }}>
              <LogoIcon />
            </Box>
            <Typography
              variant={isXsScreen ? 'h5' : isSmScreen ? 'h4' : 'h3'}
              fontWeight="700"
              sx={{ mb: { xs: 2, sm: 3 }, textAlign: 'center' }}
            >
              Plataforma de aprendizaje AlgeLab
            </Typography>
            <Button
              onClick={login}
              variant="outlined"
              size={isXsScreen ? 'medium' : 'large'}
              fullWidth
              startIcon={<GitHubIcon />}
              sx={{
                ...loginFormStyles.submitButton,
                color: 'black',
                borderColor: 'black',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  borderColor: 'black',
                },
              }}
            >
              Iniciar sesión con GitHub
            </Button>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Login;

import React from 'react';
import {
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { darken } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CustomCheckbox from "../../../components/forms/custom-elements/CustomCheckbox";
import CustomTextField from "../../../components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../../components/forms/custom-elements/CustomFormLabel";
import PageContainer from "../../../components/container/PageContainer";
import LogoIcon from "../../../layouts/full-layout/logo/LogoIcon";
import useAuth from './hooks/useAuth';
import useForm from './hooks/useForm';
import useLogin from './hooks/useLogin';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const { values, handleChange } = useForm({ email: '', password: '' });
  const { login, error } = useLogin();
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const isSmScreen = useMediaQuery(theme.breakpoints.only('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.only('md'));

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values.email, values.password);
  };

  const handleGitHubLogin = () => {
    // Implement GitHub OAuth login logic here
    console.log("GitHub login clicked");
  };

  const loginFormStyles = {
    container: {
      minHeight: "80vh",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    formBox: {
      backgroundColor: "#ffffff",
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
      width: '100%',
      maxWidth: { xs: '100%', sm: '450px', md: '500px' },
      margin: 'auto',
    },
    optionsBox: {
      display: "flex",
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: { xs: 'flex-start', sm: 'center' },
      justifyContent: "space-between",
      mb: 3,
    },
    forgotPassword: {
      textDecoration: "none",
      color: theme.palette.primary.main,
      marginTop: { xs: theme.spacing(1), sm: 0 },
      fontSize: { xs: '0.875rem', sm: '1rem' },
    },
    submitButton: {
      py: { xs: 1.5, sm: 2 },
      fontSize: { xs: '0.875rem', sm: '1rem' },
      "&:hover": {
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
            <Typography variant={isXsScreen ? "h5" : isSmScreen ? "h4" : "h3"} fontWeight="700" sx={{ mb: { xs: 2, sm: 3 }, textAlign: 'center' }}>
              Plataforma de aprendizaje AlgeLab
            </Typography>
            <form onSubmit={handleSubmit}>
              <CustomFormLabel htmlFor="email" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Usuario</CustomFormLabel>
              <CustomTextField
                id="email"
                name="email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={values.email}
                onChange={handleChange}
                inputProps={{ style: { fontSize: isXsScreen ? '0.875rem' : '1rem' } }}
              />
              <CustomFormLabel htmlFor="password" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Contraseña</CustomFormLabel>
              <CustomTextField
                id="password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={values.password}
                onChange={handleChange}
                inputProps={{ style: { fontSize: isXsScreen ? '0.875rem' : '1rem' } }}
              />
              <Box sx={loginFormStyles.optionsBox}>
                <FormGroup>
                  <FormControlLabel
                    control={<CustomCheckbox defaultChecked />}
                    label="Recordar dispositivo"
                    sx={{ '& .MuiFormControlLabel-label': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
                  />
                </FormGroup>
                <Typography
                  component={Link}
                  to="/auth/reset-password"
                  sx={loginFormStyles.forgotPassword}
                >
                  ¿Olvidaste la contraseña?
                </Typography>
              </Box>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size={isXsScreen ? "medium" : "large"}
                fullWidth
                sx={loginFormStyles.submitButton}
                href='/anh-algelab'
              >
                Iniciar Sesión
              </Button>
            </form>
            <Divider sx={{ my: { xs: 2, sm: 3 } }}>O</Divider>
            <Button
              onClick={handleGitHubLogin}
              variant="outlined"
              size={isXsScreen ? "medium" : "large"}
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
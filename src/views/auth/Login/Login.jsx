import React from 'react';
import {
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Box,
  Divider,
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
import { loginFormStyles } from './styles/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const { values, handleChange } = useForm({ email: '', password: '' });
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values.email, values.password);
  };

  const handleGitHubLogin = () => {
    // Implement GitHub OAuth login logic here
    console.log("GitHub login clicked");
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Grid container sx={loginFormStyles.container}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box sx={loginFormStyles.formBox}>
            <Box sx={{ mb: 4 }}>
              <LogoIcon />
            </Box>
            <Typography variant="h1" fontWeight="700" sx={{ mb: 2 }}>
              Plataforma de aprendizaje AlgeLab
            </Typography>
            <form onSubmit={handleSubmit}>
              <CustomFormLabel htmlFor="email">Usuario</CustomFormLabel>
              <CustomTextField
                id="email"
                name="email"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={values.email}
                onChange={handleChange}
              />
              <CustomFormLabel htmlFor="password">Contraseña</CustomFormLabel>
              <CustomTextField
                id="password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={values.password}
                onChange={handleChange}
              />
              <Box sx={loginFormStyles.optionsBox}>
                <FormGroup>
                  <FormControlLabel
                    control={<CustomCheckbox defaultChecked />}
                    label="Recordar dispositivo"
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
                size="large"
                fullWidth
                sx={loginFormStyles.submitButton}
                href='/anh-algelab'
              >
                Iniciar Sesión
              </Button>
            </form>
            <Divider sx={{ my: 3 }}>O</Divider>
            <Button
              onClick={handleGitHubLogin}
              variant="outlined"
              size="large"
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
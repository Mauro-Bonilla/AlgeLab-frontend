import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PageContainer from "../../components/container/PageContainer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const isSmScreen = useMediaQuery(theme.breakpoints.only('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.only('md'));

  const handleNavigateClick = () => {
    navigate("/anh-algelab/laboratorios/");
  };

  return (
    <PageContainer
      title="AlgeLab"
      sx={{
        height: "80vh",
        width: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          pt: { xs: 2, sm: 3, md: 4, lg: 5 },
        }}
      >
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} md={10} lg={10}>
            <Card
              elevation={3}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: { xs: 2, sm: 4, md: 6, lg: 8 },
                minHeight: { xs: "auto", md: "100px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mr: { md: 4, lg: 8 },
                maxWidth: { xs: "100%", sm: "90%", md: "85%", lg: "1200px" },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    mb: { xs: 1, sm: 1.5, md: 2, lg: 3 },
                    mt: { xs: -2, sm: -3, md: -4, lg: -6 },
                    fontSize: { xs: "16px", sm: "18px", md: "22px", lg: "28px" },
                    letterSpacing: { xs: 0.5, sm: 1, md: 1.5 },
                  }}
                >
                  Explore AlgeLab
                </Typography>
                <Typography
                  sx={{
                    mb: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
                    fontWeight: 1000,
                    textShadow: "1px 0 0 currentColor",
                    lineHeight: { xs: 1.1, sm: 1.2, md: 1.1 },
                    fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "72px" },
                    letterSpacing: { xs: -0.5, sm: -1, md: -1.5 },
                  }}
                >
                  Complemente el aprendizaje con AlgeLab
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 2, sm: 3, md: 4, lg: 5 },
                    fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "22px" },
                    maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "80%" },
                    lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                  }}
                >
                  Transforme su comprensión del álgebra lineal.
                  Laboratorios virtuales y lecturas interactivas para una experiencia inmersiva.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleNavigateClick}
                  size={isXsScreen ? "medium" : "large"}
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "20px" },
                    py: { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 },
                    px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
                    minWidth: { xs: "120px", sm: "140px", md: "160px", lg: "180px" },
                  }}
                >
                  Empiece su exploración matemática
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            {/* Este elemento de la cuadrícula se mantiene para fines de diseño, pero está vacío */}
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  Typography,
  Avatar,
  Button,
  Drawer,
} from "@mui/material";
import PropTypes from "prop-types";
// Dropdown Component
import ProfileDropdown from "./ProfileDropdown";
import userimg from "../../../assets/images/users/user-1.svg";
import { darken, useTheme } from "@mui/material/styles";

const Header = ({ sx, customClass, toggleSidebar, toggleMobileSidebar }) => {
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [showDrawer2, setShowDrawer2] = useState(false);
  

  const theme = useTheme();

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };


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
              lg: "flex",
              xs: "none",
            },
            "&:hover": {
              backgroundColor: darken(theme.palette.primary.main,0.3),
            },
          }}
        >
          <FeatherIcon
            icon="menu"
            width="20"
            height="20"
            style={{ color: "#ffffff" }}
          />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
            "&:hover": {
              backgroundColor: darken(theme.palette.primary.main,0.3),
            },
          }}
        >
          <FeatherIcon
            icon="menu"
            width="20"
            height="20"
            style={{ color: "#ffffff" }}
          />
        </IconButton>


        <Drawer
          anchor="top"
          open={showDrawer2}
          onClose={handleDrawerClose2}
          sx={{
            "& .MuiDrawer-paper": {
              padding: "15px 30px",
            },
          }}
        >
          <Box display="flex" alignItems="center">
            <Box sx={{ ml: "auto" }}>
              <IconButton
                color="inherit"
                sx={{
                  color: (theme) => theme.palette.grey.A200,"&:hover": {
                    backgroundColor: darken(theme.palette.primary.main,0.3),
                  },
                }}
                onClick={handleDrawerClose2}
              >
                <FeatherIcon icon="x-circle" />
              </IconButton>
            </Box>
          </Box>
        </Drawer>

        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              ml: 2,
              fontSize: {
                xs: "0.7rem",
                sm: "0.7rem",
                md: "1.25rem",
                lg: "1.5rem",
              },
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            Plataforma de aprendizaje - AlgeLab
          </Typography>

          <Box flexGrow={1} />

          <Box sx={{ ml: 3, display: "flex", flexDirection: "column" }}>
          </Box>
        </Box>

        <Button
          aria-label="menu" 
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
          sx={{
            "&:hover": {
             backgroundColor: darken(theme.palette.primary.main,0.5),
            },
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src={userimg}
              alt="user"
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{
                  ml: 1,
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                  color: "#ffffff",
                }}
              >
                Mauro Bonilla
              </Typography>
              <FeatherIcon
                icon="chevron-down"
                width="20"
                height="20"
                style={{ color: "#ffffff" }}
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
            "& .MuiMenu-paper": {
              width: "385px",
              right: 0,
              top: "70px !important",
            },
            "& .MuiList-padding": {
              p: "30px",
            },
          }}
        >
          <Box sx={{ mb: 1 }}>
            <ProfileDropdown />
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/anh-algelab/auth/login"
            >
              <Button
                sx={{
                  mt: 2,
                  display: "block",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: darken(theme.palette.primary.main,0.5),
                  },
                }}
                variant="contained"
                color="primary"
              >
                Cerrar sesión
              </Button>
            </Link>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Header;

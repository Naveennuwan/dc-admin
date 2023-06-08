import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { logout } from "../Redux/UserRedux/UserActions";

function DefaultLayout() {
  const dispatch = useDispatch();
  const [logoutDropDown, setLogoutDropDown] = useState(null);

  const openLogout = Boolean(logoutDropDown);

  const { userInfo } = useSelector((state) => state.userLogin);
  let navigate = useNavigate();

  const handleLogoutMenuClick = (event) => {
    setLogoutDropDown(event.currentTarget);
  };

  const logoutHandler = () => {
    dispatch(logout(navigate));
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container
            position="relative"
            maxWidth={false}
            sx={{ backgroundColor: "white" }}
          >
            <Toolbar style={{ color: "black" }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  mr: 5,
                }}
              >
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  Dental Clinic
                </Link>
              </Typography>
              <Typography
                variant="h6"
              // className={`${routeInfo ? "appbar__header__pagename" : ""}`}
              >
                {/* {routeInfo ? `${routeInfo}` : " "} */}
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "end",
                  mr: 5,
                }}
              >
                <Button
                  id="basic-button"
                  style={{ color: "black", fontSize: "1rem" }}
                >
                  <Link to="/master" style={{ textDecoration: "none" }}>
                    Master Management
                  </Link>
                </Button>
              </Box>

              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={{ mr: 1 }}
              />
              <Typography textAlign="center" sx={{ mr: 1 }}>
                {userInfo?.user.name}
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={handleLogoutMenuClick}
                aria-label="open drawer"
              >
                <MenuIcon></MenuIcon>
              </IconButton>
              <Menu
                id="basic-menu"
                open={openLogout}
                anchorEl={logoutDropDown}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={logoutHandler} style={{ color: "black" }}>
                    Logout
                  </MenuItem>
                </Link>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default DefaultLayout;

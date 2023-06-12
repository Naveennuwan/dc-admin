import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { logout } from "../Redux/UserRedux/UserActions";

function DefaultLayout() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  let navigate = useNavigate();

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

              <Typography textAlign="center" sx={{ mr: 2 }}>
                {userInfo?.user.name}
              </Typography>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={logoutHandler}
                aria-label="open drawer"
              >
                <Logout />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default DefaultLayout;

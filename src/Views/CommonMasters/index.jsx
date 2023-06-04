import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "#4caf50",
  justifyContent: "center",
  height: 90,
  lineHeight: "90px",
}));

function Master() {
  const routes = [
    // { id: 1, name: "Doctors", path: "doctor" },
    { id: 2, name: "Brands", path: "brand" },
    { id: 3, name: "Categories", path: "category" },
    { id: 4, name: "Suppliers", path: "supplier" },
    { id: 5, name: "Drugs", path: "drug" },
    { id: 6, name: "MasterData", path: "masterdata" },
    // {id:6,  name: "Custom", path: "pointinput" },
  ];

  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <Container sx={{ mt: 10 }}>
      <Paper variant="outlined" sx={{ borderRadius: "10px" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
            }}
          >
            {userInfo.user.user_type === 1 && (
              <>
                <Link to={`/doctor`} style={{ textDecoration: "none" }}>
                  <Item
                    elevation={8}
                    sx={{
                      m: 1,
                    }}
                  >
                    <h1>Doctors</h1>
                  </Item>
                </Link>
              </>
            )}
            {routes.map((route) => (
              <Link
                key={route.id}
                to={`/${route.path}`}
                style={{ textDecoration: "none" }}
              >
                <Item
                  elevation={8}
                  sx={{
                    m: 1,
                  }}
                >
                  <h1>{route.name}</h1>
                </Item>
              </Link>
            ))}
          </Box>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Master;

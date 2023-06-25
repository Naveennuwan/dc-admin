import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "#2196f3",
  justifyContent: "center",
  height: 120,
  lineHeight: "120px",
}));

function PatiantIndex() {

  const routes = [
    { id: 1, name: "Create Patiant", path: "create_patiant" },
    { id: 2, name: "View Patiants", path: "view_patiant" },
    { id: 3, name: "Patiant History", path: "patiant_history" },
  ];
  return (
    <Container sx={{ mt: 10 }}>
      <Paper variant="outlined" sx={{ borderRadius: "10px" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr" },
              gap: 2,
            }}
          >
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

export default PatiantIndex;

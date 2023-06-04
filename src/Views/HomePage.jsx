import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "#2196f3",
  justifyContent: "center",
  height: 120,
  lineHeight: "120px",
}));

function HomePage() {
  const [dateTime, setDateTime] = useState(new Date());
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  };

  const routes = [
    { id: 1, name: "Create Invoice", path: "invoice" },
    { id: 2, name: "Create Patiant", path: "patiant" },
    { id: 3, name: "Create Template", path: "template" },
    { id: 4, name: "Stock", path: "stock" },
    { id: 5, name: "Treatement Images", path: "image" },
    { id: 6, name: "SMS", path: "sms" },
  ];

  const currentDate = new Date().toLocaleDateString("en-US", options);
  const formattedTime = dateTime.toLocaleTimeString("en-US");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Container sx={{ mt: 10 }}>
      <Paper variant="outlined" sx={{ borderRadius: "10px" }}>
        <Typography
          variant="h6"
          textAlign="center"
          component="div"
          sx={{
            pt: 2,
          }}
        >
          {currentDate}
        </Typography>

        <Typography
          variant="h2"
          textAlign="center"
          component="div"
          sx={{
            pt: 2,
          }}
        >
          {formattedTime}
        </Typography>

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
            {routes.map((route) => (
              <Link key={route.id} to={`/${route.path}`} style={{ textDecoration: "none" }}>
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

export default HomePage;

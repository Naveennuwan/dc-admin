import { Card, CardContent, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

function GuestLayout() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container
        maxWidth="sm"
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          textAlign="center"
          variant="h3"
          fontFamily={"HG正楷書体-PRO"}
        >
          Dental Clinic
        </Typography>
        <Card
          sx={{
            width: "100%",
            borderRadius: "0.5rem",
            marginTop: "1.3rem",
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Outlet />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default GuestLayout;

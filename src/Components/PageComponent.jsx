import React from "react";
import Container from "@mui/material/Container";

export default function PageComponent({ children }) {
  return (
    <>
      <header>
        <Container
          position="relative"
          maxWidth={false}
          sx={{ backgroundColor: "#ADD8E6", mb: 3, boxShadow: 3 }}
        ></Container>
      </header>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}

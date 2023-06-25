import React from 'react'
import PageComponent from "../../Components/PageComponent";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <PageComponent>
      <Container>
        <Button type="button" variant= "contained" >
          <Link to={"/patiant"} style={{ textDecoration: "none" }}>
            Back
          </Link>
        </Button>
        <br/><br/>
        History
      </Container>
    </PageComponent>
  )
}

export default History
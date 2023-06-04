import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Templates from "./templates";
import CreateInvoice from "./CreateInvoice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fffde7",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Invoice = () => {
  const [items, setItems] = useState([]);
  return (
    <>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <CreateInvoice items={items} setItems={setItems} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Templates items={items} setItems={setItems} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Invoice;

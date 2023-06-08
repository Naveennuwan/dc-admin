import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CreateNew from "./CreateNew";
import TemplateTable from "./TemplateTable";
import { useDispatch } from "react-redux";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import { TreatementTypeList } from "../../Redux/TreatementTypeRedux/TreatementTypeActions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fffde7",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Template = () => {
  const dispatch = useDispatch();
  
  const [templateId, setTemplateId] = useState(null);

  useEffect(() => {
    dispatch(TreatementTypeList());
    dispatch(SetRoute("Treatement Template"));
  }, [dispatch]);
  return (
    <>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <CreateNew templateId={templateId}/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <TemplateTable setTemplateId={setTemplateId}/>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Template;

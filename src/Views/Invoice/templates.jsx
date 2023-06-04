import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./template.css";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import { TreatementTypeList } from "../../Redux/TreatementTypeRedux/TreatementTypeActions";
import { TreatementActiveList } from "../../Redux/TreatementRedux/TreatementActions";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "#4caf50",
  justifyContent: "center",
  height: 50,
  lineHeight: "20px",
}));

function Templates({ items, setItems }) {
  const dispatch = useDispatch();

  const AddItem = (item) => {
    setItems([
      ...items,
      {
        id: item.id,
        t_name: item.template_name,
      },
    ]);
  };

  const { TreatementType } = useSelector((state) => state.TreatementType);

  const { Treatement } = useSelector((state) => state.TreatementActive);

  useEffect(() => {
    dispatch(TreatementTypeList());
    dispatch(TreatementActiveList());
    dispatch(SetRoute("Create Invoice"));
  }, [dispatch]);

  return (
    <div className="container">
      {TreatementType.map((type) => (
        <div key={type.id}>
          <b>{type.template_type}</b>
          <div className="box">
            <div className="button-container">
              {Treatement.filter((tt) => tt.template_type_id === type.id).map(
                (route) => (
                  <Button
                    key={route.id}
                    variant="outlined"
                    defaultValue={route}
                    onClick={() => AddItem(route)}
                    sx={{ m: 0.5, fontSize: "1rem" }}
                  >
                    {route.template_name}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Templates;

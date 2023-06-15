import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./template.css";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import { TreatementTypeList } from "../../Redux/TreatementTypeRedux/TreatementTypeActions";
import { TreatementActiveList } from "../../Redux/TreatementRedux/TreatementActions";

function Templates({ items, setItems }) {
  const dispatch = useDispatch();

  const AddItem = (item) => {
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem) {
      const updatedItems = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        return i;
      });

      setItems(updatedItems);
    } else {
      setItems([
        ...items,
        {
          id: item.id,
          t_name: item.template_name,
          quantity: 1,
        },
      ]);
    }
  };

  const { TreatementType, loading: loading_types } = useSelector(
    (state) => state.TreatementType
  );

  const { Treatement, loading_treatements } = useSelector(
    (state) => state.TreatementActive
  );

  useEffect(() => {
    dispatch(TreatementActiveList());
    dispatch(TreatementTypeList());
    dispatch(SetRoute("Create Invoice"));
  }, [dispatch, loading_treatements]);

  return (
    <div className="container">
      {loading_types || loading_treatements ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {TreatementType.map((type) => (
            <div key={type.id}>
              <b>{type.template_type}</b>
              <div className="box">
                <div className="button-container">
                  {Treatement.filter(
                    (tt) => tt.template_type_id === type.id
                  ).map((route) => (
                    <Button
                      key={route.id}
                      variant="outlined"
                      defaultValue={route}
                      onClick={() => AddItem(route)}
                      sx={{ m: 0.5, fontSize: "1rem" }}
                    >
                      {route.template_name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Templates;

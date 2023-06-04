import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DataGrid, { Column, Editing, Paging } from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import { PatientAction } from "../../Redux/PatientRedux/PatientActions";
import {
  InvoiceRegister,
  InvoiceDetails,
} from "../../Redux/InvoiceRedux/InvoiceActions";
import { parseNumber } from "devextreme/localization";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateInvoice = ({ items, setItems }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [patient, setPatient] = useState(0);

  const { Patient } = useSelector((state) => state.Patient);
  const { total, discount } = useSelector((state) => state.InvoiceDetils);

  const user = JSON.parse(localStorage.getItem("userInfo"));



  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => items,
    remove: async (key) => {
      setItems(items.filter((item) => item.id !== key));
    },
  });

  const calculateTotalPrice = async () => {
    await dispatch(
      InvoiceDetails({
        templates: items,
        center_id: user.center,
      })
    );
  };

  const createInvoice = async () => {
    await dispatch(
      InvoiceRegister({
        patient_Id: patient,
        templates: items,
        center_id: user.center,
      })
    );
    handleClose();
  };

  useEffect(() => {
    dispatch(PatientAction());
    calculateTotalPrice();
  }, [dispatch, items]);

  return (
    <>
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={3}>
          <FormControl sx={{ m: 1, minWidth: 150, maxWidth: 150 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Patiant
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              onChange={(e) => {
                setPatient(e.target.value);
              }}
            >
              {Patient.filter((p) => p.patient_type_id === 2).map((p) => (
                <MenuItem value={p.id} key={p.id}>
                  {p.patient_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ m: 1, minHeight: 50, maxHeight: 50 }}
          >
            Create Invoice
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 style={{ textAlign: "center" }}>Confirm To Create Invoice?</h3>

          <FormControl sx={{ mt: 3, mr: 2, minWidth: 150, maxWidth: 150 }}>
            <Button variant="contained" color="success" onClick={createInvoice}>
              Yes
            </Button>
          </FormControl>
          <FormControl sx={{ mt: 3, mr: 2, minWidth: 150, maxWidth: 150 }}>
            <Button variant="contained" color="error" onClick={handleClose}>
              No
            </Button>
          </FormControl>
        </Box>
      </Modal>
      <div></div>
      <br />
      <div style={{ display: "flex" }}>
        <DataGrid
          dataSource={dataSource}
          keyExpr="id"
          showBorders={true}
          className="datagrid__max h-auto"
          allowColumnReordering={true}
          allowColumnResizing={true}
          showColumnLines={true}
          showRowLines={true}
          repaintChangesOnly={true}
          useIcons={true}
          rowAlternationEnabled={true}
        >
          <Paging enabled={false} />
          <Editing mode="popup" allowDeleting={true} />
          <Column
            dataField="t_name"
            dataType="string"
            caption="Treatement Name"
            width="maxWidth"
          />
        </DataGrid>
      </div>

      <p>Price: {total}</p>
      <p>Discount: {discount}</p>
      <p>Total Value: {(total - discount) > 0 ? <>{total - discount}</> : <>{0}</>}</p>
    </>
  );
};

export default CreateInvoice;

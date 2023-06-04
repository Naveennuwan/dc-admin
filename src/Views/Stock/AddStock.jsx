import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import DateBox from "devextreme-react/date-box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DrugList } from "../../Redux/DrugRedux/DrugActions";
import { StockRegister, StockLists } from "../../Redux/StockRedux/StockActions";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddStock = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [drugId, setDrugId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  const { success: regsuccess } = useSelector((state) => state.StockRegister);
  const { Drug } = useSelector((state) => state.Drug);

  async function SaveStock() {
    if (drugId === 0) {
      console.log("Please Seletc A Drug");
    } else if (quantity === 0) {
      console.log("Please Enter Quantity");
    } else if (price === 0) {
      console.log("Please Enter Price");
    } else if (date === 0) {
      console.log("Please Select A Date");
    } else {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      console.log(user.center);
      const temp = {
        product_id: drugId,
        expire_date: date,
        quantity: quantity,
        price: price,
        center_id: user.center,
      };
      console.log(temp);
      await dispatch(StockRegister(temp));
      handleClose();
    }
  }

  useEffect(() => {
    dispatch(DrugList());
    dispatch(StockLists());
  }, [dispatch, regsuccess]);
  return (
    <>
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={10}></Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={handleOpen} sx={{ ml: 5 }}>
            Add Stock +
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
          <h3 style={{ textAlign: "center" }}>Add New Stock</h3>
          <Grid container sx={{ m: 1 }}>
            <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
              <InputLabel id="demo-simple-select-helper-label">Drug</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={drugId}
                fullWidth
                label="Age"
                onChange={(e) => {
                  setDrugId(e.target.value);
                }}
              >
                {Drug.map((d) => (
                  <MenuItem value={d.id}>{d.product}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
              <TextField
                id="outlined-number"
                label="Quantity"
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid container sx={{ m: 1 }}>
            <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
              <TextField
                id="outlined-basic"
                value={price}
                label="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid container sx={{ m: 1 }}>
            <FormControl sx={{ mt: 2, mr: 2, minWidth: 200, maxWidth: 200 }}>
              <DateBox
                label="Expire Date"
                format="yy/MM/DD"
                onValueChanged={(event) => {
                  if (event.value) {
                    setDate(moment(event.value).format("yy/MM/DD"));
                  }
                }}
              />
            </FormControl>
            <FormControl sx={{ mt: 3, mr: 2, minWidth: 200, maxWidth: 200 }}>
              <Button variant="contained" onClick={SaveStock}>
                Save Stock
              </Button>
            </FormControl>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default AddStock;

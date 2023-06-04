import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PatientAction } from "../../Redux/PatientRedux/PatientActions";
import axios from "axios";

import * as api from "../../Redux/api";

const SMS = () => {
  const dispatch = useDispatch();
  const { Patient } = useSelector((state) => state.Patient);
  const [patient, setPatient] = useState("0705742090");
  const [text, SetText] = useState(null);

  async function handleChange(e) {
    const id = "94705742090";
    const pw = "5713";
    const to = "0705742090";

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Headers":
          "Origin, Content-Type, Accept, Authorization, X-Request-With",
      },
    };

    await axios
      .get(
        `https://www.textit.biz/sendmsg?id=${id}&pw=${pw}&to=${to}&text=${text}`,
        config
      )
      .then((response) => {
        // Handle the successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }

  useEffect(() => {
    dispatch(PatientAction());
  }, [dispatch]);
  return (
    <>
      <br />
      <Grid container spacing={1}>
        <FormControl sx={{ m: 1, minWidth: 150, maxWidth: 150 }}>
          <InputLabel id="demo-simple-select-helper-label">Patiant</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            // onChange={(e) => {
            //   setPatient(e.target.value);
            // }}
          >
            {Patient.filter((p) => p.patient_type_id === 2).map((p) => (
              <MenuItem value={p.patient_contact_no} key={p.id}>
                {p.patient_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, mr: 2, minWidth: 200, maxWidth: 200 }}>
          <TextField
            id="outlined-basic"
            label="Template Name"
            value={text}
            onChange={(e) => {
              SetText(e.target.value);
            }}
            variant="outlined"
          />
        </FormControl>

        <Button
          variant="contained"
          onClick={handleChange}
          color="success"
          sx={{ m: 1 }}
        >
          Send msg
        </Button>
      </Grid>
    </>
  );
};

export default SMS;

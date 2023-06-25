import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageComponent from "../../Components/PageComponent";
import { Container } from "@mui/system";
import {
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Button as DxButton } from "devextreme-react/button";
import { useParams } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import {
  PatientRegister,
  PatientDetails,
  PatientUpdate,
} from "../../Redux/PatientRedux/PatientActions";
import { PatientTypeAction } from "../../Redux/PatientTypeRedux/PatientTypeActions";
import { AlergyActiveList } from "../../Redux/AlergyRedux/AlergyActions";
import { DiseaseActiveList } from "../../Redux/DiseaseRedux/DiseaseActions";

const CreatePatient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const genderMaster = [{ gender: "Male" }, { gender: "Female" }];

  const { PatientType } = useSelector((state) => state.PatientType);
  const { Alergy } = useSelector((state) => state.AlergyActive);
  const { Disease } = useSelector((state) => state.DiseaseActive);

  const { loading: loadingRegister, success: regsuccess } = useSelector(
    (state) => state.PatientRegister
  );

  const { loading: loadingDetails, Patient: Details } = useSelector(
    (state) => state.PatientDetails
  );

  const { loading: loadingUpdate, success: successUpdate } = useSelector(
    (state) => state.PatientUpdate
  );

  const [name, setName] = useState(null);
  const [inCharge, setInCharge] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [type, setType] = useState(null);

  // Alergiescheckbox part
  const [checkedIdsAlergies, setCheckedIdsAlergies] = useState([]);

  const [selectAllAlergies, setSelectAllAlergies] = useState(false);

  const handleSelectAllAlergies = (event) => {
    setSelectAllAlergies(event.target.checked);
    if (event.target.checked) {
      const allAlergies = Alergy.map((a) => a.id);
      setCheckedIdsAlergies(allAlergies);
    } else {
      setCheckedIdsAlergies([]);
    }
  };

  function handleCheckboxChangeAlergy(event) {
    const checkboxIdAlergyString = event.target.id;
    const checkboxIdAlergy = parseInt(checkboxIdAlergyString);
    if (event.target.checked) {
      setCheckedIdsAlergies([...checkedIdsAlergies, checkboxIdAlergy]);
    } else {
      setCheckedIdsAlergies(
        checkedIdsAlergies.filter((id) => id !== checkboxIdAlergy)
      );
      setSelectAllAlergies(false);
    }
  }

  // Disease checkbox part
  const [checkedIdsDisease, setCheckedIdsDisease] = useState([]);

  const [selectAllDisease, setSelectAllDisease] = useState(false);

  const handleSelectAllChangeDisease = (event) => {
    setSelectAllDisease(event.target.checked);
    if (event.target.checked) {
      const allDiseases = Disease.map((d) => d.id);
      setCheckedIdsDisease(allDiseases);
    } else {
      setCheckedIdsDisease([]);
    }
  };

  function handleCheckboxChangeDiseases(event) {
    const checkboxIdDiseaseString = event.target.id;
    const checkboxIdDiseases = parseInt(checkboxIdDiseaseString);
    if (event.target.checked) {
      setCheckedIdsDisease([...checkedIdsDisease, checkboxIdDiseases]);
    } else {
      setCheckedIdsDisease(
        checkedIdsDisease.filter((id) => id !== checkboxIdDiseases)
      );
      setSelectAllDisease(false);
    }
  }

  const patientData = {
    patient_name: name,
    patient_incharge: inCharge,
    patient_address: address,
    patient_contact_no: phone,
    patient_age: age,
    patient_gender: gender,
    patient_type_id: type,
    patient_alergies: checkedIdsAlergies,
    patient_diseases: checkedIdsDisease,
    is_active: true,
  };

  const RegisterJob = async () => {
    if (id) {
      await dispatch(PatientUpdate(id, patientData));
    } else {
      await dispatch(PatientRegister(patientData));
    }
  };

  useEffect(() => {
    if (id && loadingDetails === false) {
      console.log(Details);
      setName(Details.patient_name);
      setInCharge(Details.patient_incharge);
      setAddress(Details.patient_address);
      setPhone(Details.patient_contact_no);
      setAge(Details.patient_age);
      setGender(Details.patient_gender);
      setType(Details.patient_type_id);
      setCheckedIdsAlergies(
        Array.isArray(Details.alergies) && id
          ? Details.alergies.map((item) => item.alergy_id)
          : []
      );
      setCheckedIdsDisease(
        Array.isArray(Details.disease) && id
          ? Details.disease.map((item) => item.disease_id)
          : []
      );
    } else {
      setName(null);
      setInCharge(null);
      setAddress(null);
      setPhone(null);
      setAge(null);
      setGender(null);
      setType(null);
    }
  }, [id, Details]);

  useEffect(() => {
    dispatch(PatientTypeAction());
    dispatch(AlergyActiveList());
    dispatch(DiseaseActiveList());
    dispatch(SetRoute("Patient Master"));
    if (regsuccess || successUpdate) {
      navigate("/view_patiant");
    }
  }, [dispatch, regsuccess, successUpdate]);

  useEffect(() => {
    if (id) {
      dispatch(PatientDetails(id));
    }
  }, [dispatch, id]);
  return (
    <PageComponent>
      <Container>
        <Button type="button" variant= "contained" >
          <Link to={"/patiant"} style={{ textDecoration: "none" }}>
            Back
          </Link>
        </Button>
        <br/><br/>
        <Stack spacing={2} direction="row">
          <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
            Patient Name
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
            Patient Incharge
            <TextField
              value={inCharge}
              onChange={(e) => {
                setInCharge(e.target.value);
              }}
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
            Address
            <TextField
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
            Telephone Number
            <TextField
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
            Age
            <TextField
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              variant="outlined"
            />
          </FormControl>
        </Stack>
        <Stack spacing={2} sx={{ mt: 2 }} direction="row">
          <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
            Gender
            <Select
              labelId="Patiant"
              id="demo-simple-select"
              fullWidth
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              {genderMaster.map((g) => (
                <MenuItem value={g.gender} key={g.gender}>
                  {g.gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
            Patient Type
            <Select
              labelId="Patiant"
              id="demo-simple-select"
              fullWidth
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {PatientType.map((p) => (
                <MenuItem value={p.id} key={p.id}>
                  {p.patient_type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <FormControlLabel
          label="All particular condition"
          control={
            <Checkbox
              checked={selectAllAlergies}
              onChange={handleSelectAllAlergies}
            />
          }
        />
        <Grid container spacing={2}>
          {Alergy.map((condition) => (
            <Grid key={condition.id} item xs={12} sm={3}>
              <FormControlLabel
                label={condition.alergy_name}
                control={
                  <Checkbox
                    id={condition.id.toString()}
                    checked={checkedIdsAlergies.includes(condition.id)}
                    onChange={handleCheckboxChangeAlergy}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
        <br />
        <FormControlLabel
          label="All office work"
          control={
            <Checkbox
              checked={selectAllDisease}
              onChange={handleSelectAllChangeDisease}
            />
          }
        />
        <Grid container spacing={2}>
          {Disease.map((job) => (
            <Grid key={job.id} item xs={12} sm={3}>
              <FormControlLabel
                label={job.disease_name}
                control={
                  <Checkbox
                    id={job.id.toString()}
                    checked={checkedIdsDisease.includes(job.id)}
                    onChange={handleCheckboxChangeDiseases}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
        &nbsp; &nbsp;
        <div>
          <DxButton
            text={
              loadingRegister === true || loadingUpdate === true
                ? "Loading..."
                : id
                ? "Update"
                : "Save"
            }
            variant="contained"
            type="success"
            useSubmitBehavior={true}
            onClick={RegisterJob}
            validationGroup="Main"
            width="10rem"
            height="3rem"
            fontSize="20rem"
          ></DxButton>
        </div>
      </Container>
    </PageComponent>
  );
};

export default CreatePatient;

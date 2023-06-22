import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DataGrid, { Column, Editing, Paging } from "devextreme-react/data-grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DrugActiveList } from "../../Redux/DrugRedux/DrugActions";
import {
  TreatementRegister,
  TreatementActiveList,
  TreatementDetails,
  TreatementUpdate,
} from "../../Redux/TreatementRedux/TreatementActions";

const CreateNew = ({ templateId }) => {
  const dispatch = useDispatch();

  const [templateName, setTemplateName] = useState(null);
  const [templateType, setTemplateType] = useState(null);

  const [drugId, setDrugId] = useState(null);
  const [drugName, setDrugName] = useState(null);
  const [drugQuantity, setDrugQuantity] = useState(0);
  const [body, setBody] = useState([]);

  const { Drug } = useSelector((state) => state.DrugActive);

  const { TreatementType } = useSelector((state) => state.TreatementType);
  const { treatement } = useSelector((state) => state.TreatementDetails);

  const { loading: regloading, success: regsuccess } = useSelector(
    (state) => state.TreatementRegister
  );

  const { loading: updateloading, success: updatesuccess } = useSelector(
    (state) => state.TreatementUpdate
  );

  const handleChange = () => {
    if (drugId === null) {
      console.log("Please Select A Drug");
    } else if (drugQuantity === 0) {
      console.log("Enter Drug Quantity");
    } else {
      setBody([
        ...body,
        { product_id: drugId, name: drugName, quantity: drugQuantity },
      ]);
      setDrugId(null);
      setDrugName(null);
      setDrugQuantity(0);
    }
  };

  async function SaveTemplate(e) {
    if (body.length === 0) {
      console.log("Please Add atleast one drug");
    } else if (templateName === null) {
      console.log("Please Enter A Template Name");
    } else if (templateType === 0) {
      console.log("Please Select A Template Type");
    } else {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      console.log(user.center);
      const temp = {
        template_center_id: user.center,
        template_name: templateName,
        template_type_id: templateType,
        template_bodies: body,
      };

      if (templateId) {
        await dispatch(TreatementUpdate(templateId, temp));
      } else {
        await dispatch(TreatementRegister(temp));
      }

      setTemplateName("");
      setTemplateType("");
      setBody([]);
    }
  }

  useEffect(() => {
    dispatch(TreatementActiveList());
    dispatch(DrugActiveList());
  }, [dispatch, regsuccess, updatesuccess]);

  useEffect(() => {
    if (templateId && templateId !== treatement?.id) {
      console.log(templateId);
      dispatch(DrugActiveList());
      dispatch(TreatementDetails(templateId));
    }
  }, [templateId, treatement?.id]);

  useEffect(() => {
    if (treatement) {
      setTemplateName(treatement.template_name);
      setTemplateType(treatement.template_type_id);

      const bodies = treatement.template_bodies;

      if (bodies) {
        const updatedBody = bodies.map((t_body) => {
          const id = t_body.product_id;
          const qty = t_body.quantity;

          const p = Drug.find((item) => item.id === parseInt(id));

          if (p) {
            return {
              ...body,
              product_id: id,
              name: p.product,
              quantity: qty,
            };
          }
          return body;
        });
        setBody(updatedBody);
      }
    }
  }, [treatement]);

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>Create New</h3>
        <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
          Template Name
          <TextField
            value={templateName}
            onChange={(e) => {
              setTemplateName(e.target.value);
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
          Category
          <Select
            id="demo-simple-select"
            value={templateType}
            onChange={(e) => {
              setTemplateType(e.target.value);
            }}
            fullWidth
          >
            {TreatementType.map((t) => (
              <MenuItem key={t.id} value={t.id}>
                {t.template_type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <br />
      <div>
        <FormControl sx={{ mr: 2, minWidth: 200, maxWidth: 200 }}>
          Select Drug
          <Select fullWidth value={drugId} label="Price">
            {Drug.map((d) => (
              <MenuItem
                key={d.id}
                value={d.id}
                onClick={(e) => {
                  setDrugId(d.id);
                  setDrugName(d.product);
                }}
              >
                {d.product}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mr: 2, minWidth: 100, maxWidth: 100 }}>
          Quantity
          <TextField
            value={drugQuantity}
            onChange={(event) => setDrugQuantity(event.target.value)}
            variant="outlined"
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={handleChange}
          color="success"
          sx={{ m: 1 }}
        >
          Add +
        </Button>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <DataGrid dataSource={body} keyExpr="product_id" showBorders={true}>
          <Paging enabled={false} />
          <Editing mode="popup" allowDeleting={true} />
          <Column
            dataField="name"
            dataType="string"
            caption="Drug Name"
            width="maxWidth"
          />
          <Column
            dataField="quantity"
            dataType="decimal"
            caption="Quantity"
            width="maxWidth"
          />
        </DataGrid>
      </div>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={SaveTemplate}
          sx={{ mt: 2, minWidth: 150, maxWidth: 150 }}
        >
          {updateloading === true || regloading === true
            ? "Loading..."
            : templateId
            ? "Update Template"
            : "Save Template"}
        </Button>
      </div>
    </>
  );
};

export default CreateNew;

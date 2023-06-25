import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageComponent from "../../Components/PageComponent";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Pager,
  Form,
  SearchPanel,
} from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import { pageSizes, gender } from "../../Data/PaginiationData.js";
import CustomStore from "devextreme/data/custom_store";
import {
  PatientAction,
  PatientDelete,
  PatientUpdate,
} from "../../Redux/PatientRedux/PatientActions";
import { PatientTypeAction } from "../../Redux/PatientTypeRedux/PatientTypeActions";
import { AlergyActiveList } from "../../Redux/AlergyRedux/AlergyActions";
import { Link } from "react-router-dom";

function Patient() {
  const dispatch = useDispatch();

  const { Patient } = useSelector((state) => state.Patient);
  const { PatientType } = useSelector((state) => state.PatientType);

  const { success: regsuccess } = useSelector((state) => state.PatientRegister);

  const { success: successUpdate } = useSelector(
    (state) => state.PatientUpdate
  );

  const { success: successDelete } = useSelector(
    (state) => state.PatientDelete
  );

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Patient,
    remove: async (key) => {
      await dispatch(PatientDelete(key));
    },
  });

  const handleDisplayClick = async (data) => {
    await dispatch(
      PatientUpdate(data.id, { ...data, is_active: !data.is_active })
    );
  };

  const renderButton = ({ data }) => {
    return (
      <Button
        key={data.id}
        variant={data.is_active ? "contained" : "outlined"}
        sx={{ minWidth: 100 }}
        onClick={() => handleDisplayClick(data)}
      >
        {data.is_active ? "Display" : "Hiden"}
      </Button>
    );
  };

  // const [dsAllergy, setDsAllergy] = useState([]);
  // const [allergies, setAllergies] = useState([]);
  // const [allergy, setAllergy] = useState([]);

  // const AllergyProcessComponents = ({data}) => {

  //   const ds = data.data.alergies
  //   console.log(ds)
  //   console.log(data)

  //   const allergyIds = ds.map(allergy => allergy.alergy_id);

  //   console.log(allergyIds);

  //   console.log(dsAllergy);

  //   setDsAllergy(allergyIds);

  //   const onValueChanged = (e) => {
  //     data.setValue(ds);

  //     setDsAllergy(e.value);

  //     setAllergies([]);

  //     e.value.map((item) => {
  //       setAllergies((preList) => [...preList, item]);
  //     });
  //   };

  //   const onSelectionChanged = () => {
  //     data.component.updateDimensions();
  //   };

  //   return (
  //     <TagBox
  //       dataSource={Alergy}
  //       defaultValue={dsAllergy}
  //       valueExpr="id"
  //       displayExpr="alergy_name"
  //       showSelectionControls={true}
  //       maxDisplayedTags={5}
  //       showMultiTagOnly={false}
  //       applyValueMode="useButtons"
  //       searchEnabled={true}
  //       onValueChanged={onValueChanged}
  //       onSelectionChanged={onSelectionChanged}
  //     />
  //   );
  // };

  // useEffect(() => {
  //   setDsAllergy([]);

  //   setAllergy([]);

  //   Patient.map((item) => {
  //     // console.log(item.alergies.alergy_id)
  //     setAllergy((prevArray) => [...prevArray, item.alergies]);
  //   });
  // }, [Patient]);

  // useEffect(() => {
  //   setDsAllergy(allergy);
  // }, [allergy]);

  // const HistoryButton = ({ data }) => {
  //   return (
  //     <Link href={`/history/${data.id}`}>
  //       <Button variant="contained" color="success" sx={{ minWidth: 100 }}>
  //         View
  //       </Button>
  //     </Link>
  //   );
  // };

  useEffect(() => {
    dispatch(PatientAction());
    dispatch(PatientTypeAction());
    dispatch(AlergyActiveList());
    dispatch(SetRoute("Patient Master"));
  }, [dispatch, regsuccess, successUpdate, successDelete]);

  return (
    <PageComponent title="Patient List">
      <Container>
        <Button type="button" variant="contained">
          <Link to={"/patiant"} style={{ textDecoration: "none" }}>
            Back
          </Link>
        </Button>
        <DataGrid
          dataSource={dataSource}
          showBorders={true}
          className="datagrid__max h-auto"
          allowColumnReordering={true}
          allowColumnResizing={true}
          showColumnLines={true}
          showRowLines={true}
          repaintChangesOnly={true}
          useIcons={true}
          rowAlternationEnabled={true}
          onRowUpdating={(e) => {
            e.newData = Object.assign({}, e.oldData, e.newData);
          }}
          onInitNewRow={(e) => {
            e.data.is_active = true;
          }}
        >
          <Paging enabled={false} />
          <SearchPanel visible={true} placeholder="search" />
          <Editing mode="popup" allowDeleting={true}>
            <Popup title="Patient" showTitle={true} width={400} height={500} />
            <Form>
              <Item itemType="group" colSpan={2}>
                <Item dataField="patient_name" />
                <Item dataField="patient_incharge" />
                <Item dataField="patient_address" />
                {/* <Item dataField="alergies" /> */}
                <Item dataField="patient_contact_no" />
                <Item dataField="patient_age" />
                <Item dataField="patient_gender" />
                <Item dataField="patient_type_id" />
                <Item dataField="is_active" />
              </Item>
            </Form>
          </Editing>
          <Column
            dataField="id"
            visible={false}
            caption="ID"
            dataType="int"
            width={100}
          />
          <Column
            dataField="patient_name"
            dataType="string"
            caption="Patient Name"
            width="maxWidth"
          />
          <Column
            dataField="patient_incharge"
            dataType="string"
            caption="Patient Incharge"
            width="maxWidth"
          />
          {/* <Column
            dataField="alergies"
            caption="Allergies"
            allowSorting={false}
            editCellComponent={AllergyProcessComponents}
            visible={false}
          >
            <Lookup
              dataSource={Alergy}
              valueExpr="id"
              displayExpr="alergy_name"
            />
          </Column> */}
          <Column
            dataField="patient_address"
            dataType="string"
            caption="Address"
            width="maxWidth"
          />
          <Column
            dataField="patient_contact_no"
            dataType="string"
            caption="Telephone Number"
            width="maxWidth"
          />
          <Column
            dataField="patient_gender"
            dataType="string"
            caption="Gender"
            width="maxWidth"
          >
            <Lookup
              dataSource={gender}
              valueExpr="gender"
              displayExpr="gender"
            />
          </Column>
          <Column
            dataField="patient_type_id"
            dataType="string"
            caption="Type"
            width="maxWidth"
          >
            <Lookup
              dataSource={PatientType}
              valueExpr="id"
              displayExpr="patient_type"
            />
          </Column>
          <Column
            dataField="is_active"
            dataType="boolean"
            caption="Display"
            cellRender={renderButton}
          />
          <Column
            caption="Edit"
            width={85}
            cellRender={({ data }) => (
              <Button type="button" variant="contained" color="success">
                <Link
                  key={data.id}
                  to={`/create_patiant/${data.id}`}
                  style={{ textDecoration: "none" }}
                >
                  Edit
                </Link>
              </Button>
            )}
          />
          <Column
            caption="History"
            width={85}
            cellRender={({ data }) => (
              <Button type="button" variant="contained" color="secondary">
                <Link
                  key={data.id}
                  to={`/patiant_history/${data.id}`}
                  style={{ textDecoration: "none" }}
                >
                  View
                </Link>
              </Button>
            )}
          />
          <Pager
            allowedPageSizes={pageSizes}
            visible={true}
            showInfo={true}
            showPageSizeSelector={true}
            showNavigationButtons={true}
          />
          <Paging defaultPageSize={25} />
        </DataGrid>
      </Container>
    </PageComponent>
  );
}

export default Patient;

import React, { useEffect } from "react";
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
import { pageSizes } from "../../Data/PaginiationData.js";
import CustomStore from "devextreme/data/custom_store";
import {
  PatientAction,
  PatientRegister,
  PatientDelete,
  PatientUpdate,
} from "../../Redux/PatientRedux/PatientActions";
import { PatientTypeAction } from "../../Redux/PatientTypeRedux/PatientTypeActions";

function Patient() {
  const dispatch = useDispatch();

  const { Patient } = useSelector((state) => state.Patient);
  const { PatientType } = useSelector((state) => state.PatientType);

  const { success: regsuccess } = useSelector((state) => state.PatientRegister);

  const { success: successUpdate } = useSelector((state) => state.PatientUpdate);

  const { success: successDelete } = useSelector((state) => state.PatientDelete);

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Patient,
    insert: async (values) => {
      await dispatch(
        PatientRegister({
          patient_name: values.patient_name,
          patient_incharge: values.patient_incharge,
          patient_address: values.patient_address,
          patient_contact_no: values.patient_contact_no,
          patient_type_id: values.patient_type_id,
          is_active: values.is_active,
        })
      );
    },
    remove: async (key) => {
      await dispatch(PatientDelete(key));
    },
    update: async (key, values) => {
      await dispatch(
        PatientUpdate(key, {
          patient_name: values.patient_name,
          patient_incharge: values.patient_incharge,
          patient_address: values.patient_address,
          patient_contact_no: values.patient_contact_no,
          patient_type_id: values.patient_type_id,
          is_active: values.is_active,
        })
      );
    },
  });

  const renderButton = ({ data }) => {
    return (
      <Button
        variant={data.is_active ? "contained" : "outlined"}
        sx={{ minWidth: 100 }}
        onClick={() =>
          dispatch(
            PatientUpdate(data.id, {
              patient_name: data.patient_name,
              patient_incharge: data.patient_incharge,
              patient_address: data.patient_address,
              patient_contact_no: data.patient_contact_no,
              patient_type_id: data.patient_type_id,
              is_active: !data.is_active,
            })
          )
        }
      >
        {data.is_active ? "Display" : "Hiden"}
      </Button>
    );
  };

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
    dispatch(SetRoute("Patient Master"));
  }, [dispatch, regsuccess, successUpdate, successDelete]);

  return (
    <PageComponent title="Patient List">
      <Container>
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
            <Editing
              mode="popup"
              allowUpdating={true}
              allowAdding={true}
              allowDeleting={true}
            >
              <Popup
                title="Patient"
                showTitle={true}
                width={400}
                height={500}
              />
              <Form>
                <Item itemType="group" colSpan={2}>
                  <Item dataField="patient_name" />
                  <Item dataField="patient_incharge" />
                  <Item dataField="patient_address" />
                  <Item dataField="patient_contact_no" />
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

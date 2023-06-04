import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageComponent from "../../Components/PageComponent";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Pager,
  Form,
  Lookup,
  SearchPanel,
} from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import { pageSizes } from "../../Data/PaginiationData.js";
import CustomStore from "devextreme/data/custom_store";
import { doctor } from "../../Data/Data";
import {
  DoctorLists,
  // BrandRegister,
  // BrandDelete,
  // BrandUpdate,
  // BrandDetails,
} from "../../Redux/DoctorRedux/DoctorActions";
import {
  UserTypeList
} from "../../Redux/UserTypeRedux/UserTypeActions";

function Doctor() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { Doctor } = useSelector((state) => state.Doctor);

  const { UserType } = useSelector((state) => state.UserType);

  async function handleButtonClick(data) {
    console.log(data);
  }

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Doctor,
    insert: async (values) => {
      // await dispatch(
      //   InformationRegister({
      //     brand_name: values.brand_name,
      //     is_active: values.is_active,
      //   })
      // );
    },
    remove: async (key) => {
      //   await dispatch(InformationDelete(key));
    },
    update: async (key, values) => {
      // await dispatch(
      //   InformationUpdate(key, {
      //     brand_name: values.brand_name,
      //     is_active: values.is_active,
      //   })
      // );
    },
  });


  useEffect(() => {
    dispatch(DoctorLists());
    dispatch(UserTypeList());
    dispatch(SetRoute("Doctor Master"));
  }, [dispatch]);

  useEffect(() => {
    if (userInfo.user.user_type !== 1) {
      navigate("/master");
    }
  }, [userInfo]);

  return (
    <PageComponent title="Doctor List">
      <Container>
        <div style={{ display: "flex" }}>
          <DataGrid
            dataSource={dataSource}
            // keyExpr="id"
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
              // allowUpdating={true}
              // allowAdding={true}
              // allowDeleting={true}
            >
              <Popup title="Doctor" showTitle={true} width={400} height={410} />
              <Form>
                <Item itemType="group" colSpan={2}>
                  {/* <Item dataField="id" /> */}
                  <Item dataField="name" />
                  <Item dataField="user_type" />
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
              dataField="name"
              dataType="string"
              caption="Doctor Name"
              width="maxWidth"
            />
            <Column
              dataField="user_type.user_type"
              dataType="string"
              caption="User Type"
              width="maxWidth"
            >
              {/* <Lookup dataSource={UserType} valueExpr="id" displayExpr="user_type" /> */}
            </Column>
            <Column
              dataField="nic_number"
              dataType="string"
              caption="NIC Number"
              visible={false}
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
        </div>
      </Container>
    </PageComponent>
  );
}

export default Doctor;

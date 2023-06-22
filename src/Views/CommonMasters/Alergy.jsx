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
  Pager,
  Form,
  SearchPanel,
} from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import { pageSizes } from "../../Data/PaginiationData.js";
import CustomStore from "devextreme/data/custom_store";
import {
  AlergyLists,
  AlergyRegister,
  AlergyDelete,
  AlergyUpdate,
} from "../../Redux/AlergyRedux/AlergyActions";

function Alergy() {
  const dispatch = useDispatch();

  const { Alergy } = useSelector((state) => state.Alergy);

  const { success: regsuccess } = useSelector((state) => state.AlergyRegister);

  const { success: successUpdate } = useSelector((state) => state.AlergyUpdate);

  const { success: successDelete } = useSelector((state) => state.AlergyDelete);

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Alergy,
    insert: async (values) => {
      await dispatch(
        AlergyRegister({
          alergy_name: values.alergy_name,
          is_active: values.is_active,
        })
      );
    },
    remove: async (key) => {
      await dispatch(AlergyDelete(key));
    },
    update: async (key, values) => {
      await dispatch(
        AlergyUpdate(key, {
          alergy_name: values.alergy_name,
          is_active: values.is_active,
        })
      );
    },
  });

  const renderButton = ({ data }) => {
    return (
      <Button
        key={data.id}
        variant={data.is_active ? "contained" : "outlined"}
        sx={{ minWidth: 100 }}
        onClick={() =>
          dispatch(
            AlergyUpdate(data.id, {
              alergy_name: data.alergy_name,
              is_active: !data.is_active,
            })
          )
        }
      >
        {data.is_active ? "Display" : "Hiden"}
      </Button>
    );
  };

  useEffect(() => {
    dispatch(AlergyLists());
    dispatch(SetRoute("Alergy Master"));
  }, [dispatch, regsuccess, successUpdate, successDelete]);

  return (
    <PageComponent title="Alergy List">
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
              allowUpdating={true}
              allowAdding={true}
              allowDeleting={true}
            >
              <Popup title="Alergy" showTitle={true} width={400} height={360} />
              <Form>
                <Item itemType="group" colSpan={2}>
                  {/* <Item dataField="id" /> */}
                  <Item dataField="alergy_name" />
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
              dataField="alergy_name"
              dataType="string"
              caption="Alergy Name"
              width="maxWidth"
            />
            <Column
              dataField="is_active"
              dataType="boolean"
              caption="Display"
              cellRender={renderButton}
              width={150}
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

export default Alergy;

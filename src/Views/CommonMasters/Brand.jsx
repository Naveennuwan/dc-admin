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
  BrandLists,
  BrandRegister,
  BrandDelete,
  BrandUpdate,
} from "../../Redux/BrandRedux/BrandActions";

function Brand() {
  const dispatch = useDispatch();

  const { Brand } = useSelector((state) => state.Brand);

  const { success: regsuccess } = useSelector((state) => state.BrandRegister);

  const { success: successUpdate } = useSelector((state) => state.BrandUpdate);

  const { success: successDelete } = useSelector((state) => state.BrandDelete);

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Brand,
    insert: async (values) => {
      await dispatch(
        BrandRegister({
          brand: values.brand,
          is_active: values.is_active,
        })
      );
    },
    remove: async (key) => {
      await dispatch(BrandDelete(key));
    },
    update: async (key, values) => {
      await dispatch(
        BrandUpdate(key, {
          brand: values.brand,
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
            BrandUpdate(data.id, {
              brand: data.brand,
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
    dispatch(BrandLists());
    dispatch(SetRoute("Brand Master"));
  }, [dispatch, regsuccess, successUpdate, successDelete]);

  return (
    <PageComponent title="Brand List">
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
              <Popup title="Brand" showTitle={true} width={400} height={360} />
              <Form>
                <Item itemType="group" colSpan={2}>
                  {/* <Item dataField="id" /> */}
                  <Item dataField="brand" />
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
              dataField="brand"
              dataType="string"
              caption="Brand Name"
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

export default Brand;

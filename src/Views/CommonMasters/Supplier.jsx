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
  SupplierList,
  SupplierRegister,
  SupplierDelete,
  SupplierUpdate,
  SupplierDetails,
} from "../../Redux/SupplierRedux/SupplierActions";

function Supplier() {
  const dispatch = useDispatch();

  const { Supplier } = useSelector((state) => state.Supplier);

  const { success: regsuccess } = useSelector(
    (state) => state.SupplierRegister
  );

  const { success: successUpdate } = useSelector(
    (state) => state.SupplierUpdate
  );

  const { success: successDelete } = useSelector(
    (state) => state.SupplierDelete
  );

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Supplier,
    insert: async (values) => {
      await dispatch(
        SupplierRegister({
          supplier: values.supplier,
          supplier_contact: values.supplier_contact,
          is_active: values.is_active,
        })
      );
    },
    remove: async (key) => {
      await dispatch(SupplierDelete(key));
    },
    update: async (key, values) => {
      await dispatch(
        SupplierUpdate(key, {
          supplier: values.supplier,
          supplier_contact: values.supplier_contact,
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
            SupplierUpdate(data.id, {
              supplier: data.supplier,
              supplier_contact: data.supplier_contact,
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
    dispatch(SupplierList());
    dispatch(SetRoute("Supplier Master"));
  }, [dispatch, regsuccess, successUpdate, successDelete]);

  return (
    <PageComponent title="Supplier List">
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
              <Popup
                title="Supplier"
                showTitle={true}
                width={400}
                height={360}
              />
              <Form>
                <Item itemType="group" colSpan={2}>
                  {/* <Item dataField="id" /> */}
                  <Item dataField="supplier" />
                  <Item dataField="supplier_contact" />
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
              dataField="supplier"
              dataType="string"
              caption="Supplier Name"
              width="maxWidth"
            />
            <Column
              dataField="supplier_contact"
              dataType="string"
              caption="Telephone Number"
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

export default Supplier;

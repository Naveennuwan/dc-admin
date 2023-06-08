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
  Lookup,
  SearchPanel,
} from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";
import { SetRoute } from "../../Redux/RouteRedux/RouteActions";
import { pageSizes } from "../../Data/PaginiationData.js";
import CustomStore from "devextreme/data/custom_store";
import { BrandActiveList } from "../../Redux/BrandRedux/BrandActions";
import { CategoryActiveList } from "../../Redux/CategoryRedux/CategoryActions";
import { SupplierActiveList } from "../../Redux/SupplierRedux/SupplierActions";
import {
  DrugList,
  DrugRegister,
  DrugDelete,
  DrugUpdate,
} from "../../Redux/DrugRedux/DrugActions";

function Drug() {
  const dispatch = useDispatch();
  const { Brand } = useSelector((state) => state.BrandActive);
  const { Category } = useSelector((state) => state.CategoryActive);
  const { Supplier } = useSelector((state) => state.SupplierActive);

  const { Drug } = useSelector((state) => state.Drug);

  const { success: regsuccess } = useSelector((state) => state.DrugRegister);

  const { success: successUpdate } = useSelector((state) => state.DrugUpdate);

  const { success: successDelete } = useSelector((state) => state.DrugDelete);

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Drug,
    insert: async (values) => {
      await dispatch(
        DrugRegister({
          product: values.product,
          description: values.description,
          brand_id: values.brand_id,
          category_id: values.category_id,
          supplier_id: values.supplier_id,
          is_active: values.is_active,
        })
      );
    },
    remove: async (key) => {
      await dispatch(DrugDelete(key));
    },
    update: async (key, values) => {
      await dispatch(
        DrugUpdate(key, {
          product: values.product,
          description: values.description,
          brand_id: values.brand_id,
          category_id: values.category_id,
          supplier_id: values.supplier_id,
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
            DrugUpdate(data.id, {
              product: data.product,
              description: data.description,
              brand_id: data.brand_id,
              category_id: data.category_id,
              supplier_id: data.supplier_id,
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
    dispatch(DrugList());
    dispatch(BrandActiveList());
    dispatch(CategoryActiveList());
    dispatch(SupplierActiveList());
    dispatch(SetRoute("Drug Master"));
  }, [dispatch, regsuccess, successUpdate, successDelete]);

  return (
    <PageComponent title="Drug List">
      <Container>
        <div style={{ display: "flex" }}>
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
              <Popup title="Drug" showTitle={true} width={400} height={510} />
              <Form>
                <Item itemType="group" colSpan={2}>
                  <Item dataField="product" />
                  <Item dataField="brand_id" />
                  <Item dataField="category_id" />
                  <Item dataField="supplier_id" />
                  <Item dataField="description" />
                  <Item dataField="is_active" />
                </Item>
              </Form>
            </Editing>
            <Column dataField="id"
              visible={false} caption="ID" dataType="int" width={100} />
            <Column
              dataField="product"
              dataType="string"
              caption="Drug Name"
              width="maxWidth"
            />
            <Column
              dataField="brand_id"
              dataType="string"
              caption="Brand"
              width="maxWidth"
            >
              <Lookup
                dataSource={Brand}
                valueExpr="id"
                displayExpr="brand"
              />
            </Column>
            <Column
              dataField="category_id"
              dataType="string"
              caption="Category"
              width="maxWidth"
            >
              <Lookup
                dataSource={Category}
                valueExpr="id"
                displayExpr="category"
              />
            </Column>
            <Column
              dataField="supplier_id"
              dataType="string"
              caption="Supplier"
              width="maxWidth"
            >
              <Lookup
                dataSource={Supplier}
                valueExpr="id"
                displayExpr="supplier"
              />
            </Column>
            <Column
              dataField="description"
              dataType="string"
              caption="Description"
              visible={false}
              width="maxWidth"
            />
            <Column
              dataField="other"
              dataType="string"
              caption="Other"
              visible={false}
              width={150}
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

export default Drug;

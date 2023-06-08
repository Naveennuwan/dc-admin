import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageSizes } from "../../Data/PaginiationData.js";
import DataGrid, {
  Column,
  Paging,
  Pager,
  Lookup,
  SearchPanel,
} from "devextreme-react/data-grid";
import { StockLists } from "../../Redux/StockRedux/StockActions.js";
import { DrugActiveList } from "../../Redux/DrugRedux/DrugActions";

const StockTable = () => {
  const dispatch = useDispatch();
  const { Stock } = useSelector((state) => state.Stock);

  const { Drug } = useSelector((state) => state.Drug);

  useEffect(() => {
    dispatch(StockLists());
    dispatch(DrugActiveList());
  }, [dispatch]);
  return (
    <div style={{ display: "flex" }}>
      <DataGrid
        dataSource={Stock}
        keyExpr="id"
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
        {/* <Editing
              mode="popup"
              allowUpdating={true}
              allowAdding={false}
              allowDeleting={true}
            >
              <Popup title="Brand" showTitle={true} width={400} height={360} />
              <Form>
                <Item itemType="group" colSpan={2}>
                  <Item dataField="id" />
                  <Item dataField="drug" />
                  <Item dataField="expDate" />
                  <Item dataField="quantity" />
                </Item>
              </Form>
            </Editing> */}
        <Column dataField="id" caption="ID" dataType="int" width={100} />
        <Column
          dataField="product_id"
          dataType="string"
          caption="Drug Name"
          width="maxWidth"
          >
            <Lookup
              dataSource={Drug}
              valueExpr="id"
              displayExpr="product"
            />
          </Column>
        <Column
          dataField="expire_date"
          dataType="date"
          caption="Expire Date"
          width="maxWidth"
        />
        <Column
          dataField="quantity"
          dataType="decimal"
          caption="Quantity"
          width="maxWidth"
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
  );
};

export default StockTable;

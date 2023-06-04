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
import {
  MasterLists,
  MasterUpdate,
} from "../../Redux/MasterDataRedux/MasterActions";
import { GetCenters } from "../../Redux/CenterRedux/CenterActions";

function MasterData() {
  const dispatch = useDispatch();

  const { Master } = useSelector((state) => state.Master);

  const { centers } = useSelector((state) => state.Center);

  const { success: successUpdate } = useSelector((state) => state.MasterUpdate);

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Master,
    update: async (key, values) => {
      await dispatch(
        MasterUpdate(key, {
          profite: values.profite,
          discount: values.discount,
          center_id: values.center_id,
        })
      );
    },
  });

  useEffect(() => {
    dispatch(MasterLists());
    dispatch(GetCenters());
    dispatch(SetRoute("Master Data"));
  }, [dispatch, successUpdate]);

  return (
    <PageComponent title="Brand List">
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
            >
              <Popup
                title="Master Data"
                showTitle={true}
                width={400}
                height={360}
              />
              <Form>
                <Item itemType="group" colSpan={2}>
                  <Item dataField="profite" />
                  <Item dataField="discount" />
                </Item>
              </Form>
            </Editing>
            <Column
              dataField="center_id"
              dataType="string"
              caption="Center"
              width="maxWidth"
            >
              <Lookup
                dataSource={centers}
                valueExpr="id"
                displayExpr="center"
              />
            </Column>
            <Column
              dataField="id"
              visible={false}
              caption="ID"
              dataType="int"
              width={100}
            />
            <Column
              dataField="profite"
              dataType="number"
              caption="Profite (%)"
              width="maxWidth"
            />
            <Column
              dataField="discount"
              dataType="number"
              caption="Discount (%)"
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
      </Container>
    </PageComponent>
  );
}

export default MasterData;

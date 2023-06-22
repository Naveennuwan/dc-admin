import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
  MasterDetail,
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import {
  TreatementActiveList,
  TreatementDelete,
} from "../../Redux/TreatementRedux/TreatementActions";
import Button from "@mui/material/Button";
import MasterDetailGrid from './MasterDetailGrid.jsx';

const TemplateTable = ({ setTemplateId }) => {
  const dispatch = useDispatch();

  const { TreatementType } = useSelector((state) => state.TreatementType);

  const { Treatement } = useSelector((state) => state.TreatementActive);

  const { success: successDelete } = useSelector(
    (state) => state.TreatementDelete
  );
  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => Treatement,
    remove: async (key) => {
      await dispatch(TreatementDelete(key));
    },
  });

  const editHandler = (e) => {
    setTemplateId(e.data.id);
  };

  useEffect(() => {
    dispatch(TreatementActiveList());
  }, [dispatch, successDelete]);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Medical Templates</h3>
      <div style={{ display: "flex" }}>
        <DataGrid
          dataSource={dataSource}
          keyExpr="id"
          showBorders={true}
          showRowLines={true}
          showColumnLines={true}
          onEditingStart={editHandler}
        >
        <MasterDetail
          enabled={true}
          component={MasterDetailGrid}
        />
          <Paging enabled={false} />
          <Editing allowUpdating={false} allowDeleting={true} />
          <Column
            dataField="id"
            caption="No."
            dataType="int"
            visible={false}
            width={50}
          />
          <Column
            dataField="template_name"
            dataType="string"
            caption="Treatement Name"
            width="maxWidth"
          />
          <Column
            dataField="template_type_id"
            dataType="string"
            caption="Template Type"
            width="maxWidth"
          >
            <Lookup
              dataSource={TreatementType}
              valueExpr="id"
              displayExpr="template_type"
            />
          </Column>
          <Column
            caption="Edit"
            width={70}
            cellRender={({ data }) => (
              <Button type="button" onClick={() => editHandler({ data })}>
                Edit
              </Button>
            )}
          />
        </DataGrid>
      </div>
    </>
  );
};

export default TemplateTable;

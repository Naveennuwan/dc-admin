import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
} from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import {
  TreatementActiveList,
  TreatementDelete,
} from "../../Redux/TreatementRedux/TreatementActions";

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
    update: async (key) => {
      setTemplateId(key);
    },
  });

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
          className="datagrid__max h-auto"
          allowColumnReordering={true}
          allowColumnResizing={true}
          showColumnLines={true}
          showRowLines={true}
          repaintChangesOnly={true}
          useIcons={true}
          rowAlternationEnabled={true}
        >
          <Paging enabled={false} />
          <Editing
            refreshMode="reshape"
            mode="popup"
            useIcons={false}
            allowUpdating={true}
            allowDeleting={true}
          />
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
        </DataGrid>
      </div>
    </>
  );
};

export default TemplateTable;

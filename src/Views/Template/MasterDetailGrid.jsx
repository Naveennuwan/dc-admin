import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataGrid, { Lookup, Column } from "devextreme-react/data-grid";
import { DrugActiveList } from "../../Redux/DrugRedux/DrugActions";

import CustomStore from "devextreme/data/custom_store";

const MasterDetailGrid = ({ data }) => {
  const dispatch = useDispatch();

  const { Drug } = useSelector((state) => state.DrugActive);

  const dataSource = new CustomStore({
    key: "id",
    loadMode: "raw",
    load: () => data.data.template_bodies,
  });

  useEffect(() => {
    dispatch(DrugActiveList());
  }, [dispatch]);
  return (
    <DataGrid dataSource={dataSource} keyExpr="id" showBorders={true}
    showRowLines={true}
    showColumnLines={true}>
      <Column
        dataField="product_id"
        caption="Drug Name"
        dataType="int"
        width="maxWidth"
      >
        <Lookup dataSource={Drug} valueExpr="id" displayExpr="product" />
      </Column>
      <Column
        dataField="quantity"
        dataType="string"
        caption="Treatement quantity"
        width="maxWidth"
      />
    </DataGrid>
  );
};

export default MasterDetailGrid;
